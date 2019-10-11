import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaycardsComponent } from './birthdaycards.component';

describe('BirthdaycardsComponent', () => {
  let component: BirthdaycardsComponent;
  let fixture: ComponentFixture<BirthdaycardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdaycardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaycardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
