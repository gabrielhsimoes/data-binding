import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  valor: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    this.valor++;
  }

  decrementa(){
    this.valor--;
  }

}
