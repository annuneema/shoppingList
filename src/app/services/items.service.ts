import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ItemsService {
    constructor(private http: HttpClient) { }

    getItems(): Observable<any> {
        return this.http.get('assets/items.json');
    }

}

