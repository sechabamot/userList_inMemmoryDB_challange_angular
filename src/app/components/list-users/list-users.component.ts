import { UserStatus } from './../../library/enums/user-enums';
import { UserService } from './../../library/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/library/services/interfaces/user-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  $users:Observable<User[]>;

  constructor(private _userService:UserService) {

  }

  ngOnInit(): void {
    this.$users = this._userService.getListOfUsers()
  }

  returnUserStatusAsText(status:UserStatus){
    if(status == UserStatus.Disabled) return "Disabled"
    return "Active" 
  }

}
