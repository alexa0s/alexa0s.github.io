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
      descrip : "C++, Python, SQL, ROS, Git, Unity, Packet Tracer",
    };

    let p2 = {
      title: "Languages",
      descrip : "Spanish> Native, English> B2, French> Basic, Japanese> Basic",
    
    };


    this.skills.push(p1);
    this.skills.push(p2);

  }
}
