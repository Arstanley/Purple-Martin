import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnderdevelopmentpagePage } from '../underdevelopmentpage/underdevelopmentpage';
import { ScoutArrivalPage } from '../scout-arrival/scout-arrival';
import { MartinwatchdataPage } from '../martinwatchdata/martinwatchdata';
import { MartinWatchPage } from '../martin-watch/martin-watch';

/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openUD() {
    this.navCtrl.push(UnderdevelopmentpagePage)
  }
  openScout() {
    this.navCtrl.push(ScoutArrivalPage)
  }
  openMW() {
    this.navCtrl.push(MartinWatchPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

}
