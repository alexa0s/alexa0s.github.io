import { Component } from '@angular/core';

@Component({
  selector: 'app-competitions-events',
  templateUrl: './competitions-events.component.html',
  styleUrls: ['./competitions-events.component.css']
})
export class CompetitionsEventsComponent {
  compEvents : Array<any> = [];

  constructor() { }
  
  ngOnInit(): void{

    let ev1 = {
      descrip: "Participated in the 2022 International Collegiate Programming Contest (ICPC), the world's largest and oldest programming contest for university students."
    };

    let ev2 = {
      descrip: "Participated in Mexico's largest Hackathon associated with Major League Hacking(MLH): HACKMTY 2022. As a team, we developed a web app focused on financial education for children."
    };
    

    this.compEvents.push(ev1);
    this.compEvents.push(ev2);

  }
}
