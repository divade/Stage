import { Component } from '@angular/core';


@Component({
  selector: 'click-me',
  templateUrl:'./click-me.html',
    styleUrls:['./click-me.css']
})
export class ClickMeComponent {
  clickMessage = '';
  onClickMe(){
    this.clickMessage = 'You are my Hero!';
  }
}
