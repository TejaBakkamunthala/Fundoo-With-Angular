import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpclient:HttpClient) { }

  postService(url:string, reqData:any, token:boolean=false, httpOptions:any){
    return this.httpclient.post(url,reqData,token && httpOptions);
  }
  
  patchService(url:string,reqData:any,token:boolean=false,httpOptions:any){
    return this.httpclient.patch(url,reqData,token && httpOptions);
  }

  getService(url:string,token:boolean=false,httpOptions:any){
    return this.httpclient.get(url,token && httpOptions);
  }

  putService(url:string,reqData:any,token:boolean=false,httpOptions:any){
    return this.httpclient.put( url,reqData,token && httpOptions);
  }

  deleteService(url:string,token:boolean=false,httpOptions:any){
    return this.httpclient.delete( url,token && httpOptions);
  }


}
