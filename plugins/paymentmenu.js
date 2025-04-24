const axios = require("axios");
const { cmd } = require("../command");

cmd({
    pattern: "paymentmenu",
    alias: ["naijapay", "supportnaija"],
    desc: "Nigerian payment details for bot support",
    category: "menu",
    react: "💰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `*💸 SUPPORT ISAAC ARINOLA TECH 🇳🇬*\n
*🏦 Bank Name:* Access Bank  
*👤 Account Name:* Arinola Isaac Oluwadarasimi  
*🔢 Account Number:* 1921712155

After payment, kindly send your screenshot to  
wa.me/2348135138141`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.imgur.com/kxX09yG.jpeg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363382023564830@newsletter',
                        newsletterName: "ISAAC ARINOLA TECH™ PAYMENTS",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});