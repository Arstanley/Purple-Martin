import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MartinwatchdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-martinwatchdata',
  templateUrl: 'martinwatchdata.html',
})
export class MartinwatchdataPage {
  selectedWatch: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedWatch = navParams.get('watch');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MartinwatchdataPage');
  }

}
