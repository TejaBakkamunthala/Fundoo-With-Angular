import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../../Services/http/http.service';
import { response } from 'express';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.scss'
})
export class AddNotesComponent implements OnInit {
  NotesDataForm !:FormGroup;
  display=true;
   submitted = false;
   token:any;

  @Output() RefreshAddEvent=new   EventEmitter<string>();
  constructor(private formBuilder: FormBuilder, private notesService:NotesService){}
  ngOnInit(): void {
    this.NotesDataForm=this.formBuilder.group({
      title:[''],
      description:['']
      
    });
  }

  OnNote(){
    this.submitted=true;
    if(this.NotesDataForm.valid){
      let reqData= {
        title:this.NotesDataForm.value.title,
        description:this.NotesDataForm.value.description
      }
      console.log(reqData);
      
      this.notesService.addNotes(reqData).subscribe((response:any)=>{
        console.log(response);
        this.RefreshAddEvent.emit(response);
      });
    }
  
  this.display=true;
  }
}