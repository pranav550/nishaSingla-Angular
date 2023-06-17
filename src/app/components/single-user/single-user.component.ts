import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) { }
  user: any;
  isDisplay:boolean=false;
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    let id = this.route.snapshot.params['id'];
    this.userService.getUser(id).subscribe((data) => {
      console.log(data)
      this.user = data
      this.isDisplay=true
    })
  }
}
