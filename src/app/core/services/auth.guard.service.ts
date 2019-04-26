import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Route, Router } from '@angular/router';
import { TouchSequence } from '../../../../node_modules/@types/selenium-webdriver';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = sessionStorage.getItem('token');
        if (token) {
            return true;
        } else {
            this.router.navigate(['auth', 'login']);
            return false;
        }
    }
}
