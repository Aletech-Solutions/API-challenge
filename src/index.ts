import { Server } from "./infraestructure/server/Server";

const port = 8002;
const server = new Server(port);
server.start();
