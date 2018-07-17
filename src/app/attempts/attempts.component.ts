import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Heart } from "../shared/heart.model"

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {

  @Input() public attempts: number;
  
  public currentRound: number = 0;

  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true),
  ]

  constructor() { }

  ngOnInit() { 
  }

  ngOnChanges() {
    console.log(this.attempts);
  }

}
