import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayCardDetailDialogComponent } from './birthday-card-detail-dialog.component';

describe('BirthdayCardDetailDialogComponent', () => {
  let component: BirthdayCardDetailDialogComponent;
  let fixture: ComponentFixture<BirthdayCardDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayCardDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayCardDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
