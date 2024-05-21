import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  //template: '<div class="card-button">TESTE</div>',
  //template: `
  //  <div class="card-button">Adquirir</div>
  //`,
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {

propTest : boolean = false;


//@Input({ transform: booleanAttribute }) buttonDisabled: boolean = false;

 // @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();
 //@ts-ignore
  @Output('buttonClick') buttonClickEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  onButtonClick(){
    console.log('onButtonClick');

    this.buttonClickEmitter.emit(this.propTest);
  }

}
