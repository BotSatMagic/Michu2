import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { contextInfo: { externalAdReply: { title: 'βMichuBotβ', body: 'βMichuBotβ', sourceUrl: `Hola`, thumbnail: imagen2}}})}
    
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup) {
let join = `*< ππ½π΄ ππ½ π±πΎπ π° ππ πΆπππΏπΎ />*\n\n*π·πΎπ»π° ππππ°ππΈπΎ/π°*\n*πΏπ°ππ° ππΎπ»πΈπ²πΈππ°π ππ½ π±πΎπ π° ππ πΆπππΏπΎ πππ° π΄π» π²πΎπΌπ°π½π³πΎ #join πΌπ°π π΄π» π΄π½π»π°π²π΄ π³π΄ ππ πΆπππΏπΎ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*β #join* https://chat.whatsapp.com/FWmPWQ4XNpLN98g3G`.trim() 
this.sendHydrated(m.chat, join, wm, imagen4, 'Hola', 'πΏπ°ππΏπ°π»', null, null, [[null, null]], m)}
    
    
return !0 }
export default handler
