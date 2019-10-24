import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsCustomerComponent } from './search-results-customer.component';

describe('SearchResultsCustomerComponent', () => {
  let component: SearchResultsCustomerComponent;
  let fixture: ComponentFixture<SearchResultsCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
