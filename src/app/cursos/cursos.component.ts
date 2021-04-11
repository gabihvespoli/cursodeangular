import { Component, OnInit } from '@angular/core';

@Component({
  selector: ' app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[] = ['Java', 'Angular', 'React']

  constructor() { 
    this.nomePortal = 'http://loiane.training'

    for (let i=0; i<this.cursos.length; i++) {
      let curso = this.cursos[i]
    }
  }

  ngOnInit() {
  }

}
