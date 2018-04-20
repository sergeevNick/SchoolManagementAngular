import { environment } from '../../environments/environment';

export class HttpUtilities {
    public static makeUrl(path: string, replaces?: any): string {
        let apiURL = environment.urls.api + path;
        for (const key in replaces) {
            if (replaces.hasOwnProperty(key)) {
                apiURL = apiURL.replace(':' + key.toString(), replaces[key].toString());
            }
        }
        return apiURL;
    }

    public static makeBody(object: any): string {
        if (object !== null) return JSON.stringify(object);
    }
}
