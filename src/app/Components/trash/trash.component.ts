import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})

export class TrashComponent implements OnInit {
   trashList:any;
   constructor(private notesService :NotesService){}
  ngOnInit(): void {
    this.OnNote();
  }

  OnNote(){
    this.notesService.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.trashList=response.data;
      this.trashList=this.trashList.filter((Object:any)=>{
        return Object.trash==true;
      })
    })

  }

  restore(notes:any){
    let reqData={
      notesId:notes.notesId
    }
    console.log(reqData);
    this.notesService.trashNotes(reqData).subscribe((response:any)=>{
      console.log(response);
    })
  }

  

  
}
