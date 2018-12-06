import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { User } from '../model/user';
import { environment } from '../../../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class UserService {
    constructor(private http: Http, public authHttp: AuthHttp) { }

    createUser(user: User) {
        user.password = this.md5(user.password);
        return this.http.post(environment.url + '/users', user)
            .map((response => response.json()));
    }

    login(user: User) {
        user.password = this.md5(user.password);
        return this.http.post(environment.url + '/login', user)
            .map((response => response.json()));
    }

    getUserInfo(email) {
        return this.http.get(environment.url + '/users/' + email)
            .map((response => response.json()));
    }

    warmUp() {
        return this.http.options(environment.url + '/users').map((response => response.json()));
    }

    private md5(input) {
        return Md5.hashStr(input).toString();
    }

}