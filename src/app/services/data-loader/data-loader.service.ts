import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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

    makeUrl(path: string, replaces?: any): string {
        let apiURL = environment.urls.api + path;
        for (const key in replaces) {
            if (replaces.hasOwnProperty(key)) {
                apiURL = apiURL.replace(':' + key.toString(), replaces[key].toString());
            }
        }
        return apiURL;
    }

    get(path: string, replaces?: any): Promise<any> {
        return this.http.get(this.makeUrl(path, replaces))
            .toPromise().then(res => res);
    }

    post(apiURL: string, value: Number, replaces?: any): Promise<any> {
        if (!isDevMode) {
            const body = JSON.stringify({'value': value});
            return this.http.post(apiURL, body, this.httpOptions)
                .toPromise().then(res => res);
        } else {
            console.log('post method was replaced with get');
            return this.get(apiURL, replaces);
        }
    }

    delete(apiURL: string, replaces: any): Promise<any> {
        if (!isDevMode) {
            return this.http.delete(apiURL)
                .toPromise().then(res => res);
        } else {
            console.log('delete method was replaced with get');
            return this.get(apiURL, replaces);
        }
    }
}
