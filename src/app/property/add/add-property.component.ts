import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../shared/services/properties.service';

declare var mapboxgl;
declare var MapboxGeocoder;


@Component({
  selector: 'add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  property: any = {};

  constructor(private service: MyHttpService) { }



  public ngOnInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZWRlbm4wMDEiLCJhIjoiY2pvM2pqaXR6MHh1NTN2bm56ZHk2ZjJpbiJ9.1mOe1OEN5vm1G9_U-P9LYA';
    var map = new mapboxgl.Map({
      container: 'map',
      center: [-78.9812, 21.5218],
      zoom: 5,
      style: 'mapbox://styles/mapbox/streets-v10'
    });

    map.addControl(new MapboxGeocoder({
      // limit results to Australia
      accessToken: mapboxgl.accessToken,
      country: 'cu',
    }));
  }

  onSubmit() {
    console.log(this.property);
    this.service.addProperty(this.property).subscribe();
  }

}
