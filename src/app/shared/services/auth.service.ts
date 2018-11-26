import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();


    loggedIn() {
        return tokenNotExpired();
    }

    getEmail() {

        const token = localStorage.getItem('token');
        
        if (token == null)
            return null;

        const authObj = this.jwtHelper.decodeToken(token);
        return authObj.email;
    }
}