import {Component} from '@angular/core';

@Component({
  selector: 'keyupV1',
  templateUrl:'./keyUp1/keyUpv1.html',
  styleUrls:['./keyUp1/keyUpv1.css']
})
/* export class KeyUpComponent_v1 {
  values = '';
  onKey(event: any) { //without type info
      this.values += event.target.value + ' | '
  }
  onClickMe(){
    this.values = '';
  }
} ajout chaque lettre au moment de la frappe */

export class KeyUpComponent_v1{
  values='';

  onKey(event: KeyboardEvent){ //with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
  onClickMe(){
    this.values = '';
}
}  // ajout chaque lettre au moment de la frappe */

///////////////////////////////////////////////////////////////////////

@Component({
  selector: 'loop-back',


  templateUrl: './loopBack/loop-back.html',
  styleUrls:['./loopBack/loop-back.css']
})
export class LoopbackComponent {} /// le <p> correspond a la valeur de l'input






//////////////////////////////////////////////////////// ajout d'une variable de référence


@Component({
  selector: 'key-upv2',
  templateUrl:'./keyUp2/keyUpv2.html',
  styleUrls:['./keyUp2/keyUpv2.css']
})
export class KeyUpComponent_v2{
  values ='';
  onKey(value:string){
    this.values += value + ' | ';
  }
  onClickMe(){
    this.values = '';
}
}

/////////////////////////////////////////////////// key Event filtering with key.enter

@Component({
  selector: 'key-upv3',
  templateUrl: './keyUp3/keyUpv3.html',
  styleUrls:['./keyUp3/keyUpv3.css']
})
export class KeyUpComponent_v3{
  value = '';
  onEnter(value: string){ this.value = value;}
}

////////////////////////////////////// keyUp v4 ajout du

@Component({
  selector: 'key-upv4',
  templateUrl:'./keyUp4/keyUpv4.html',
})
export class KeyUpComponent_v4{
  value = '';
  update(value: string){this.value = value;}
}
