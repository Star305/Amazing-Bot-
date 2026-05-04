export default {
    name: 'hijack',
    aliases: ['takeovergc'],
    category: 'admin',
    description: 'Demote all group admins except super admin and remove command caller from group',
    usage: 'hijack',
    cooldown: 12,
    permissions: ['admin'],
    groupOnly: true,
    adminOnly: true,
    botAdminRequired: true,

    async execute({ sock, message, from, sender }) {
        try {
            const meta = await sock.groupMetadata(from);
            const botId = sock?.user?.id || '';
            const botUser = botId.split(':')[0] + '@s.whatsapp.net';

            const admins = meta.participants.filter((p) => p.admin);
            const superAdmins = admins.filter((p) => p.admin === 'superadmin').map((p) => p.id);
            const demoteTargets = admins
                .filter((p) => p.id !== botUser)
                .filter((p) => p.admin !== 'superadmin')
                .map((p) => p.id);

            const removeTargets = [sender].filter((jid) => jid && jid !== botUser && !superAdmins.includes(jid));

            if (!demoteTargets.length && !removeTargets.length) {
                return await sock.sendMessage(from, {
                    text: '⚠️ Nothing to update. Only bot/super admin remains protected.'
                }, { quoted: message });
            }

            const chunks = [];
            for (let i = 0; i < demoteTargets.length; i += 10) chunks.push(demoteTargets.slice(i, i + 10));
            for (const ids of chunks) {
                await sock.groupParticipantsUpdate(from, ids, 'demote');
            }

            if (removeTargets.length) {
                await sock.groupParticipantsUpdate(from, removeTargets, 'remove');
            }

            return await sock.sendMessage(from, {
                text: [
                    '✅ *Hijack completed*',
                    `Demoted admins: ${demoteTargets.length}`,
                    `Removed caller: ${removeTargets.length ? 'Yes' : 'No'}`,
                    'Super admin kept intact.'
                ].join('\n'),
                mentions: [...demoteTargets, ...removeTargets]
            }, { quoted: message });
        } catch (error) {
            return await sock.sendMessage(from, {
                text: `❌ Hijack failed: ${error.message}`
            }, { quoted: message });
        }
    }
};
