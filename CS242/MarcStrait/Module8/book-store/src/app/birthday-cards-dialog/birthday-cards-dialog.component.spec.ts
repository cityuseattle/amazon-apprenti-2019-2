import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayCardsDialogComponent } from './birthday-cards-dialog.component';

describe('BirthdayCardsDialogComponent', () => {
  let component: BirthdayCardsDialogComponent;
  let fixture: ComponentFixture<BirthdayCardsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayCardsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayCardsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
