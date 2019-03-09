import { Injectable } from '@angular/core';
import { USERS } from '../mock-data/users';
import { User } from '../models/user';
import { userInfo } from 'os';
@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private users: User[] = USERS;
    constructor() { }
    getUsers() {
        return this.users;
    }

    getUserById(id) {
        return this.users.filter(user => user.id == id);
    }

}