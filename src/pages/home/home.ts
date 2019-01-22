import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, MenuController } from 'ionic-angular';
import Parse from 'parse'
import { ToastController } from 'ionic-angular';
import {LoginPage} from '../login/login'
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { ScoutArrivalPage } from '../scout-arrival/scout-arrival';
import { HomeTabsPage } from '../home-tabs/home-tabs';
import { MartinWatchPage } from '../martin-watch/martin-watch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{title: string, component: any}>;
  HomeTabsPage = HomeTabsPage
  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public toastCtrl: ToastController) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.menu.enable(true, 'homeMenu')
    this.pages = [
      { title: 'Scout Arrival', component: ScoutArrivalPage}
    ];
  }

  logOut(){
    Parse.User.logOut().then((resp) => {
      console.log('Logged out successfully', resp);

      this.navCtrl.setRoot(LoginPage);
    }, err => {
      console.log('Error logging out', err);

      this.toastCtrl.create({
        message: 'Error logging out',
        duration: 2000
      }).present();
    })
  }

  openScoutArrivalPage(){
    this.navCtrl.push(ScoutArrivalPage),
    this.menu.close;
  }

  oepnMartinWatchPage(){
    this.navCtrl.push(MartinWatchPage),
    this.menu.close;
  }

  openHomePage(){
    this.navCtrl.push(HomeTabsPage),
    this.menu.close;
  }

}
