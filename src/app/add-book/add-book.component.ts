import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/service.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  bookName: string = '';
  authorName: string = '';
  quantity!: number;
  category: string = '';
  imageData!: File;

  constructor(private sharedDataService: SharedDataService) {}

  onSubmit(): void {
    const formData = {
      bookName: this.bookName,
      authorName: this.authorName,
      quantity: this.quantity,
      category: this.category,
      image: this.imageData
    };
    this.sharedDataService.updateFormData(formData);
  }

  onFileSelected(event: any): void {
    this.imageData = event.target.files[0];
  }
}
