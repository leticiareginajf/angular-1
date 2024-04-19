import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  //@ts-ignore
  plano;
  }





/*
"<app-card></app-card>"
tipo = 'Simples';
preco = 1000;
tipo: null,

plano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    }

getFullPrice()  {
  setTimeout(() => {
    console.log('Set Timeout');
    this.tipo = 'Simples'
  }, 4000)
  return 'R$' + this.preco + ',00/Mês'
}"*/