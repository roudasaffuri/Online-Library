import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksOutOFLibraryComponent } from './books-out-oflibrary.component';

describe('BooksOutOFLibraryComponent', () => {
  let component: BooksOutOFLibraryComponent;
  let fixture: ComponentFixture<BooksOutOFLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksOutOFLibraryComponent]
    });
    fixture = TestBed.createComponent(BooksOutOFLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
