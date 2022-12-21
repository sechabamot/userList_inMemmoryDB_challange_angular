import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './interfaces/user-interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private requestPath = environment.apiBaseUrl + "/user/";

  constructor(private _httpClient:HttpClient) { 
    
  }

  getListOfUsers(){
    return this._httpClient.get<User[]>(this.requestPath + "list")
  }

}
