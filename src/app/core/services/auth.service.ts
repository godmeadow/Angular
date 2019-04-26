import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private httpClient: HttpClient) { }
    login(email: string, password: string) {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Basic ' + btoa(`${email}:${password}`));
        headers = headers.set('Content-Type', 'application/json');

        return this.httpClient.post(`/auth`, {}, { headers: headers })
        .pipe(tap((res: any) => {
            sessionStorage.setItem('token', res.token);
        }));
    }
}
