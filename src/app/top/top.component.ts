import { Component } from '@angular/core';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.css']
})



export class TopComponent { 
    public starWarsImg: string = "/assets/starwars.jpg";
    public title: string = "Star Wars Quiz"
}