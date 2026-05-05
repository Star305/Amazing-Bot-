import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const DB = path.join(process.cwd(), 'data', 'registered_users.json');
function load(){ try{return JSON.parse(fs.readFileSync(DB,'utf8'));}catch{return [];} }
function save(data){ fs.mkdirSync(path.dirname(DB),{recursive:true}); fs.writeFileSync(DB, JSON.stringify(data,null,2)); }

export default {
  name:'reg', aliases:['register'], category:'games', description:'Register for games db', usage:'reg Name.Age', cooldown:3,
  async execute({sock,message,from,args,sender}){
    const input=args.join(' ').trim();
    const m=input.match(/^([^\.]+)\.(\d{1,2})$/);
    if(!m) return sock.sendMessage(from,{text:'Usage: .reg Name.Age\nExample: .reg Omegatech.50'},{quoted:message});
    const name=m[1].trim(); const age=Number(m[2]);
    if (!name) return sock.sendMessage(from,{text:'❌ Name cannot be empty.'},{quoted:message});
    if (age < 1 || age > 50) return sock.sendMessage(from,{text:'❌ Age must be between 1 and 50.'},{quoted:message});
    const users=load();
    if(users.some(u=>u.jid===sender)) return sock.sendMessage(from,{text:'✅ You are already registered.'},{quoted:message});
    const sn=crypto.randomBytes(8).toString('hex');
    users.push({jid:sender,name,age,sn,createdAt:Date.now()}); save(users);
    const text=`*✅ REGISTRATION SUCCESSFUL*\n\n👤 *Name:* ${name}\n🎂 *Age:* ${age} Years\n🔑 *SN:* ${sn}\n\n🎁 *Starter Pack:*\n• 1x Axe (30 Durability)\n• 1x Pickaxe (40 Durability)\n\n_You are now registered as user #${users.length} in our database._`;
    return sock.sendMessage(from,{text},{quoted:message});
  }
};
