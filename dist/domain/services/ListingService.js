"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingService = void 0;
class ListingService {
    constructor() {
        this.list_of_items = [];
    }
    get_list() {
        return this.list_of_items;
    }
    set_list(item) {
        this.list_of_items.push(item);
    }
    remove_from_list(id) {
        this.list_of_items = this.list_of_items.filter((item) => item.id !== id);
    }
}
exports.ListingService = ListingService;
//# sourceMappingURL=ListingService.js.map