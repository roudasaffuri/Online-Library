import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  name: string = '';
  names: string[] = [];

  addName() {
    if (this.name !== '') {
      this.names.push(this.name);
      this.name = '';
    }
    if (this.names.length === 2) {
      alert('You have entered two names. You cannot enter more names.');
}
}
isValidName(name: string): boolean {
  const pattern = /^[a-zA-Z ]*$/;
  return pattern.test(name);//The test() method returns true if it finds a match
}
}
