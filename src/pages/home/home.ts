import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, MenuController, AlertController } from 'ionic-angular';
import Parse from 'parse'
import { ToastController } from 'ionic-angular';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { ScoutArrivalPage } from '../scout-arrival/scout-arrival';
import { HomeTabsPage } from '../home-tabs/home-tabs';
import { MartinWatchPage } from '../martin-watch/martin-watch';
import {Storage} from '@ionic/storage'
import { MartinwatchdataPage } from '../martinwatchdata/martinwatchdata';
import { UnderdevelopmentpagePage } from '../underdevelopmentpage/underdevelopmentpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    private storage: Storage,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';

  }
}
