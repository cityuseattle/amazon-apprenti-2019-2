import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaycardDetailDialogComponent } from './birthdaycard-detail-dialog.component';

describe('BirthdaycardDetailDialogComponent', () => {
  let component: BirthdaycardDetailDialogComponent;
  let fixture: ComponentFixture<BirthdaycardDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdaycardDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaycardDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
