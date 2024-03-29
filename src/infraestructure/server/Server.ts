import express, { Application } from 'express';
import { HelloWorldController } from '../../application/controllers/HelloWorldController';
import { GreetingService } from '../../domain/services/GreetingService';
import { IServer } from './IServer';
import { ListingService } from '../../domain/services/ListingService';
import { ListingController } from '../../application/controllers/ListingController';
import bodyParser from 'body-parser';

export class Server implements IServer {
    private app: Application;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.app.use(bodyParser.json());

        this.port = port;

        this.setupControllers();
    }

    private setupControllers(): void {
        const greetingService = new GreetingService();
        const helloWorldController = new HelloWorldController(greetingService);

        const listingService = new ListingService()
        const listingController = new ListingController(listingService)
        
        this.app.get('/listing', listingController.get.bind(listingController))
        this.app.post('/listing', listingController.post.bind(listingController))
        this.app.delete('/listing', listingController.delete.bind(listingController))

        this.app.get('/', helloWorldController.handleRequest.bind(helloWorldController));
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

    public getApp(): Application {
        return this.app;
    }
}
