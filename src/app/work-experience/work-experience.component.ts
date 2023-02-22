import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  workExperiencie : Array<any> = [];

  constructor() { }
  
  ngOnInit(): void{

    let work1 = {
      fecha: "Aug 2021 – present",
      ubicacion : "Monterrey, N.L.",
      puesto: "Co-leader of Unmanned Surface Vehicle (USV) project",
      empresa: "VantTec",
      logros: [
        { descripcion: " Currently working with YOLO v3 for object recognition and classification (markers, buoys) in an aquatic environment using a ZED stereo camera."},
      ]
    };

    let work2 = {
      fecha: "Feb 2022 – Dec 2022",
      ubicacion : "Monterrey, N.L.",
      puesto: "Team member",
      empresa: "Cybersecurity Tec",
      logros: [
        { descripcion: "Marketing assistant of the first cybersecurity club of Tec de Monterrey"},
        { descripcion: "Attended MetaBaseQ, Oracle, rThreat, WOMCY, and Softtek cybersecurity conferences and participated in a capture the flag event."},
      ]
    };
    let work3 = {
      fecha: "Feb 2022 – Jun 2022",
      ubicacion : "Monterrey, N.L.",
      puesto: "Instructor",
      empresa: "WiT Code (Women in Technology)",
      logros: [
        { descripcion: "Empowering secondary school girls in technology-related careers through programming courses"},
        { descripcion: "Designed flowlab classes and taught HTML, Scratch, MIT App Inventor, Python and Flowlab."},
      ]
    };

    this.workExperiencie.push(work1);
    this.workExperiencie.push(work2);
    this.workExperiencie.push(work3);

  }

}
