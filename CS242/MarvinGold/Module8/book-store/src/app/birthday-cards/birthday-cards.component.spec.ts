import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayCardsComponent } from './birthday-cards.component';

describe('BirthdayCardsComponent', () => {
  let component: BirthdayCardsComponent;
  let fixture: ComponentFixture<BirthdayCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
