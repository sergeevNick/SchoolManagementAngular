import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

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

    static makeUrl(path: string, replaces?: any): string {
        let apiURL = environment.urls.api + path;
        for (const key in replaces) {
            if (replaces.hasOwnProperty(key)) {
                apiURL = apiURL.replace(':' + key.toString(), replaces[key].toString());
            }
        }
        return apiURL;
    }

    static makeBody(object: any): string {
        return JSON.stringify(object);
    }

    get(path: string, replaces?: any): Promise<any> {
        return this.http.get(DataLoaderService.makeUrl(path, replaces))
            .toPromise().then(res => res);
    }

    post(path: string, object: any, replaces?: any): Promise<any> {
        if (!environment.production) {
            console.log('post method was replaced with get');
            return this.get(path, replaces);
        }

        return this.http.post(DataLoaderService.makeUrl(path, replaces), DataLoaderService.makeBody(object), this.httpOptions)
            .toPromise().then(res => res);
    }

    delete(path: string, replaces?: any): Promise<any> {
        if (!environment.production) {
            console.log('delete method was replaced with get');
            return this.get(path, replaces);
        }

        return this.http.delete(DataLoaderService.makeUrl(path, replaces))
            .toPromise().then(res => res);
    }
}
