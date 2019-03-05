import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomeTabsPage } from '../home-tabs/home-tabs';
import { PicturePage } from '../picture/picture';
import { UnderdevelopmentpagePage } from '../underdevelopmentpage/underdevelopmentpage';
import { ProjectPage } from '../project/project';
import { VisitorHomePage } from '../visitor-home/visitor-home';
import { projection } from '@angular/core/src/render3/instructions';
import { HomePage } from '../home/home';

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
  
  rootPage: any = HomePage
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openDevelopment() {
    this.navCtrl.push(UnderdevelopmentpagePage)
  }

  openProjectPage() {
    this.rootPage = ProjectPage
    this.menuCtrl.close()
  }

  openAboutPage() {
    this.rootPage = VisitorHomePage
    this.menuCtrl.close()
  }
  openPicturePage(){
    this.rootPage = PicturePage
    this.menuCtrl.close()
  }
  openHomePage() {
    this.rootPage = HomePage
    this.menuCtrl.close()
  }
}
