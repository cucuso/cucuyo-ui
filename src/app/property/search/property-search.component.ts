import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyHttpService } from '../../shared/services/properties.service';
import { SearchDto } from '../../shared/model/search-dto';
import { Property } from '../../shared/model/property';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

declare var mapboxgl;
declare var MapboxGeocoder;
declare var jQuery: any;

@Component({
  selector: 'property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {

  // TODO if area not found default to havana
  // DomSanitizer is used in template to show image
  constructor(private service: MyHttpService, private _DomSanitizationService: DomSanitizer, private route: ActivatedRoute) { }

  properties = [];
  propertiesDisplay = [];
  pageNext: string = '';
  prevPageNumber: number = 0;
  nextPageNumber: number = 10;
  searchDto: SearchDto = <SearchDto>{};
  selectedProperty = <Property>{};


  // Advanced search
  showAdvanced = false;
  fromPrice: number = 0;
  toPrice: number = 0;

  map: any;
  @ViewChild('exampleModal') modal: ElementRef;

  async ngOnInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZWRlbm4wMDEiLCJhIjoiY2pvM2pqaXR6MHh1NTN2bm56ZHk2ZjJpbiJ9.1mOe1OEN5vm1G9_U-P9LYA';

    this.map = new mapboxgl.Map({
      container: 'map',
      center: [-78.9812, 21.5218],
      zoom: 6,
      style: 'mapbox://styles/mapbox/streets-v10'
    });

    await this.route
      .queryParams
      .subscribe(params => {
        this.searchDto.search = params['q'] || null;
        this.properties = [];

        this.getProperties();
      });



  }

  addMarkers() {
    this.properties.forEach(property => {
      if (property.longitude != null && property.latitude != null) {

        var el = document.createElement('div');
        el.style.backgroundImage= 'url(assets/images/marker.svg)';
        el.style.width ='30px';
        el.style.height ='30px';

        new mapboxgl.Marker(el)
          .setLngLat({ lng: property.longitude, lat: property.latitude })
          .addTo(this.map);

        el.addEventListener('click', e => {
          this.selectedProperty = property;
          jQuery(this.modal.nativeElement).modal('show');
        });

      }
    });
  }

  getProperties() {
    this.fetchProperties(this.searchDto, null).subscribe(data => {
      this.properties = this.properties.concat(data.properties);

      this.propertiesDisplay = this.properties.slice(0, 10);
      this.pageNext = data.pagingObject;
      this.addMarkers();
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

  private fetchProperties(searchDto: SearchDto, pagingObject: string): any {
    return this.service.getProperties(searchDto, pagingObject);
  }
}
