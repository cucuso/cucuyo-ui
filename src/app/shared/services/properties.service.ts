import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

import { Property } from '../model/property';
import { SearchDto } from '../model/search-dto';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class MyHttpService {
    constructor(private http: Http) { }

    getProperties(searchDto: SearchDto, page: string) {
        const searchParams = new URLSearchParams();
        if (searchDto.search) {
            searchParams.set('search', searchDto.search);
        }
        if (searchDto.from) {
            searchParams.set('from', searchDto.from.toString());
        }
        if (searchDto.to) {
            searchParams.set('to', searchDto.to.toString());
        }


        if (page) {
            searchParams.set('page', page);
        }


        return this.http.get(environment.url + '/properties', { search: searchParams })
            .map((response => response.json()));

    }

    createUser(user: User) {
        return Observable.of("success");

        // return this.http.post(environment.url + '/users', user)
        //     .map((response => response.json()));
    }

    addProperty(property: Property) {
        return this.http.post(environment.url + '/properties', property)
            .map((response => response.json()));
    }

}
