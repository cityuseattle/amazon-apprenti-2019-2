import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayCardFormComponent } from './birthdaycard-form.component';

describe('BirthdaycardFormComponent', () => {
  let component: BirthdayCardFormComponent;
  let fixture: ComponentFixture<BirthdayCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
