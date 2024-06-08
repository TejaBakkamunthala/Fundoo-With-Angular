import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling-demo',
  templateUrl: './event-handling-demo.component.html',
  styleUrl: './event-handling-demo.component.scss'
})
export class EventHandlingDemoComponent {
  buttonClick(): void {
    alert('Button clicked Successfully');
  }

  buttonClickk(): void{
    alert('Successfully Submitted');
  }

}
