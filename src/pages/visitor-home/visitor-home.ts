import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { PicturePage } from '../picture/picture'
import { LoginPage } from '../login/login'
import { HomeTabsPage } from '../home-tabs/home-tabs';

/**
 * Generated class for the VisitorHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visitor-home',
  templateUrl: 'visitor-home.html',
})
export class VisitorHomePage {
  HomeTabsPage = HomeTabsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'visitorMenu')
  }

  openHomePage(){
    this.navCtrl.push(VisitorHomePage)
    this.menuCtrl.close()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorHomePage');
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
