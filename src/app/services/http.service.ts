import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    private url = '../../assets/data/test.json';

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get(this.url);
    }
}