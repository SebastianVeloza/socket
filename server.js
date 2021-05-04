
const { Server } = require('net');
const server = new Server();
const chao = 'chao';
server.on("connection", (Socket) =>{
    console.log(`Nueva conexion de: ${Socket.remoteAddress}:${Socket.remotePort}`);

    Socket.setEncoding('utf-8');
    Socket.on("data",(data) => {
        if(data===chao){
            Socket.end();
        }else{ 
            console.log( `${remoteSocket}-> ${data}`);
        }
    });
    Socket.on("close",()=> {
        console.log(`conexion ${remoteSocket} cerrada`);
    })
} );

server.listen({
    port: 8000, host: '0.0.0.0'
},() => {
    console.log("escuchando por el puerto 8000");
});