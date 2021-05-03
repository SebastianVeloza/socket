
const { Server } = require('net');
const server = new Server();

server.on("connection", (Socket) =>{
    console.log(`Nueva conexion de: ${Socket.remoteAddress}:${Socket.remotePort}`);

    Socket.setEncoding('utf-8');
    Socket.on("data",(data) => {
        console.log(data);
        Socket.write(data);
    });
} );

server.listen({
    port: 8000, host: '0.0.0.0'
},() => {
    console.log("escuchando por el puerto 8000");
});