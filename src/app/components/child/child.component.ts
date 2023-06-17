import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() uname: any;
  @Output()

  notify: EventEmitter<String> = new EventEmitter<String>;
  passData() {
    this.notify.emit("Hi All")
  }


}
