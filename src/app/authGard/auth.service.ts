import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
    constructor() { }
    isUserLoogedIn(): boolean {
        const token: string = localStorage.getItem('authGuard');
        return Boolean(token);
    }

    loggedInUser(value: boolean) {
        console.log('value', value);
        localStorage.setItem('authGuard', value.toString());
    }

}