import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano {

  infos: IInfos;

}

interface IInfos{
  tipo: string;
  preco: number;
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  //encapsulation: ViewEncapsulation.None,
  //encapsulation: ViewEncapsulation.ShadowDom,
  //encapsulation: ViewEncapsulation.Emulated,
  //encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  //@ts-ignore
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100
    },
  };
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