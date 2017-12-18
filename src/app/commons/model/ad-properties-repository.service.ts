import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AdPropertiesSearch} from './ad-properties-search.model';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {DataPage} from './data-page.model';
import {AdProperties} from './ad-properties.model';

const BASE = '/properties';

@Injectable()
export class AdPropertiesRepository {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  search(searchParams: AdPropertiesSearch): Observable<any> {
    let params = new HttpParams()
      .set('text', searchParams.text)
      .set('from', searchParams.from.toString())
      .set('to', searchParams.to.toString())
      .set('limit', searchParams.limit.toString());

    if (searchParams.offset !== undefined) {
      params = params.set('offset', searchParams.offset);
    }

    return this.http.get<DataPage<AdProperties>>(environment.gateway + BASE, {params: params});
  }
}
