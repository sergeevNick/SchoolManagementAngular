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

    makeBody(object: any): string {
        if (object !== null) return JSON.stringify(object);
    }

    get(path: string, replaces?: any): Promise<any> {
        return this.http.get(this.makeUrl(path, replaces))
            .toPromise().then(res => res);
    }

    post(path: string, object: any, replaces?: any): Promise<any> {
        if (!isDevMode) {
            return this.http.post(this.makeUrl(path, replaces), this.makeBody(object), this.httpOptions)
                .toPromise().then(res => res);
        } else {
            console.log('post method was replaced with get');
            return this.get(path, replaces);
        }
    }

    delete(path: string, replaces?: any): Promise<any> {
        if (!isDevMode) {
            return this.http.delete(this.makeUrl(path, replaces))
                .toPromise().then(res => res);
        } else {
            console.log('delete method was replaced with get');
            return this.get(path, replaces);
        }
    }
}
