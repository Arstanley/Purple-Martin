import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomeTabsPage } from '../home-tabs/home-tabs';
import { LoginPage } from '../login/login';
import { PicturePage } from '../picture/picture';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  
  rootPage = HomeTabsPage
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openLoginPage() {
    this.navCtrl.setRoot(LoginPage)
    this.menuCtrl.close();
  }


  openPicturePage(){
    this.navCtrl.push(PicturePage)
    this.menuCtrl.close()
  }
}
