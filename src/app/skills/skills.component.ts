import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills : Array<any> = [];

  constructor() { }
  
  ngOnInit(): void{

    let p1 = {
      title: "Programming Languages and Technical Skills",
      descrip : "C++, Python, SQL, ROS, Git, Unity, Packet Tracer.",
    };

    let p2 = {
      title: "Achievements and Certificates",
      descrip : "Award for being in the top 1% GPAs of Engineering and Sciences (ITESM 2021), Cisco CCNAv7 course: Introduction of Networks (2022), CCNAv7: Switching, Routing, and Wireless Essentials (2023).",
    
    };


    this.skills.push(p1);
    this.skills.push(p2);

  }
}
