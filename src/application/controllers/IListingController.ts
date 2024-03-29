import { Request, Response } from 'express';
import { IListItem } from '../../domain/services/IListingService';

export interface IListingController {
    get(req: Request, res: Response): void;
    post(req: Request, res: Response): void;
    delete(req: Request, res: Response): void;
}

