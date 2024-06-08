import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.scss'
})
export class DirectivesDemoComponent {
  @Input() notesList:any;

  isMessage: boolean = true;
  itemsList: string[] = ['Virat Kohli', 'MS Dhoni', 'Rohit Sharma', 'Surya Kumar Yadav','jasprit Bumrah'];

  isCorrect: boolean =false;

  isSubmitted(){
    this.isMessage=true;
  }

}
