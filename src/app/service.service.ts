import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private formDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  formData$: Observable<any[]> = this.formDataSubject.asObservable();

  constructor() {}

  updateFormData(data: any): void {
    const currentData = this.formDataSubject.value;
    currentData.push(data);
    this.formDataSubject.next(currentData);
  }
}
