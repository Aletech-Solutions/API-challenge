import { IListItem } from "../../domain/services/IListingService";
import { ListingService } from "../../domain/services/ListingService";
import { IListingController } from "./IListingController";
import { Request, Response } from 'express';

export class ListingController implements IListingController{
    private listingService: ListingService
    constructor (listingService: ListingService){
        this.listingService = listingService;
    }
    public get(req:Request, res: Response): void{
        res.send(this.listingService.get_list())
    }
    public post(req: Request, res: Response): void {
        if(req.body.id && req.body.price && req.body.title){
            const information:IListItem = {
                id: req.body.id.toString(),
                price: parseFloat(req.body.price.toString()),
                title: req.body.title.toString()
            }
            this.listingService.set_list(information)
            res.send({"success":"Item added"}).status(200)
        } else {
            res.send({'error':'missing body parameters'}).status(400);
        }
    }
    public delete(req: Request, res:Response): void {
        if(req.query.id){
            this.listingService.remove_from_list(req.query.id.toString())
            res.send({"success":"item deleted"}).status(200)

        }else{
            res.send({"error":"missing querystring"}).status(401)
        }
    }
}