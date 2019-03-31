import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import Parse from 'parse'
import {Storage} from '@ionic/storage'
import { MartinWatchPage } from '../martin-watch/martin-watch';
/**
 * Generated class for the NewMartinWatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-martin-watch',
  templateUrl: 'new-martin-watch.html',
})
export class NewMartinWatchPage {
  
  name: any
  public: any
  address: any
  city: any
  state: any
  post_code: number
  country: any
  latitude: number
  longitude: number
  colonies: Array<any>
  email: any
  colony: any

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  newColony(){
    if(this.name == undefined || 
    this.public == undefined || 
    this.address == undefined || 
    this.city == undefined || 
    this.state == undefined ||
    this.post_code == undefined ||
    this.country == undefined) {
      const alertCT = this.alertCtrl.create({
        title: "Warning",
        subTitle: "please fill in all fields",
        buttons: ["OK"]
      });
      alertCT.present();
    } else {
      this.storage.get('email').then((val)=>{
        const NewWatch = Parse.Object.extend("MartinWatch");
        const newWatch = new NewWatch();
        newWatch.set("Name", this.name);
        newWatch.set("Publicity", (this.public));
        newWatch.set("Address", this.address);
        newWatch.set("City", this.city);
        newWatch.set("State", this.state);
        newWatch.set("Post_Code", this.post_code);
        newWatch.set("Country", this.country);
        newWatch.set("Longitude", this.longitude);
        newWatch.set("Latitude", this.latitude);
        newWatch.set("userid", val);
        newWatch.set("num_pole", 0);
        newWatch.set("num_cavaties", 0);
        newWatch.save()
        .then((watch) => {
          // Success
          alert('New object created successfully');
          this.navCtrl.pop()
        }, error => {
          // Fails
          alert('Failed to create object with error: ' + error.message)
        }
        )
      })
    }
  }

  ionViewWillEnter() {
    this.storage.get('email').then((val)=>{
      this.email = val;
      this.constructPreviousList()
    })
  }

  async logChosen() {
    const colony = Parse.Object.extend('MartinWatch');
    const q = new Parse.Query(colony);
    q.equalTo("userid", this.email);
    q.equalTo("Name", this.colony);
    const results= await q.find()
    this.latitude = results[0].get("Latitude")
    this.longitude = results[0].get("Longitude")
    this.post_code = results[0].get("Post_Code")
    this.state = results[0].get("State")
    this.address = results[0].get("Address")
    this.city = results[0].get("City")
    this.public = results[0].get("Publicity")
    this.country = results[0].get("Country")
  }

  async constructPreviousList() {
    const colony = Parse.Object.extend('MartinWatch');
    const q = new Parse.Query(colony);
    q.equalTo("userid", this.email);
    q.equalTo("Finalized", true);
    this.colonies = await q.find()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewMartinWatchPage');
  }

}
