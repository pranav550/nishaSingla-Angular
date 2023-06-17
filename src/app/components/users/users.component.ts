import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // users: any = ['test1', 'test2', 'test3']
  users: any = [];
  errorMessage: String = '';

  constructor(private userService: UsersService, private route: Router) { }

  ngOnInit(): void {
    this.userService.getAllHttpUser().subscribe((data) => {
      console.log(data)
      this.users = data
    }, (err) => {
      this.errorMessage = err.message
    })
  }

  navigateToAddUser() {
    this.route.navigate(['/addUser'])
  }

}
