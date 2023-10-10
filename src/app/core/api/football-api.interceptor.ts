import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class FootballApiInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!request.url.includes(environment.footballApiBaseUrl)) {
            return next.handle(request);
        }
        const headers = new HttpHeaders({
            'x-rapidapi-host': environment.footballApiHost,
            'x-rapidapi-key': environment.footballApiKey
        })
        const clonedRequest = request.clone({
            headers
        })
        return next.handle(clonedRequest);
    }
}
