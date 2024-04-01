import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/service.service';
@Component({
  selector: 'app-books-in-library',
  templateUrl: './books-in-library.component.html',
  styleUrls: ['./books-in-library.component.css']
})
export class BooksInLibraryComponent implements OnInit{
  formData: any[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.formData$.subscribe(dataList => {
      this.formData = dataList;
    });
  }

  // Function to generate URL for the uploaded image
  getImageUrl(image: File): string {
    return URL.createObjectURL(image);
  }
}
