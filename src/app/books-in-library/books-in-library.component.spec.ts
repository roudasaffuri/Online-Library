import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksInLibraryComponent } from './books-in-library.component';

describe('BooksInLibraryComponent', () => {
  let component: BooksInLibraryComponent;
  let fixture: ComponentFixture<BooksInLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksInLibraryComponent]
    });
    fixture = TestBed.createComponent(BooksInLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
