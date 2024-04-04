import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books-out-oflibrary',
  templateUrl: './books-out-oflibrary.component.html',
  styleUrls: ['./books-out-oflibrary.component.css']
})
export class BooksOutOFLibraryComponent {
  bookName!: string;
  allBooks: any [] = [];

  constructor(private http:HttpClient){}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.bookName = form.value['book-input'];
      // alert(`${this.bookName} done successfully`);
      console.log(`Book Name: ${this.bookName}`);
      this.getBooks(this.bookName);

  }}
 
  getBooks(book: string): void {
   
    // Example:https://www.googleapis.com/books/v1/volumes?q=harry+potter
this.bookName=this.bookName.replace(/ /g, '+');

    this.http.get<any>(`https://www.googleapis.com/books/v1/volumes?q=${this.bookName}`).subscribe(
      (response) => {
        const items = response.items;
        this.allBooks=items;
        console.log(this.allBooks.length);
      },
      );
      this.allBooks = [];// to allow new search
  }

}
