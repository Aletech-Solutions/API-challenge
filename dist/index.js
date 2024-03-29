"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./infraestructure/server/Server");
const port = 8002;
const server = new Server_1.Server(port);
server.start();
//# sourceMappingURL=index.js.map