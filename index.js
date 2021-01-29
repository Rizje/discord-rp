var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "sexy man",
state : "insta: @gnfq",
assets : {
large_image : "large",
large_text : "penis",
small_image : "small",
small_text : "@gnfq"
},
buttons : [{label : "tiktok" , url : "https://tiktok.com/@.gnfq"},{label : "jeti",url : "https://link.jeti.app/gvn"}]
}
})
})
client.login({ clientId : "783470018432204802" }).catch(console.error);