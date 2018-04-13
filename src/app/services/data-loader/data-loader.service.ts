import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataLoaderService {
    httpOptions: { headers: HttpHeaders };

    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    get(apiURL: string): Promise<any> {
        return this.http.get(apiURL)
            .toPromise().then(res => res);
    }

    post(apiURL: string, value: Number): Promise<any> {
       if (!isDevMode) {
            const body = JSON.stringify({'value': value});
            return this.http.post(apiURL, body, this.httpOptions)
                .toPromise().then(res => res);
        } else {
            console.log('post method was replaced with get');
            return this.get(apiURL);
        }
    }

    delete(apiURL: string): Promise<any> {
        if (!isDevMode) {
        return this.http.delete(apiURL)
            .toPromise().then(res => res);
        } else {
            console.log('delete method was replaced with get');
            return this.get(apiURL);
        }
    }
}
