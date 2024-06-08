import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService:HttpService) { }

  login(reqData: any){
  console.log(reqData)
  let header={
    headers: new HttpHeaders({
      'Content-type':'application/json',
    })
  }
  return this.httpService.postService('https://localhost:7089/api/User/Userlogin',reqData,false,header);

}

registration(reqData: any){
  console.log(reqData)
  let header={
    headers:new HttpHeaders({
      'Content-type':'application/json',
    })
  }
  return this.httpService.postService('https://localhost:7089/api/User/Register',reqData,false,header);
  
}



forgot(reqData: any){
  console.log(reqData)
  let header={
    headers:new HttpHeaders({
      'Content-type':'application/json',

    })
  }
  return this.httpService.postService('https://localhost:7089/api/User/ForgotPassword?Email='+reqData.Email,{},false,header)

}
}
