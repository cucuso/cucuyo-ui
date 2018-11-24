import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() searchQuery: string;

  constructor(private router: Router, private auth: AuthService) { }

  isUserLoggedIn;
  userEmail;

  ngOnInit() {
    console.log(this.auth.loggedIn());
    this.isUserLoggedIn = this.auth.loggedIn();
    this.userEmail = this.auth.getEmail();
  }

  onSubmit() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }

  refresh() {
    console.log('refreshing');
    this.isUserLoggedIn = this.auth.loggedIn();
    this.userEmail = this.auth.getEmail();
    console.log(this.auth.loggedIn(), this.auth.getEmail());

  }
}
