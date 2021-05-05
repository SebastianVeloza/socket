const { Socket } = require("net");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chao = "chao";

const error = (message) => {
  console.error(message);
  process.exit(1);
};

const conexion = (host, port) => {
  console.log(`Connecting to ${host}:${port}`);

  const socket = new Socket();
  socket.conexion({ host, port });
  socket.setEncoding("utf-8");

  socket.on("conexion", () => {
    console.log("Connected");

    readline.question("Choose your username: ", (username) => {
      socket.write(username);
      console.log(`Type any message to send it, type ${chao} to finish`);
    });

    readline.on("line", (message) => {
      socket.write(message);
      if (message === chao) {
        socket.end();
      }
    });

    socket.on("data", (data) => {
      console.log(data);
    });
  });

  socket.on("error", (err) => error(err.message));

  socket.on("close", () => {
    console.log("Disconnected");
    process.exit(0);
  });
};


const main = () => {
  if (process.argv.length !== 4) {
    error(`Error: node ${__filename} host port`);
  }

  let [, , host, port] = process.argv;
  if (isNaN(port)) {
    error(`Invalid port ${port}`);
  }
  port = Number(port);

  conexion(host, port);
};

if (module === require.main) {
  main();
}