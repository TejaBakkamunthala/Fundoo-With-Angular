import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any;
  constructor(private httpService : HttpService) 
  { this.token =localStorage.getItem('token')}
   
  addNotes(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService('https://localhost:7089/api/Notes/Create',reqData,true,header);

  }

  getNotes(){
    const header= new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
    return this.httpService.getService('https://localhost:7089/api/Notes/GetAllNotes',true,header);

  }


  trashNotes(reqData:any)
  {
   let header={
     headers:new HttpHeaders({
       'Content-type':'application/json',
       'Authorization':'Bearer '+this.token
     })
   }

   return this.httpService.putService(`https://localhost:7089/api/Notes/TrashNotes?NotesId=`+reqData.notesId,{},true,header);
  }
  
  archiveNotes(reqData:any)
  {
   let header={
     headers: new HttpHeaders({
       'Content-type':'application/json',
       'Authorization':'Bearer '+this.token
     })
   }
   return this.httpService.putService(`https://localhost:7089/api/Notes/ArchiveNotes?NotesId=`+reqData.notesId,{},true,header);


  }
  

  notesColor(reqData:any)
{
  console.log(reqData) 
  let header = {
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.putService('https://localhost:7089/api/Notes/ChangeColor?color='+reqData.color+'&NotesId='+reqData.notesId,{},true,header);

  }


  updateNotes(reqData:any,notesId:any){
    console.log(reqData) 
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:7089/api/Notes/UpdateByNotesId?NotesId='+notesId,reqData,true, header);

  }

}

  
   