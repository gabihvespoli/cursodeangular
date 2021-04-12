import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  cursoAngular: boolean = true
  urlImagem: string = 'http://lorempixel.com.br/500/400/?2'

  getValor() {
    return 1
  }

  getCurtiCurso() {
    return true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
