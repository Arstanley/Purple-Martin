import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { NewMartinWatchPage } from '../new-martin-watch/new-martin-watch';
import Parse from 'parse'
import DateFormat from 'parse'
import SimpleDateFormat from 'parse'
import { MartinwatchdataPage } from '../martinwatchdata/martinwatchdata';
import {Storage} from '@ionic/storage'
import { CavityListPage } from '../cavity-list/cavity-list';
/**
 * Generated class for the MartinWatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-martin-watch',
  templateUrl: 'martin-watch.html',
})
export class MartinWatchPage {
  email: string;
  watches: Array<{Name: string, num_cavaties: string, updatedAt:string, ID: string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, alrtCtrl: AlertController) {
    storage.get('email').then((val)=>{
      this.email = val;
      this.parse()
    })
  }

  async parse(){
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    const Watch = Parse.Object.extend("MartinWatch");
    const query = new Parse.Query(Watch);
    query.equalTo("userid", this.email);
    const results = await query.find();
    this.watches = []
    for (let i = 0; i < results.length; i++){
      var object = results[i];
      var d = new Date(object.updatedAt)
      var date = d.getDate();
      var month = d.getMonth() + 1;
      var year = d.getFullYear();

      this.watches.push(
        {
          Name: object.get("Name"),
          num_cavaties: object.get("num_cavaties"),
          updatedAt: year.toString() + "/" + month.toString() + "/" + date.toString(),
          ID: object.id
        }
      );
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MartinWatchPage');
  }

  addField(){
    this.navCtrl.push(NewMartinWatchPage)
    this.parse(); 
  }

  selected(event, watch){
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    const Watch = Parse.Object.extend("MartinWatch");
    const query = new Parse.Query(Watch);
    query.get(watch.ID).then((colony) => {
      this.navCtrl.push(CavityListPage, {
        colony: colony
      })
    }, (error) => {
      alert(error + "Cannot retrieve object");
    })
  }
}
