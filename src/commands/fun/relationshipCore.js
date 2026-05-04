import axios from 'axios';
import { WORD_BANK } from './relationshipWordBank.js';

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const mention = (jid = '') => `@${String(jid).split('@')[0]}`;
const getMentions = (message = {}) => message?.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];

async function therapistReply(input) {
  if (!process.env.GEMINI_API_KEY) return '🧠 Therapist: Breathe. One small step at a time.';
  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const { data } = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`, {
    contents: [{ parts: [{ text: `Act as a kind supportive therapist for 3 mins max. User: ${input}` }] }]
  }, { timeout: 60000 });
  return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || 'You are stronger than this moment.';
}

export async function runRelationshipCommand(cmd, ctx) {
  const { sock, message, from, sender, args } = ctx;
  const mentions = getMentions(message);

  if (cmd === 'ship') {
    if (mentions.length < 2) return sock.sendMessage(from, { text: 'Use: ship @user1 @user2' }, { quoted: message });
    const [a,b] = mentions; const score = Math.floor(Math.random()*101);
    return sock.sendMessage(from, { text: `💘 ${mention(a)} + ${mention(b)} = *${score}%*`, mentions:[a,b] }, { quoted: message });
  }
  if (cmd === 'therapist') {
    const reply = await therapistReply(args.join(' ') || 'I am overthinking.');
    return sock.sendMessage(from, { text: `🧠 Therapist Mode\n\n${reply}` }, { quoted: message });
  }
  if (['roast','loverate','drazzmab','simpcheck','drag','exposed','crushmeter'].includes(cmd)) {
    const u = mentions[0] || sender; const n = Math.floor(Math.random()*101);
    return sock.sendMessage(from, { text: `${cmd.toUpperCase()} ${mention(u)}: *${n}%*\n${pick(WORD_BANK[cmd])}`, mentions:[u] }, { quoted: message });
  }
  if (['toxic','delulu','broke','oppressor'].includes(cmd)) return sock.sendMessage(from, { text: `${cmd.toUpperCase()}: *${Math.floor(Math.random()*101)}%*\n${pick(WORD_BANK[cmd])}` }, { quoted: message });
  if (cmd === '8ball') return sock.sendMessage(from, { text: `🎱 ${pick(['Yes','No','Maybe'])}` }, { quoted: message });
  return sock.sendMessage(from, { text: pick(WORD_BANK[cmd] || WORD_BANK.heartbreak) }, { quoted: message });
}
