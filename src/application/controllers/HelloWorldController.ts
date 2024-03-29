import { Request, Response } from 'express';
import { GreetingService } from '../../domain/services/GreetingService';
import { Controller } from './Controller';

export class HelloWorldController implements Controller {
    private greetingService: GreetingService;

    constructor(greetingService: GreetingService) {
        this.greetingService = greetingService;
    }

    public handleRequest(req: Request, res: Response): void {
        const message = this.greetingService.getGreeting();
        res.send(message);
    }
}
