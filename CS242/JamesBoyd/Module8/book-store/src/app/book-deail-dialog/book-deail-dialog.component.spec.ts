import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeailDialogComponent } from './book-deail-dialog.component';

describe('BookDeailDialogComponent', () => {
  let component: BookDeailDialogComponent;
  let fixture: ComponentFixture<BookDeailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDeailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDeailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
