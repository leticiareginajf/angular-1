import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano = {
    tipo: 'Simples',
    preco: 100,
  }
  
}




/*
"<app-card></app-card>"
tipo = 'Simples';
preco = 1000;


getFullPrice()  {
  setTimeout(() => {
    console.log('Set Timeout');
    this.tipo = 'Simples'
  }, 4000)
  return 'R$' + this.preco + ',00/Mês'
}"*/