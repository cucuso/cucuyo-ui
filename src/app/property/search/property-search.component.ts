import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../shared/services/properties.service';
import { SearchDto } from '../../shared/model/search-dto';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {

  // DomSanitizer is used in template to show image
  constructor(private service: MyHttpService, private _DomSanitizationService: DomSanitizer, private route: ActivatedRoute) { }
  title = 'app';

  searchString;
  properties = [];
  propertiesDisplay = [];
  pageNext: string = '';
  prevPageNumber: number = 0;
  nextPageNumber: number = 10;
  searchInput: string;
  searchDto: SearchDto = <SearchDto>{};



  // Advanced search
  showAdvanced = false;
  fromPrice: number = 0;
  toPrice: number = 0;

  public async ngOnInit() {

    await  this.route
    .queryParams
    .subscribe(params => {
      this.searchDto.search = params['q']||null;
    });

   this.getProperties();

  }


  //  async getQueryParams() {
  //   this.route
  //   .queryParams
  //   .subscribe(params => {
  //     this.searchDto.search = params['q']||null;
  //   });

  // }

   getProperties() {
     console.log(this.searchDto);
    this.fetchProperties(this.searchDto, null).subscribe(data => {
      this.properties = this.properties.concat(data.properties);
      this.propertiesDisplay = this.properties.slice(0, 10);
      this.pageNext = data.pagingObject;
    });
  }

  next() {
    if (this.nextPageNumber < this.properties.length) {
      this.prevPageNumber = this.nextPageNumber;
      this.nextPageNumber += 10;
      this.propertiesDisplay = (this.properties.slice(this.prevPageNumber, this.nextPageNumber));
    } else {
      this.fetchProperties(this.searchDto, this.pageNext).subscribe(data => {
        this.pageNext = data.pagingObject;
        this.properties = this.properties.concat(data.properties);
        this.prevPageNumber = this.nextPageNumber;
        this.nextPageNumber += 10;
        this.propertiesDisplay = (this.properties.slice(this.prevPageNumber, this.nextPageNumber));
      });
    }
  }

  prev() {
    if (this.prevPageNumber > 0) {
      this.prevPageNumber -= 10;
      this.nextPageNumber -= 10;
      this.propertiesDisplay = (this.properties.slice(this.prevPageNumber, this.nextPageNumber));
    }
  }

  search() {

    this.searchDto.search = this.searchInput;
    this.searchDto.from = this.fromPrice;
    this.searchDto.to = this.toPrice;


    this.fetchProperties(this.searchDto, '').subscribe(data => {
      this.pageNext = data.pagingObject;
      this.properties = data.properties;
      this.propertiesDisplay = this.properties.slice(0, 10);
    });
  }

  private fetchProperties(searchDto: SearchDto, pagingObject: string): any {
    return this.service.getProperties(searchDto, pagingObject);
  }
}
