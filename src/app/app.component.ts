import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public gameInProgress: boolean = true;

  public gameResult: string;



  public endGame(result: string): void {
    console.log(result);
    this.gameInProgress = false;
    this.gameResult = result;
  }

  public restartGame(): void {
    this.gameInProgress = true;
    this.gameResult = undefined;
  }
}
