import { Component, Input, numberAttribute } from '@angular/core';


function handlePlanType(value : string){
  console.log('handlePlanType', value);
  return value.toUpperCase();
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

  @Input({required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
  @Input({ alias: 'planType', transform: (value: string) => handlePlanType(value) }) planType: string = '';


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



  get planType(): string {

     return this._planType;
  }
  

  this._planType = value.toUpperCase();



  set planType(value: string)


  private _planType: string = '';


  @Input('planType') planType: string = '';


  @Input({required: true, alias: 'planPriceAlias', transform: numberAttribute}) planPrice: number = 0;
*/