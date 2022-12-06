import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../core/services/auth.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders().append('Authorization', 'Bearer ${this.auth.getToken()}');
        const modifieReq = req.clone({ headers });
        return next.handle(modifieReq);
    }
}