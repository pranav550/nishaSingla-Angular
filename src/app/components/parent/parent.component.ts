import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  username: string = "pranav";
  childData: string = '';
  parentMethod(data: any) {
    this.childData = data;
  }

}
