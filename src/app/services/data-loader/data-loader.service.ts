import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpUtilities } from '../../utilities/HttpUtilities';

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

    get(path: string, replaces?: any): Promise<any> {
        return this.http.get(HttpUtilities.makeUrl(path, replaces))
            .toPromise().then(res => res);
    }

    post(path: string, object: any, replaces?: any): Promise<any> {
        if (!isDevMode) {
            return this.http.post(HttpUtilities.makeUrl(path, replaces), HttpUtilities.makeBody(object), this.httpOptions)
                .toPromise().then(res => res);
        } else {
            console.log('post method was replaced with get');
            return this.get(path, replaces);
        }
    }

    delete(path: string, replaces?: any): Promise<any> {
        if (!isDevMode) {
            return this.http.delete(HttpUtilities.makeUrl(path, replaces))
                .toPromise().then(res => res);
        } else {
            console.log('delete method was replaced with get');
            return this.get(path, replaces);
        }
    }
}
