import axios from 'axios';

export default {
  name: 'animesearch',
  aliases: ['animefind', 'asearch'],
  category: 'ai',
  description: 'Search anime titles',
  usage: 'animesearch <title>',
  cooldown: 4,
  async execute({ sock, message, from, args }) {
    const query = args.join(' ').trim();
    if (!query) return sock.sendMessage(from, { text: '❌ Usage: animesearch Naruto' }, { quoted: message });
    try {
      const { data } = await axios.get('https://omegatech-api.dixonomega.tech/api/Anime/anime-search', { params: { query }, timeout: 30000 });
      const items = Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : [];
      if (!items.length) return sock.sendMessage(from, { text: `No anime found for: ${query}` }, { quoted: message });
      const lines = items.slice(0, 8).map((x, i) => `${i + 1}. ${x.title || x.name || 'Unknown'}`);
      return sock.sendMessage(from, { text: `🎌 Anime results for *${query}*\n\n${lines.join('\n')}` }, { quoted: message });
    } catch (e) {
      return sock.sendMessage(from, { text: `❌ animesearch failed: ${e.message}` }, { quoted: message });
    }
  }
};
