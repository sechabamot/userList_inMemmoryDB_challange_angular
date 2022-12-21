import { UserStatus } from './../../enums/user-enums';

export interface User {
    userName:string,
    emailAddress:string,
    status:UserStatus,
}