import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatisticsPage } from '../statistics/statistics';


@IonicPage()
@Component({
  selector: 'page-show-data',
  templateUrl: 'show-data.html',
})
export class ShowDataPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }

  sayHello = function(name) {
    console.log('hello!,'+name);
  }

  Deceber() {
    this.navCtrl.push(StatisticsPage)
  }

}
