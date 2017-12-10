import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchFormComponent {

  isLoading = false;
  isAdvancedSearchEnabled = false;
  @Output() whenSearchEnds: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  searchForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      'criteria': '',
      'from': '',
      'to': ''
    });
  }

  submit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.whenSearchEnds.emit([]);
    }, 1000);
  }
}
