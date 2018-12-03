import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   private data;
 
   
  constructor(public navCtrl: NavController) {
    this.data = "";
  }

  view(receive){
    this.data += receive;
  }

 
   

}
