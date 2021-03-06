import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MartinRoostPage } from '../new-martin-roost/martin-roost';
import Parse from 'parse'
import {Storage} from '@ionic/storage'
import { UnderdevelopmentpagePage } from '../underdevelopmentpage/underdevelopmentpage';
/**
 * Generated class for the MartinRoostListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-martin-roost-list',
  templateUrl: 'martin-roost-list.html',
})
export class MartinRoostListPage {
  email: string;
  saved_Roosts: Array<{title: string, begin: string, end: string, updatedAt:string, ID: string, status: string}>;
  submitted_Roosts: Array<{title: string, begin: string, end: string, updatedAt:string, ID: string, status: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public loadingCtrl: LoadingController) {
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
    await this.parse()
    loading.dismiss()
  }
  
  async parse() {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    const Roost = Parse.Object.extend("MartinRoost");
    const query = new Parse.Query(Roost);
    query.equalTo("email", this.email);
    const results = await query.find();
    this.saved_Roosts = []
    this.submitted_Roosts = []
    for (let i = 0; i < results.length; i++){
      var object = results[i];
      var updateDate = new Date(object.updatedAt)
      var updateD = updateDate.getDate();
      var updateM = updateDate.getMonth() + 1;
      var updateY = updateDate.getFullYear();

      var startDate = new Date(object.get("begin"))
      var startD = startDate.getDate()
      var startM = startDate.getMonth() + 1
      var startY = startDate.getFullYear()

      var endDate = new Date(object.get("end"))
      var endD = endDate.getDate()
      var endM = endDate.getMonth()
      var endY = endDate.getFullYear()

      if(object.get('status') == 'Saved') {
      this.saved_Roosts.push(
          {
            title: object.get("title"),
            begin: startY.toString() + "/" + startM.toString() + "/" + startD.toString(),
            end: endY.toString() + "/" + endM.toString() + "/" + endD.toString(),
            ID: object.id,
            status: object.get('status'),
            updatedAt: updateY.toString() + "/" + updateM.toString() + "/" + updateD.toString()
          }
        )
      } else {
        this.submitted_Roosts.push({
          title: object.get("title"),
          begin: startY.toString() + "/" + startM.toString() + "/" + startD.toString(),
          end: endY.toString() + "/" + endM.toString() + "/" + endD.toString(),
          ID: object.id,
          status: object.get('status'),
          updatedAt: updateY.toString() + "/" + updateM.toString() + "/" + updateD.toString()
        })
      }
      }
  }
  
  ionViewWillEnter(){
    this.load()
  }

  ionViewDidEnter() {
    for (let i = 0; i < this.saved_Roosts.length; ++i) {
      if(this.saved_Roosts[i].begin == 'NaN/NaN/NaN') {
        this.saved_Roosts[i].begin = 'NOT SET'
      }
      if(this.saved_Roosts[i].end == 'NaN/NaN/NaN') {
        this.saved_Roosts[i].end = 'NOT SET'
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MartinRoostListPage');
  }
  
  selected(event, roost) {
    event.stopPropagation()
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    const Roost = Parse.Object.extend('MartinRoost');
    const query = new Parse.Query(Roost);
    query.get(roost.ID).then((martinroost) => {
      this.navCtrl.push(MartinRoostPage, {
        roost: martinroost,
      })
    }, (error) => {
      alert(error + "Cannot retrieve object");
    })
  }

  addRoost() {
    this.navCtrl.push(MartinRoostPage)
  }
}
