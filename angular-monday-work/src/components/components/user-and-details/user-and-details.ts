import { Component } from '@angular/core';

@Component({
  selector: 'app-user-and-details',
  standalone: false,
  templateUrl: './user-and-details.html',
  styleUrl: './user-and-details.scss'
})
export class UserAndDetails {
   selectedUserInfo: any;

onUserSelected(user: any) {
  console.log("User received in parent:", user);
  this.selectedUserInfo = user;
}


}
