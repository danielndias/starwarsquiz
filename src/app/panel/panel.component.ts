import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Question } from '../shared/question.model';
import { QUESTIONS } from './q-and-a.mok';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public questions: Question[] = QUESTIONS;
  public instruction: string = 'Answer the Questions:';
  public answer: string = '';

  public round: number = 0;
  public roundQuestion: Question;

  public progress: number = 0;

  public attempts: number = 3;

  @Output() public endGame = new EventEmitter();

  constructor() { 
    this.updateRound();
  }

  ngOnInit() {
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public checkAnswer(): void {
    if (this.answer == this.roundQuestion.answer) {

      //Moving to next Round
      this.round++;

      //Updating the Progress
      this.progress += 100/this.questions.length;

      //Updating the Question
      this.updateRound();

      //Checking if the game is over
      if (this.round === 4) {
        this.endGame.emit("victory");
      }

      
    } else {
      //decrease the number of attempts available
      this.attempts--

      if (this.attempts < 0 ) {
        this.endGame.emit("defeat");        
      }
    }

  }

  public updateRound(): void {
    this.roundQuestion = this.questions[this.round];
    //Clear the Answer
    this.answer = '';
  }

}
