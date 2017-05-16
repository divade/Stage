import { Component, OnInit } from '@angular/core';

import {User} from '../User';
import {MyService} from '../myService';


@Component({
  selector: 'showUser',
  templateUrl:'./showUser.html',
  providers:[MyService],
  styleUrls:['./showUser.css']
})

export class showUser implements OnInit {
   users : User[];
   selectedUser: User;
   constructor(private myService: MyService){

   }
getUsers():void{
this.myService.getUsers().then(users => this.users = users);
}
ngOnInit():void {
  this.getUsers();
  }
 }
