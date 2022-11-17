import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {}

    getAboutData() {
        return this.http.get<any>('assets/about/utils/about.json');
    }
}
