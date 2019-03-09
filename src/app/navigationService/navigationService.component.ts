import { Injectable } from '@angular/core';
import { NavList } from './navList';
import { navList } from './mock-navList';
@Injectable({
    providedIn: 'root'
})

export class NavigationService {
        navlist: NavList[] = navList;
        constructor() {}
        getNavList() {
            
            return navList;
        }

}