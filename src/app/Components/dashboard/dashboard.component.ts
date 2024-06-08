import { Component } from '@angular/core';
import { DataService } from '../../Services/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  constructor(private dataService:DataService){}
  search(event:any){
    console.log(event.target.value);
    this.dataService.outgoingData(event.target.value);
  }

}
