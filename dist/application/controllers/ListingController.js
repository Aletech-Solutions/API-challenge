"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingController = void 0;
class ListingController {
    constructor(listingService) {
        this.listingService = listingService;
    }
    get(req, res) {
        res.send(this.listingService.get_list());
    }
    post(req, res) {
        if (req.body.id && req.body.price && req.body.title) {
            const information = {
                id: req.body.id.toString(),
                price: parseFloat(req.body.price.toString()),
                title: req.body.title.toString()
            };
            this.listingService.set_list(information);
            res.send({ "success": "Item added" }).status(200);
        }
        else {
            res.send({ 'error': 'missing body parameters' }).status(400);
        }
    }
    delete(req, res) {
        if (req.query.id) {
            this.listingService.remove_from_list(req.query.id.toString());
            res.send({ "success": "item deleted" }).status(200);
        }
        res.send({ "error": "missing querystring" }).status(401);
    }
}
exports.ListingController = ListingController;
//# sourceMappingURL=ListingController.js.map