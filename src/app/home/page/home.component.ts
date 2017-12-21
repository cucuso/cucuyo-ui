import {Component, ViewEncapsulation} from '@angular/core';
import {AdProperties} from '../../commons/model/ad-properties.model';
import {DataPage} from '../../commons/model/data-page.model';
import {AdPropertiesSearch} from '../../commons/model/ad-properties-search.model';
import {AdPropertiesRepository} from '../../commons/model/ad-properties-repository.service';

const FIRST_PAGE_STATE = undefined;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  pageSize = 1;
  isSearchFormLoading = false;
  isSearchFormSubmitted = false;
  currentPage = new DataPage<AdProperties>();
  searchParams: AdPropertiesSearch;
  pageSates = [];

  constructor(private propsRepository: AdPropertiesRepository) {
  }

  search(searchParams: AdPropertiesSearch) {
    searchParams.limit = this.pageSize;
    this.isSearchFormLoading = true;
    this.propsRepository.search(searchParams).subscribe((data: DataPage<AdProperties>) => {
      this.searchParams = searchParams;
      this.currentPage = data;
      this.isSearchFormLoading = false;
      this.isSearchFormSubmitted = this.currentPage.content.length > 0;
      this.pageSates.push(FIRST_PAGE_STATE);
      this.pageSates.push(data.nextPage);
    });
  }

  nextPage(pageIndex: number) {
    this.renderPage(pageIndex - 1);
  }

  private renderPage(pageIndex: number) {
    this.searchParams.offset = this.pageSates[pageIndex];
    this.propsRepository.search(this.searchParams).subscribe((data: DataPage<AdProperties>) => {
      this.pageSates.push(data.nextPage);
      this.currentPage = data;
    });
  }

  previousPage(pageIndex: number) {
    this.renderPage(pageIndex);
  }
}
