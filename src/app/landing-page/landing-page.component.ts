import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'property-search',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private router: Router) {}

  searchInput: string;

  search() {
    console.log("navigating to search..");
    this.router.navigate(['/search'], { queryParams: { q: this.searchInput }});
  }

}
