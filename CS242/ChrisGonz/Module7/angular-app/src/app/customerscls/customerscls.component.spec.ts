import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersclsComponent } from './customerscls.component';

describe('CustomersclsComponent', () => {
  let component: CustomersclsComponent;
  let fixture: ComponentFixture<CustomersclsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersclsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
