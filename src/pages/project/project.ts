import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { UnderdevelopmentpagePage } from '../underdevelopmentpage/underdevelopmentpage';
import { ScoutArrivalPage } from '../scout-arrival/scout-arrival';
import { MartinwatchdataPage } from '../martinwatchdata/martinwatchdata';
import { MartinWatchPage } from '../martin-watch/martin-watch';
import Parse from 'parse'
import {Storage} from '@ionic/storage'
import { ToastController } from 'ionic-angular';
import { MartinRoostPage } from '../new-martin-roost/martin-roost';

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
  email: String
  num_entries: any = 0
  num_colonies: any = 0
  num_poles: any = 0
  num_cavaties: any = 0
  num_roost_entries: any = 0
  constructor(public loadingCtrl: LoadingController ,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    storage.get('email').then((val)=>{
      this.email = val;
      this.load()
    })
  }

  async load() {
    const loading = this.loadingCtrl.create({
      spinner: "dots",
    })
    loading.present()
    await this.constructdata()
    loading.dismiss()
  }

  async constructdata(){
    // MartinRoost Data
    const Roost = Parse.Object.extend("MartinRoost")
    const RoostQuery = new Parse.Query(Roost)
    RoostQuery.equalTo("email", this.email)
    const res = await RoostQuery.find();
    this.num_roost_entries = res.length

    // MartinWatch Data
    const Watch = Parse.Object.extend("MartinWatch");
    const query = new Parse.Query(Watch);
    query.equalTo("userid", this.email);
    const results = await query.find();
    this.num_colonies = results.length;
    for(let i = 0; i < this.num_colonies; ++i) {
      this.num_poles += results[i].get("num_pole")
      this.num_cavaties += results[i].get("num_cavaties")
    }
  }

  openUD() {
    this.navCtrl.push(UnderdevelopmentpagePage)
  }
  openScout(){
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
  openMR() {
    this.navCtrl.push(MartinRoostPage)
  }
  openMW(event){
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
        // this.storage.get('email').then((val)=>{
        //   alert(val)
        // })
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

}
