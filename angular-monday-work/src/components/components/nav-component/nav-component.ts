import { Component, EventEmitter, Output } from '@angular/core';
import { USERS } from './USERS';

@Component({
  selector: 'app-nav-component',
  standalone: false,
  templateUrl: './nav-component.html',
  styleUrl: './nav-component.scss'
})
export class NavComponent {
  users=USERS;

  @Output() selectedUser=new EventEmitter<any>();
  displayUserInfo(user:any){
    console.log("display user info",user);
    this.selectedUser.emit(user);
  }

}
