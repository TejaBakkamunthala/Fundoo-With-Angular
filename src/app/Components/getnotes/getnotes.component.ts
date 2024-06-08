import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrl: './getnotes.component.scss'
})
export class GetnotesComponent implements OnInit {
notesArray:any;


constructor(private notesService : NotesService){}

ngOnInit(): void{
  this.OnNote()
}

OnNote(){
  this.notesService.getNotes().subscribe((response:any)=>{
    console.log(response);
    this.notesArray=response.data;
    console.log("Stored to Array Variable");
    console.log(this.notesArray);

    this.notesArray=this.notesArray.filter((object: any)=>{
      return object.trash==false;
    })

    this.notesArray=this.notesArray.filter((object:any)=>{
      return object.archive==false;
    })
  })
}


AddEvent($event:any){
  console.log(" Add Event  Emitter Running "+$event);
  this.OnNote();
}

UpdateEvent($event:any){
  console.log("Update Emitter Running "+$event);
  this.OnNote();
}
}
