import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  pageTitle: any = "Angular Pipes"
  users: any;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }

}
