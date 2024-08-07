const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254769323504";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_37_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgODUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgODksXG4gICAgICAgIDExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEwLFxuICAgICAgICA3NixcbiAgICAgICAgODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODksXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgOTksXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxODksXG4gICAgICAgIDczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDk2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDUyLFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkp4K3dSQ3dkaE80UXYxK2RxQmpERlJXSHdDT0UzV2pnbjltcnkyRnNheW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJtQW9SdzBlU3NPOHVZTTFJZ3RGQ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTM4ZWI1NWMtNDk2Ni00MDQ3LTk4NDgtYTVkOTBmY2Y4YzFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMjgsXG4gICAgICAyMjEsXG4gICAgICAyNDEsXG4gICAgICAzMyxcbiAgICAgIDIwLFxuICAgICAgNzUsXG4gICAgICAwLFxuICAgICAgMTU5LFxuICAgICAgMTYyLFxuICAgICAgMTc2LFxuICAgICAgMjM1LFxuICAgICAgMzUsXG4gICAgICAxNTAsXG4gICAgICA2LFxuICAgICAgMzUsXG4gICAgICAyNixcbiAgICAgIDgwLFxuICAgICAgNzIsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAxODIsXG4gICAgICAxMzcsXG4gICAgICAxODEsXG4gICAgICA2NCxcbiAgICAgIDIzNixcbiAgICAgIDk0LFxuICAgICAgMTM5LFxuICAgICAgMjQ3LFxuICAgICAgMjA3LFxuICAgICAgNjksXG4gICAgICAxMzcsXG4gICAgICA3MCxcbiAgICAgIDExLFxuICAgICAgMTEsXG4gICAgICAyMzEsXG4gICAgICAxMjEsXG4gICAgICAyNTIsXG4gICAgICAyNDEsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4MUtXU1RGNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzY5MzIzNTA0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjczNDAyODM2Nzg5NTY6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQM29odWNERU5yRnpyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldYczUrc2NpTURxRWt0bGRSd0FXMnE1R21kaGpVOCtVU3pOdzd0WjRRVkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWkI4dG9FcUZGTllBbHdIaGd5dGpLYmlhQURzOGFhNVg3NjdJdzhNdkRoUzluM1loUWZ4VGRWYkt4eG8rNjZqSlpzZDRuU2FVTGF6aTJGYkY1M2tSRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwickRsL3hyMFlPMVVBbEhvYXJ6YW90eUVNVGd4WWlKK2pFVWRqQU1hcWxTclNNS3BvWmQxd2svLzZSM3hmcjEzQXdHeVEzYlVwcVBHdWNkbDdDRDRBQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzY5MzIzNTA0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDQ4NjcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0RRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRFEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsS3ZOdEFJRmYvYU4veVA0VWhwSUI2Q29JbDVoREh4c1JnWUFadEF4MThJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjE0MjQ3NjQsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNl19LFwidGltZXN0YW1wXCI6XCIxNzIzMDQ4NjE0NjY3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MURANG'A FINEST ⁰²¹❤️』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "G-UNIT ❤️",
  ownername:process.env.OWNER_NAME|| "MURANG'A SEAL 💛🖤",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
