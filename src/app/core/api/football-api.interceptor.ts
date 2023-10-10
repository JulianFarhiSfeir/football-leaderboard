import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class FootballApiInterceptor implements HttpInterceptor {
    private CUSTOM_HEADER_API_HOST = 'x-rapidapi-host';
    private CUSTOM_HEADER_API_KEY = 'x-rapidapi-key'
    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!request.url.includes(environment.footballApiBaseUrl)) {
            return next.handle(request);
        }
        const headers = new HttpHeaders({
            [this.CUSTOM_HEADER_API_HOST]: environment.footballApiHost,
            [this.CUSTOM_HEADER_API_KEY]: environment.footballApiKey
        })
        const clonedRequest = request.clone({
            headers
        })
        return next.handle(clonedRequest);
    }
}
