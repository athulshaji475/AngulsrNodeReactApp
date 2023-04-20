import { Injectable } from '@angular/core';
import { AppConfig } from './class/appconfig';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  public appconfig=new AppConfig()

  constructor(public http:HttpClient) { }


//---------------------------------------

   CheckData(data:any)
  {
   const body=data

console.log("data"+data)
    return this.http.post(this.appconfig.nodeurl+'/login',body)
  }


//--------------------------------------------
GetAllUsersData()
{
 
  return this.http.get(this.appconfig.nodeurl+'/getdata')
}
}