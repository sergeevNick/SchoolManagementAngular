import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isDevMode } from '@angular/core';

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
            .toPromise();
    }

    post(apiURL: string, body: any): Promise<any> {
        if (!isDevMode) {
            return this.http.post(apiURL, body, this.httpOptions)
                .toPromise();
        } else {
            return this.http.get(apiURL)
                .toPromise();
        }
    }
    delete(apiURL: string): Promise<any> {
        if (!isDevMode) {
            return this.http.delete(apiURL)
                .toPromise();
        } else {
            return this.http.get(apiURL)
                .toPromise();
        }
    }
}
