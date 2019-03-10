import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-p-detail',
  templateUrl: 'p-detail.html',
})
export class PDetailPage {
  public productDetails = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PDetailPage');
  }

}
