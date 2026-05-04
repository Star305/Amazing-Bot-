import { setAntiHijackConfig, getAntiHijackConfig } from '../../utils/antihijackStore.js';

function normalizeJid(raw = '') {
    return String(raw || '').split(':')[0];
}

export default {
    name: 'antihijack',
    aliases: ['ahijack'],
    category: 'admin',
    description: 'Protects group by demoting all admins except super admin and removes command caller',
    usage: 'antihijack <on|off|status|enforce>',
    cooldown: 3,
    groupOnly: true,
    adminOnly: true,
    botAdminRequired: true,

    async execute({ sock, message, args, from, sender }) {
        const action = String(args[0] || 'status').toLowerCase();
        if (!['on', 'off', 'status', 'enforce'].includes(action)) {
            return sock.sendMessage(from, { text: '❌ Usage: antihijack <on|off|status|enforce>' }, { quoted: message });
        }

        if (action === 'status') {
            const conf = await getAntiHijackConfig(from);
            return sock.sendMessage(from, {
                text: `🛡️ AntiHijack is *${conf.enabled ? 'ON' : 'OFF'}*\nOwner lock: ${conf.ownerJid || 'not set'}`
            }, { quoted: message });
        }

        if (action === 'off') {
            await setAntiHijackConfig(from, false, '');
            return sock.sendMessage(from, { text: '✅ AntiHijack turned OFF.' }, { quoted: message });
        }


        if (action === 'enforce' || action === 'on') {
            const meta = await sock.groupMetadata(from);
            const botId = String(sock?.user?.id || '').split(':')[0] + '@s.whatsapp.net';
            const admins = (meta?.participants || []).filter((p) => p.admin);
            const superAdmins = admins.filter((p) => p.admin === 'superadmin').map((p) => p.id);
            const demoteTargets = admins
                .filter((p) => p.id !== botId)
                .filter((p) => p.admin !== 'superadmin')
                .map((p) => p.id);
            const removeTargets = [sender].filter((jid) => jid && jid !== botId && !superAdmins.includes(jid));

            for (let i = 0; i < demoteTargets.length; i += 10) {
                await sock.groupParticipantsUpdate(from, demoteTargets.slice(i, i + 10), 'demote');
            }
            if (removeTargets.length) {
                await sock.groupParticipantsUpdate(from, removeTargets, 'remove');
            }

            if (action === 'enforce') {
                return sock.sendMessage(from, { text: `✅ Enforced admin lock. Demoted: ${demoteTargets.length}, removed caller: ${removeTargets.length ? 'yes' : 'no'}.` }, { quoted: message });
            }
        }

        const cleanSender = normalizeJid(sender);
        await setAntiHijackConfig(from, true, cleanSender);

        return sock.sendMessage(from, {
            text: [
                '✅ AntiHijack turned ON.',
                'Now watching for: hijacked, bug, crashgc.',
                'Offenders will be kicked automatically.'
            ].join('\n')
        }, { quoted: message });
    }
};
