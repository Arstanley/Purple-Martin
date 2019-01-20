import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { VisitorHomePage } from '../visitor-home/visitor-home';

/**
 * Generated class for the HomeTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html',
})
export class HomeTabsPage {

  tab1Root = VisitorHomePage
  tab2Root = HomePage

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTabsPage');
  }
  // enableVisitorMenu() {
  //   this.menuCtrl.enable(true, 'visitorMenu');
  //   this.menuCtrl.enable(false, 'homeMenu');
  // }
  // enableHomeMenu() {
  //   this.menuCtrl.enable(false, 'visitorMenu');
  //   this.menuCtrl.enable(true, 'homeMenu');
  // }

}
