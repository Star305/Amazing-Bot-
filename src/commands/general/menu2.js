import axios from 'axios';
import { getAllCommands } from '../../utils/commandManager.js';

function getCommandsByCategory() {
    const buckets = {};
    for (const cmd of getAllCommands()) {
        if (!cmd?.name) continue;
        const cat = String(cmd.category || 'general').toLowerCase();
        if (!buckets[cat]) buckets[cat] = [];
        buckets[cat].push(cmd.name);
    }
    for (const cat of Object.keys(buckets)) buckets[cat] = [...new Set(buckets[cat])].sort();
    return buckets;
}

function buildMenu(prefix, categories) {
    let text = '╔═══〔 ✨ BOT COMMAND CENTER ✨ 〕═══╗\n';
    text += `║ Prefix: [ ${prefix} ]\n`;
    text += `║ Categories: ${Object.keys(categories).length}\n`;
    const total = Object.values(categories).reduce((a, c) => a + c.length, 0);
    text += `║ Total Commands: ${total}\n`;
    text += '╚═══════════════════════════════════╝\n\n';

    for (const cat of Object.keys(categories).sort()) {
        const list = categories[cat];
        text += `┏━〔 ${cat.toUpperCase()} • ${list.length} 〕\n`;
        text += `┃ ${list.map((c) => `${prefix}${c}`).join('  •  ')}\n`;
        text += '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n';
    }
    text += '\nUse: .help <command> for details.';
    return text;
}

export default {
    name: 'menu2',
    aliases: ['categoriesmenu', 'catmenu2'],
    category: 'general',
    description: 'Beautiful categories + full command list menu',
    usage: 'menu2',
    cooldown: 3,

    async execute({ sock, message, from, prefix }) {
        const categories = getCommandsByCategory();
        const caption = buildMenu(prefix, categories);

        try {
            const { data } = await axios.get('https://api.nekosapi.com/v4/images/random', { timeout: 12000 });
            if (data?.url) {
                const imgUrl = Array.isArray(data) ? data[0]?.url : data?.url;
                if (imgUrl) await sock.sendMessage(from, { image: { url: imgUrl }, caption }, { quoted: message });
                else await sock.sendMessage(from, { text: caption }, { quoted: message });
            } else {
                await sock.sendMessage(from, { text: caption }, { quoted: message });
            }
        } catch {}

        try {
            const { data: song } = await axios.get(`https://apis.davidcyril.name.ng/play?query=${encodeURIComponent('random music')}`, { timeout: 20000 });
            if (song?.status && song?.result?.download_url && String(song?.creator||'').toLowerCase()==='david cyril') {
                await sock.sendMessage(from, { audio: { url: song.result.download_url }, mimetype: 'audio/mpeg', ptt: false }, { quoted: message });
            }
        } catch {}
        return null;
    }
};
