import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
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
  email: any
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
  roost: any
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.roost = this.navParams.get('roost') 
    this.storage.get('email').then((val)=>{
      this.email = val
      this.load()
    })
  }

  async load() {
    const loading = this.loadingCtrl.create({
      spinner: "dots",
    })
    loading.present()
    await this.constructPreviousData()
    loading.dismiss()
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

  async constructPreviousData() {
    if(this.roost != undefined) {
      this.title = this.roost.get('title')
      this.city = this.roost.get('city')
      this.state = this.roost.get('state')
      this.latitude = this.roost.get('latitude')
      this.longitude = this.roost.get('longitude')
      this.activels = this.roost.get('activels')
      this.numPM = this.roost.get('numPM')
      this.scomposition = this.roost.get('scomposition')
      this.accessibility = this.roost.get('accessibility')
      this.dir_detail = this.roost.get('dir_detail')
      this.habitat_detail = this.roost.get('dir_detail')
      this.history = this.roost.get('history')
      this.begin = this.roost.get('begin')
      this.end = this.roost.get('end')
      this.threats = this.roost.get('threats')
      this.opportunities = this.roost.get('opportunities')
      this.comments = this.roost.get('comments')
      this.privacy = this.roost.get('privacy')
    }
  }

  ionViewWillLeave() {
    if(
      this.title != undefined ||
      this.city != undefined ||
      this.state != undefined ||
      this.latitude != undefined ||
      this.longitude != undefined ||
      this.activels != undefined ||
      this.numPM != undefined ||
      this.scomposition != undefined ||
      this.accessibility != undefined ||
      this.dir_detail != undefined ||
      this.habitat_detail != undefined ||
      this.history != undefined ||
      this.begin != undefined ||
      this.end != undefined ||
      this.threats != undefined ||
      this.opportunities != undefined ||
      this.comments != undefined ||
      this.privacy != undefined
      ) {
        this.storage.get('email').then((val)=>{
          const Roost = Parse.Object.extend("MartinRoost")
          if(this.roost == undefined) {
            this.roost = new Roost()
          }
          this.roost.set('title', this.title)
          this.roost.set('city', this.city)
          this.roost.set('state', this.state)
          this.roost.set('latitude', this.latitude)
          this.roost.set('longitude', this.longitude)
          this.roost.set('activels', this.activels)
          this.roost.set('numPM', Number(this.numPM))
          this.roost.set('scomposition', this.scomposition)
          this.roost.set('dir_detail', this.dir_detail)
          this.roost.set('habitat_detail', this.habitat_detail)
          this.roost.set('history', this.history)
          if(this.begin != undefined) {
            this.roost.set('begin', new Date(this.begin))
          }
          if(this.end != undefined) {
            this.roost.set('end', new Date(this.end))
          }
          this.roost.set('threats', this.threats)
          this.roost.set('opportunities', this.opportunities)
          this.roost.set('comments', this.comments)
          this.roost.set('privacy', Boolean(this.privacy))
          this.roost.set('email', val)
          this.roost.set('status', "Saved")
          this.roost.save().then(()=>{

          })
    })
      }
    
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
          newRoost.set('status', "Pending")
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
