const { Socket } = require('dgram')

const server = require('net').createServer()

server.on('connection', (Socket) =>{
    Socket.write('welcme new client')
    console.log('new client connected')

    Socket.on('data', (data)=>{
        Socket.write('write your message:/n')
    })
    Socket.setEncoding('utf8')
})

server.listen(5000,()=>{
    console.log('server is running')
})
