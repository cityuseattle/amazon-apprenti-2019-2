import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayCardsDetailComponent } from './birthday-cards-detail.component';

describe('BirthdayCardsDetailComponent', () => {
  let component: BirthdayCardsDetailComponent;
  let fixture: ComponentFixture<BirthdayCardsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayCardsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayCardsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
