import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  pageTitle: any = "Data binding in Angular "
  url = "assets/21 JRTP payment.jpg"
  btnStatus: boolean = false;
  username: any = "";
  changeTitle() {
    this.pageTitle = "hello"
  }
}
