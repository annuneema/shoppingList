import { Component,Input,ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavigationService } from '../../navigationService/navigationService.component';
import { NavList } from 'src/app/navigationService/navList';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnDestroy,OnInit {
    @Input() headerTitle:string;
    mobileQuery: MediaQueryList;
    navmenus: NavList[];

    fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  
    fillerContent = Array.from({length: 50}, () =>
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
  
    private _mobileQueryListener: () => void;
  
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private navlist: NavigationService ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }
  
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngOnInit():void {
        this.navmenus = this.navlist.getNavList();
    }
}
  




