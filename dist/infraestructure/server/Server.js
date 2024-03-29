"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const HelloWorldController_1 = require("../../application/controllers/HelloWorldController");
const GreetingService_1 = require("../../domain/services/GreetingService");
const ListingService_1 = require("../../domain/services/ListingService");
const ListingController_1 = require("../../application/controllers/ListingController");
const body_parser_1 = __importDefault(require("body-parser"));
class Server {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.app.use(body_parser_1.default.json());
        this.port = port;
        this.setupControllers();
    }
    setupControllers() {
        const greetingService = new GreetingService_1.GreetingService();
        const helloWorldController = new HelloWorldController_1.HelloWorldController(greetingService);
        const listingService = new ListingService_1.ListingService();
        const listingController = new ListingController_1.ListingController(listingService);
        this.app.get('/listing', listingController.get.bind(listingController));
        this.app.post('/listing', listingController.post.bind(listingController));
        this.app.delete('/listing', listingController.delete.bind(listingController));
        this.app.get('/', helloWorldController.handleRequest.bind(helloWorldController));
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
    getApp() {
        return this.app;
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map