import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //inputs: ['nomeCurso:name'],
})
export class InputPropertyComponent implements OnInit {
  @Input('name') nomeCurso: string = '';

  constructor() {}

  ngOnInit(): void {}
}
