import { Injectable } from '@angular/core';
import {PRODUCTS} from '../mock-data/products';
import { Item } from '../models/item';
@Injectable()
export class ItemsService {
    constructor() { }
    public ItemArray: Item[] = PRODUCTS;
    getItems() {
        return this.ItemArray;
    } 

    SetProduct(productdata) {
        this.ItemArray.push(productdata);
    }

    GetProductList() {
        if(this.ItemArray.length) {
            return this.ItemArray;
        } else {
            return this.ItemArray;
        }

       

    }

}

