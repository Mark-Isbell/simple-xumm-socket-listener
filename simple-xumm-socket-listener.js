// simple-xumm-socket-listener.js

const WebSocket = require('ws')

// replace the sample UUID below with the UUID sent by Xumm 
// in response to your own /payload endpoint call
// ref: https://xumm.readme.io/docs/doc-payload-life-cycle

const url = 'wss://xumm.app/sign/a55feea8-41c2-4974-ba9f-6772eb804025'
const connection = new WebSocket(url)
 
connection.onopen = () => {
  connection.send('Message From Client') 
}
 
connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}
 
connection.onmessage = (e) => {
  console.log(e.data)
}