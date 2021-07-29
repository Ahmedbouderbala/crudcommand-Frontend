import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users?:User[]
  currentUser: User = {};
  currentIndex=-1;
  name='';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }
  retrieveUsers() {
    this.userService.getAll()
    .subscribe(
      data => {
        this.users=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }
  setActiveUser(user: User , index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers():void {
    this.userService.deleteAll()
    .subscribe(
      response=>{
        console.log(response);
        this.refreshList();
      },
      error => {
        console.log(error);
     
    });
      
  }
    searchName(): void {
      this.currentUser = {};
      this.currentIndex = -1;
  
      this.userService.findByName(this.name)
        .subscribe(
          data => {
            this.users = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
  }
  
}
