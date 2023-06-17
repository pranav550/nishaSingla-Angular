import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userName: FormControl = new FormControl();
  name: FormControl = new FormControl();
  email: FormControl = new FormControl();


  canLeave() {
    if (this.userName) {
      return window.confirm("hi?")
    } else {
      return true
    }
  }
}
