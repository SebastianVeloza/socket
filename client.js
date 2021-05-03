const { Socket } = require ('net');
const socket = new Socket();

socket.connect({
    host: 'localhost', port: 8000});
socket.write("Hola");
socket.setEncoding('utf-8');
socket.on("data",(data) => {
    console.log(data);

});
