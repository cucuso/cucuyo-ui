import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

import { Property } from '../model/property';
import { SearchDto } from '../model/search-dto';
import { User } from '../model/user';


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


        return this.http.get(environment.url + 'properties', { search: searchParams })
            .map((response => response.json()));

    }

        createUser(user:User) {



        return this.http.post(environment.url + 'users', user)
            .map((response => response.json()));

    }
}
