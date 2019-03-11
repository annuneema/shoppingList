import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGard implements CanActivate {
    constructor(private auth: AuthService, private route: Router) { }

    canActivate(): boolean {
        if (this.auth.isUserLoogedIn()) {
            return true;
        } else {
            this.route.navigate(['/home']);
            return false;
        }
    }


}