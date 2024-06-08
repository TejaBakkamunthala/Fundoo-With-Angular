import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { response } from 'express';
import { DataService } from '../../Services/dataService/data.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent implements OnInit{
  filterNote:any
  @Input() notesList:any;
  @Output() updateAutoRefreshEvent= new EventEmitter<string>();
  constructor(public matDialog:MatDialog , private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.incomingData.subscribe((response)=>{
      console.log("Search in process ",response);
      this.filterNote = response;
    })
  }

  editNoteDialogBox(notes : any){
    const dialogbox = this.matDialog.open(UpdatenotesComponent,{
      width:'40%',
      height:'auto',
      data:notes
    })
    
    dialogbox.afterClosed().subscribe(result =>{
      console.log(result);
      this.updateAutoRefreshEvent.emit(result);
    })
    }

    }


