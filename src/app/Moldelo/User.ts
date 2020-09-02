import { UserType } from './UserType';

export class User{
    email:String;
    name:String;
    type:UserType;
    password:String;
    tmpPassword:String;
    status:boolean;
}