"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldController = void 0;
class HelloWorldController {
    constructor(greetingService) {
        this.greetingService = greetingService;
    }
    handleRequest(req, res) {
        const message = this.greetingService.getGreeting();
        res.send(message);
    }
}
exports.HelloWorldController = HelloWorldController;
//# sourceMappingURL=HelloWorldController.js.map