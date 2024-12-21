/*
SCRIPT INI DIBUAT OLEH ® RISSXD
JANGAN DIPERJUAL BELIKAN
FREE UPDATE DI YOUTUBE @rissmdbotz
JOIN JUGA CHANNEL WA DIBAWAH INI 
https://whatsapp.com/channel/0029VavKx02F1YlaeIiICq1m
#HAPUS WM = DOSA
*/

const fs = require('fs')

global.owner = "6283825773422"
global.ownername = "kevinn"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
