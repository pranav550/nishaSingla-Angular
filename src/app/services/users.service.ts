import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return [
      { id: 101, name: 'john1', city: 'delhi', salary: "20000", dob: new Date("05/10/1989") },
      { id: 102, name: 'john2', city: 'delhi', salary: "30000", dob: new Date("05/12/1991") },
      { id: 103, name: 'john3', city: 'delhi', salary: "60000", dob: new Date("10/10/1992") },
      { id: 104, name: 'john4', city: 'delhi', salary: "100000", dob: new Date("12/18/1993") },
      { id: 105, name: 'john5', city: 'delhi', salary: "2500000", dob: new Date("06/20/1990") }
    ]
  }

  getAllHttpUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id)
  }
}
