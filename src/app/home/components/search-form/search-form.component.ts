import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdPropertiesSearch} from '../../../commons/model/ad-properties-search.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchFormComponent {

  @Input('loading') loading = false;
  isAdvancedSearchEnabled = false;
  @Output() onSubmit: EventEmitter<AdPropertiesSearch> = new EventEmitter<AdPropertiesSearch>();
  searchForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      'criteria': '',
      'from': '',
      'to': ''
    });
  }

  submit() {
    const searchParams = new AdPropertiesSearch();
    searchParams.text = this.searchForm.get('criteria').value;

    if (this.isAdvancedSearchEnabled) {
      searchParams.from = this.searchForm.get('from').value;
      searchParams.to = this.searchForm.get('to').value;
    }

    this.onSubmit.emit(searchParams);
  }
}
