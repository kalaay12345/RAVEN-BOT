/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUFub096V3VsRGl4ckU4MVJkbUxYb1A3SnRxVmxTbkErTkM3MGFpZTRYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGxlMFFNcWpnZEplQkhSSmQ0Ri9XOTJ1bHN0M1UyQ3d5WEFtTG91Vi9Xcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T0N5Uy8vRmtGMUlzb2FjaFJCdWdWdk1qUW4zVTZvQmNETFo5cmZSREhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRMktHUnVheDlYZmdkRk5UR2d5Y3pDY1JPVmE3TmVGdlhLV2xlSmswSkMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNGdnNYQUNmRlpZRjZYVTBOUktjTGpxclBBa0UxdkM4aFhya2dndU1zbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijk5bjlXMHM0NStQZ3JTb0wyN3Q2TEo5ZUxVQUpGRElia3Z1L0ZsRDZBMTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxBeHI2N1BQZStxa2czZEJGUU5IQWZZKzg4MHU4ekczUW9JWVFnbnhGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnQ3ZzF0VDIzcExqMEtiSXY3aCtnK1RZVGdYMlhNeGs4akhadVdLNnJGVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhoaUgvcEt6WXRMbVNNOGhLNnZWSFJEa0dTbm9LY2d1SjArMTl3K3dBRXpQRUJjV3Z1dTNoWmVDeU9nVWdwRkV2UUhyVXo0UXp6MnpYek9ZYjNOWmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6Img4Mm5WY1liVE9JeXlTSkhSRFZ2VTNVVFZiU2Vnb2Ivd0ZnUFNwcGJXTmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjUyNjE5NTk5NzkyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZDRjk3QTA2MjcxQTIzRkMxNDg3QUE2NTRBMzMwN0E1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDYyNTM5MzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1MjYxOTU5OTc5MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRTk3QUZFMkExNUZBNkM1REFDMzRENzY4MEEwRkY2QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2MjUzOTM0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLejZtbTcyelNuS0JERjJ3aDZKRkFnIiwicGhvbmVJZCI6IjYxMWE1NDI1LTQxZGMtNGE4OC1iNWU1LTZjODkyMWNhNDg3YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2ek10SnJ5MnB4VzRaOTRYWERObi9EY1gxR1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibk5nTUlaWnNBeU5ybnUxckRSU2VoYzJSM1JrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk5RVFSWTVKIiwibWUiOnsiaWQiOiIyNTI2MTk1OTk3OTI6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiWmFha2lyKDrwn4e48J+HpvCfpKQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BIWDBuY1ExZkRXd0FZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1rOXFob2tYbnBBblhMMXFGR1dEZXNuVDhhZDRXNUpLRVdpbGw5aERHbmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVVT1IrdiswdUROQWpIeklCMUJLMzI0U0N1QjYybTB4MjBsSmpDMzNqY09SR3JxRlFORVZQVTZ4em5aT2ZybzI5eVpGSEI3enNtZ0dDdDhuWjVuT0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaaXh5Um9RdEhEZXJwSjdHWEZnRUhRZlBKS3dSY2JSeXY1NHRmUSs1cUZhUE5TK2YxalUxVkcrZjkzeW1KMjJCY0w2c2tRVlFJU1JoRmY4VGNxS2JoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1MjYxOTU5OTc5MjoxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUSlBhb2FKRjU2UUoxeTlhaFJsZzNySjAvR25lRnVTU2hGb3BaZllReHAzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2MjUzOTIzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhPciJ9
const session = process.env.SESSION || '';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254114660061';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
