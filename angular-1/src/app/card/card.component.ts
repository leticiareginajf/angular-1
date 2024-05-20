import { Component, Input } from '@angular/core';

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

  @Input({required: true, alias: 'planPriceAlias'}) planPrice: number = 0;


  private _planType: string = '';

  @Input('planType') 
  set planType(value: string){

    this._planType = value.toUpperCase();

  }


  get planType(): string {

     return this._planType;
  }
  
  buttonClicked(valueEmited : boolean){
    console.log('buttonClicked', valueEmited);
    console.log('planType', this.planType);

    //this._planType = 'Teste';
  }
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
}"

 plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100
    },
  };


interface IPlano {

  infos: IInfos;

}

interface IInfos{
  tipo: string;
  preco: number;
}

*/