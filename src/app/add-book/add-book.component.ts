import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedDataService } from 'src/app/service.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  bookName!: string;
  authorName!: string ;
  quantity!: number;
  category!: string ;
  imageData!: File;

  constructor(private sharedDataService: SharedDataService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Form is valid, show the alert
      alert('Submitted successfully!');
    } 
    const formData = {
      bookName: this.bookName,
      authorName: this.authorName,
      quantity: this.quantity,
      category: this.category,
      image: this.imageData
    };
    this.sharedDataService.updateFormData(formData);
    form.reset();
  }

  onFileSelected(event: any): void {
    this.imageData = event.target.files[0];
  }
  
}