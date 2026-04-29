const store = global.antiGmStore || (global.antiGmStore = new Set());

export function isAntiGmEnabled(chatId) {
    return store.has(chatId);
}

export default {
    name: 'antigm',
    aliases: ['antistatusmention'],
    category: 'admin',
    description: 'Delete messages that mention status/newsletter tags in group',
    usage: 'antigm on|off',
    groupOnly: true,
    adminOnly: true,
    botAdminRequired: true,
    cooldown: 2,
    async execute({ sock, message, from, args }) {
        const action = String(args[0] || '').toLowerCase();
        if (!['on', 'off'].includes(action)) {
            return sock.sendMessage(from, { text: 'Usage: antigm on|off' }, { quoted: message });
        }
        if (action === 'on') store.add(from);
        else store.delete(from);
        return sock.sendMessage(from, { text: `✅ AntiGM is now ${action.toUpperCase()} for this group.` }, { quoted: message });
    }
};
