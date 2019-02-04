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
  pages: Array<{title: string, component: any}>;
  HomeTabsPage = HomeTabsPage
  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    private storage: Storage,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.menu.enable(true, 'homeMenu')
    this.pages = [
      { title: 'Scout Arrival', component: ScoutArrivalPage}
    ];
  }
  

  openScoutArrivalPage(){
    this.storage.length().then((data) => {
      if(data == 0) {
        this.alertCtrl.create({
          title: 'E-mail identification needed',
          inputs: [
            {
              name: 'email',
              type: 'email',
              placeholder: 'Email address'
            }
          ],
          buttons: [
            {
              text: 'Submit',
              handler: data => {
                this.uploadEmail(data.email);
              }
            },
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary'
            }
          ]
        }).present()
      } else {
        this.navCtrl.push(ScoutArrivalPage)
      }
    })
    
    // this.navCtrl.push(ScoutArrivalPage),
    // this.menu.close;
  }

  oepnMartinWatchPage(event){
    this.storage.length().then((data) => {
      if(data == 0) {
        this.alertCtrl.create({
          title: 'E-mail identification needed',
          inputs: [
            {
              name: 'email',
              type: 'email',
              placeholder: 'Email address'
            }
          ],
          buttons: [
            {
              text: 'Submit',
              handler: data => {
                this.uploadEmail(data.email);
              }
            },
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary'
            }
          ]
        }).present()
      } else {
        this.navCtrl.push(MartinWatchPage)
      }
    })
  }

  uploadEmail(email) {
      this.storage.set('email', email).then(()=>{
        this.alertCtrl.create({
          title: 'Success',
          message: 'Successfully uploaded your email address!',
          buttons: [{
            text: 'OK'
          }]
        }).present();
      })
  }
  openHomePage(){
    this.navCtrl.push(HomeTabsPage),
    this.menu.close;
  }
  openDevelopmentPage(){
    this.navCtrl.push(UnderdevelopmentpagePage)
  }

}
