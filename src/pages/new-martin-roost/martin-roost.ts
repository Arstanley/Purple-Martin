import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage'
import Parse from 'parse'
/**
 * Generated class for the MartinRoostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-martin-roost',
  templateUrl: 'martin-roost.html',
})
export class MartinRoostPage {
  @ViewChild('formSlider') formSlider: any;
  title: any
  city: any
  state: any
  latitude: any
  longitude: any
  activels: any
  numPM: number
  scomposition: any
  accessibility : any
  dir_detail: any
  habitat_detail: any
  history: any
  begin : Date
  end: Date
  threats: any
  opportunities: any
  comments: any
  privacy: boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MartinRoostPage');
  }

  prev(){
    this.formSlider.slidePrev();
  }

  next(){
    this.formSlider.slideNext();
  }

  submit() {
    if(this.title == undefined || 
      this.city == undefined || 
      this.state == undefined || 
      this.latitude== undefined || 
      this.longitude == undefined ||
      this.activels == undefined) {
        const alertCT = this.alertCtrl.create({
          title: "Warning",
          subTitle: "please fill in all fields",
          buttons: ["OK"]
        });
        alertCT.present();
      } else {
        this.storage.get('email').then((val)=>{
          const Roost = Parse.Object.extend("MartinRoost")
          const newRoost = new Roost()
          newRoost.set('title', this.title)
          newRoost.set('city', this.city)
          newRoost.set('state', this.state)
          newRoost.set('latitude', this.latitude)
          newRoost.set('longitude', this.longitude)
          newRoost.set('activels', this.activels)
          newRoost.set('numPM', Number(this.numPM))
          newRoost.set('scomposition', this.scomposition)
          newRoost.set('dir_detail', this.dir_detail)
          newRoost.set('habitat_detail', this.habitat_detail)
          newRoost.set('history', this.history)
          newRoost.set('begin', new Date(this.begin))
          newRoost.set('end', new Date(this.end))
          newRoost.set('threats', this.threats)
          newRoost.set('opportunities', this.opportunities)
          newRoost.set('comments', this.comments)
          newRoost.set('privacy', Boolean(this.privacy))
          newRoost.set('email', val)
          newRoost.save().then(()=>{
            alert('Successfully Submitted')
            this.navCtrl.pop()
          }, error => {
            alert('Failed to create object with error: ' + error.message)
          })
        })
  }
  }

  
}
