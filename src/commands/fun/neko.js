import axios from 'axios';

export default {
  name: 'neko', aliases: ['nekopic'], category: 'fun', description: 'Random neko image', usage: 'neko', cooldown: 5,
  async execute({ sock, message, from }) {
    try {
      const { data } = await axios.get('https://api.nekosapi.com/v4/images/random', { timeout: 10000 });
      const imageUrl = Array.isArray(data) ? data[0]?.url : data?.url;
      if (!imageUrl) throw new Error('No image returned');
      await sock.sendMessage(from, { image: { url: imageUrl }, caption: '🐾 Random Neko' }, { quoted: message });
    } catch (e) {
      await sock.sendMessage(from, { text: `❌ neko failed: ${e.message}` }, { quoted: message });
    }
  }
};
