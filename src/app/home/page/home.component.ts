import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  isLoading = false;
  isAdvancedSearchEnabled = false;
  isSearchFormSubmitted = false;
  searchForm: FormGroup;
  items = [];

  constructor(formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      'criteria': '',
      'from': '',
      'to': ''
    });
  }

  ngOnInit() {
  }

  submit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isSearchFormSubmitted = true;
    }, 1000);
  }

}
