import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  proyectos : Array<any> = [];

  constructor() { }
  
  ngOnInit(): void{

    let proyecto1 = {
      fecha: "May 2022",
      titulo: "Network Topology Design for 300 devices",
      descrip : "Designed a network topology using Cisco Packet Tracer for a fictitious company for 300 devices distributed in 5 buildings in different cities. A VLSM (Variable Length Subnet Mask) was created for the IPv4s in each building, multiple VLAN connections were established, performed Telnet from the management equipment and implemented DHCP",
    };

    let proyecto2 = {
      fecha: "Apr 2022",
      titulo: "Syntax Highlighter Deterministic Finite Automata (DFA) with Racket",
      descrip : "Team project: Creation of a DFA that highlights syntax in Racket. Using functional programming and regular expressions, the program highlights the syntax of a C++ file according to a lexicon table. The results are displayed in an HTML format",
    
    };
    let proyecto3 = {
      fecha: "May 2022",
      titulo: "Object-Oriented Application for Video Queries",
      descrip : "Class diagram design and object-oriented application (CLI) in C++ that manages information from a streaming company: filter videos according to their ratings and genre, query user data, modify user profile and add a video title to their favorites list.",
    
    };

    this.proyectos.push(proyecto1);
    this.proyectos.push(proyecto2);
    this.proyectos.push(proyecto3);

  }
}
