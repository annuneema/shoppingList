import { Injectable } from '@angular/core';
import { MENUITEMS } from '../mock-data/nav-items';
import { Menu } from '../models/menu';

@Injectable({
    providedIn: 'root'
})

export class NavItemsService {
    private navitems: Menu[] = MENUITEMS;
    constructor() { }

    getNavItems() {
        return this.navitems;
    }
}