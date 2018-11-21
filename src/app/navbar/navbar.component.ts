import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() searchQuery: string;

  constructor(private router: Router) { }



  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchQuery }});
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }
}
