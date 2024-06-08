import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { Console } from 'console';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit{
  archiveList:any;
  constructor(private notes:NotesService){}
  ngOnInit(): void {
    this.OnNote();
  }

  OnNote(){
    
    this.notes.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.archiveList=response.data;
      this.archiveList=this.archiveList.filter((Object:any)=>{
        return Object.archive==true && Object.trash==false;
      })
      console.log(this.archiveList);
  })
    }
  }

  