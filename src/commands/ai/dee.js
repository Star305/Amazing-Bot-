import axios from 'axios';

const DEE_PHOTOS = [
    'https://i.ibb.co/YTBPq5vj/fd53ebefdcd3.jpg',
    'https://i.ibb.co/NnL8S4wh/a66e525b87e6.jpg',
    'https://i.ibb.co/sddkLcYb/6d380869a836.jpg',
    'https://i.ibb.co/dJbKGRs3/326a2aae34ae.jpg',
    'https://i.ibb.co/BKL2zxbc/2c46c549b9bf.jpg',
    'https://i.ibb.co/TDqPDWR7/e01a00c28dbe.jpg',
    'https://i.ibb.co/W4vHzL2K/2a7d9aa8ada1.jpg',
    'https://i.ibb.co/7JpCFqLK/3cb6c963741f.jpg',
    'https://i.ibb.co/5hPk0TBh/0b71da45787b.jpg'
];

const CAPTIONS = [
    'Okay this is what I look like 😌',
    'Trust me, you gonna fall for me 💘',
    'I know you gon like it 😉',
    'How do I look? 💋'
];

const MODEL_CHOICES = {
    qwen: process.env.DEE_QWEN_MODEL || 'qwen/qwen2.5-vl-72b-instruct:free',
    gemini: process.env.DEE_GEMINI_MODEL || 'google/gemini-2.0-flash-001',
    groq: process.env.DEE_GROQ_MODEL || 'meta-llama/llama-3.3-70b-instruct'
};

const state = global.deeState || (global.deeState = { enabledChats: new Set(), memory: new Map(), models: new Map() });

function isPhotoRequest(text = '') {
    return /(photo|picture|pic|face|selfie|what do you look like|viewonce|view one)/i.test(text);
}


function getActiveModel(chatId) {
    const key = String(state.models.get(chatId) || 'qwen').toLowerCase();
    return MODEL_CHOICES[key] ? key : 'qwen';
}

function buildHelp(prefix = '.') {
    return [
        '💘 *Dee Help List*',
        `${prefix}dee on - turn Dee on in this chat`,
        `${prefix}dee off - turn Dee off in this chat`,
        `${prefix}dee model qwen`,
        `${prefix}dee model gemini`,
        `${prefix}dee model groq`,
        `${prefix}dee list - show all Dee functions`,
        `${prefix}dee <message> - chat with Dee`,
        `${prefix}dee pic - ask for Dee view-once photo`
    ].join('\n');
}

export default {
    name: 'dee',
    aliases: ['mrsdee', 'babe', 'bestie'],
    category: 'ai',
    description: 'Girlfriend AI assistant with on/off switch and photo mode',
    usage: 'dee on|off|model <qwen|gemini|groq>|list|help|<message>',
    cooldown: 3,

    async execute({ sock, message, from, args, sender, prefix = '.' }) {
        const text = args.join(' ').trim();
        const cmd = text.toLowerCase();
        if (cmd === 'on') {
            state.enabledChats.add(from);
            return sock.sendMessage(from, { text: '✅ Dee is now ON for this chat.' }, { quoted: message });
        }
        if (cmd === 'off') {
            state.enabledChats.delete(from);
            return sock.sendMessage(from, { text: '✅ Dee is now OFF for this chat.' }, { quoted: message });
        }
        if (cmd === 'help' || cmd === 'menu') return sock.sendMessage(from, { text: buildHelp(prefix) }, { quoted: message });
        if (cmd === 'list') {
            const active = getActiveModel(from);
            return sock.sendMessage(from, {
                text: `📜 *Dee List*\n- Romantic chat companion\n- Sends view-once photos when asked\n- Remembers short context\n- Identity: always introduces herself as Dee\n- Current model: *${active}* (${MODEL_CHOICES[active]})\n\nUse: ${prefix}dee help`
            }, { quoted: message });
        }
        if (cmd.startsWith('model ')) {
            const want = cmd.split(/\s+/)[1];
            if (!MODEL_CHOICES[want]) {
                return sock.sendMessage(from, { text: `❌ Choose one: qwen, gemini, groq` }, { quoted: message });
            }
            state.models.set(from, want);
            return sock.sendMessage(from, { text: `✅ Dee model set to *${want}*.` }, { quoted: message });
        }

        if (!state.enabledChats.has(from)) {
            return sock.sendMessage(from, { text: '⚠️ Dee is off in this chat. Use `.dee on` first.' }, { quoted: message });
        }
        if (!text) return sock.sendMessage(from, { text: 'Hey love, tell me something 💕' }, { quoted: message });

        if (isPhotoRequest(text)) {
            const image = DEE_PHOTOS[Math.floor(Math.random() * DEE_PHOTOS.length)];
            const cap = `${CAPTIONS[Math.floor(Math.random() * CAPTIONS.length)]}\n\nI am Dee 💖`; 
            return sock.sendMessage(from, {
                image: { url: image },
                caption: cap,
                viewOnce: true
            }, { quoted: message });
        }

        const key = `${from}:${sender}`;
        const prev = state.memory.get(key) || [];
        const history = [...prev.slice(-6), `User: ${text}`].join('\n');
        const prompt = `You are Dee (Mrs Dee), a warm romantic chatbot. Always make it clear you are Dee. Keep responses short, sweet, and playful.\n${history}`;

        try {
            const selected = getActiveModel(from);
            const { data } = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
                model: MODEL_CHOICES[selected],
                messages: [{ role: 'user', content: prompt }]
            }, {
                headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}` },
                timeout: 60000
            });
            const reply = data?.choices?.[0]?.message?.content?.trim() || 'I am here with you, always 💕';
            state.memory.set(key, [...prev.slice(-10), `User: ${text}`, `Dee: ${reply}`]);
            return sock.sendMessage(from, { text: reply }, { quoted: message });
        } catch {
            const fallback = 'Aww, network mood swing 😅 but I am still here for you babe 💖';
            state.memory.set(key, [...prev.slice(-10), `User: ${text}`, `Dee: ${fallback}`]);
            return sock.sendMessage(from, { text: fallback }, { quoted: message });
        }
    }
};
