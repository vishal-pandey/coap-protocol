const coap = require('coap')
const server = coap.createServer()

server.on('request', (req, res)=>{
	res.end("Hello" + req.url + "\n")
})

server.listen(()=>{
	consloe.log("Server has started")
})