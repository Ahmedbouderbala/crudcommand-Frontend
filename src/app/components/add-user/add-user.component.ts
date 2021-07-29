import { Component, OnInit } from '@angular/core';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {
         name:'',
         address:'',
         phone:'',
         produit:'',
         published:false    
  };
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  saveUser(): void {
    const data = {
      name:this.user.name,
      address:this.user.address,
      phone:this.user.phone,
      produit:this.user.produit,
      
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      name: '',
      address: '',
      phone:'',
      produit:'',
      published: false
    };
  }


}


