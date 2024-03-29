import { IListItem } from "./IListingService";

export class ListingService{
    list_of_items:IListItem[] = []
    
    get_list():IListItem[]{
        return this.list_of_items 
    }
    set_list(item:IListItem):void{
        this.list_of_items.push(item)
    }
    remove_from_list(id:string):void{
        this.list_of_items = this.list_of_items.filter((item)=> item.id !== id)
    }
}