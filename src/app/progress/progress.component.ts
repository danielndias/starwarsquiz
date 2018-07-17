import { Component, OnInit, Input } from '@angular/core';

import { PanelComponent } from "../panel/panel.component";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

 @Input() public progress: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
