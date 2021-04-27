import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/500/400/?2';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  //@Input
  nomeDoCurso: string = 'Angular';
  valorInicial = 15;

  //Two-way data binding
  nome: string = 'mimimi';

  pessoa: any = {
    nome: 'lalala',
    idade: 12,
  };

  getValor() {
    return 1;
  }

  getCurtiCurso() {
    return true;
  }

  botaoClicado() {
    return alert('Clicou!');
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log(evento);
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento);
    console.log(evento.novoValor);
  }

  constructor() {}

  ngOnInit(): void {}
}
