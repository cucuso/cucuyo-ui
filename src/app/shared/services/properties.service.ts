import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

import { Property } from '../model/property';
import { SearchDto } from '../model/search-dto';


@Injectable()
export class PropertyService {
    constructor(private http: Http, public authHttp: AuthHttp) { }

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

    addProperty(property: Property) {
        return this.authHttp.post(environment.url + '/properties', property)
            .map((response => response.json()));
    }

    warmUp() {
        return this.http.options(environment.url + '/properties').map((response => response.json()));
    }

}
