import { IGreetingService } from './IGreetingService';

export class GreetingService implements IGreetingService {
    public getGreeting(): string {
        return 'Hello, World!';
    }
}
