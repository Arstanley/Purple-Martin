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
  currentRoost: any
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
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
    const Roost = Parse.Object.extend("MartinRoost")
    const query = new Parse.Query(Roost)
    query.equalTo("email", this.email);
    query.equalTo("status", "Saved");
    const res = await query.find()
    if(res.length != 0) {
      this.currentRoost = res[0]
      this.title = res[0].get('title')
      this.city = res[0].get('city')
      this.state = res[0].get('state')
      this.latitude = res[0].get('latitude')
      this.longitude = res[0].get('longitude')
      this.activels = res[0].get('activels')
      this.numPM = res[0].get('numPM')
      this.scomposition = res[0].get('scomposition')
      this.accessibility = res[0].get('accessibility')
      this.dir_detail = res[0].get('dir_detail')
      this.habitat_detail = res[0].get('dir_detail')
      this.history = res[0].get('history')
      this.begin = res[0].get('begin')
      this.end = res[0].get('end')
      this.threats = res[0].get('threats')
      this.opportunities = res[0].get('opportunities')
      this.comments = res[0].get('comments')
      this.privacy = res[0].get('privacy')
    }
  }

  ionViewWillLeave() {
    this.storage.get('email').then((val)=>{
          const Roost = Parse.Object.extend("MartinRoost")
          if(this.currentRoost == undefined) {
            this.currentRoost = new Roost()
          }
          this.currentRoost.set('title', this.title)
          this.currentRoost.set('city', this.city)
          this.currentRoost.set('state', this.state)
          this.currentRoost.set('latitude', this.latitude)
          this.currentRoost.set('longitude', this.longitude)
          this.currentRoost.set('activels', this.activels)
          this.currentRoost.set('numPM', Number(this.numPM))
          this.currentRoost.set('scomposition', this.scomposition)
          this.currentRoost.set('dir_detail', this.dir_detail)
          this.currentRoost.set('habitat_detail', this.habitat_detail)
          this.currentRoost.set('history', this.history)
          if(this.begin != undefined) {
            this.currentRoost.set('begin', new Date(this.begin))
          }
          if(this.end != undefined) {
            this.currentRoost.set('end', new Date(this.end))
          }
          this.currentRoost.set('threats', this.threats)
          this.currentRoost.set('opportunities', this.opportunities)
          this.currentRoost.set('comments', this.comments)
          this.currentRoost.set('privacy', Boolean(this.privacy))
          this.currentRoost.set('email', val)
          this.currentRoost.set('status', "Saved")
          this.currentRoost.save().then(()=>{

          })
    })
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
          const currentRoost = new Roost()
          this.currentRoost.set('title', this.title)
          this.currentRoost.set('city', this.city)
          this.currentRoost.set('state', this.state)
          this.currentRoost.set('latitude', this.latitude)
          this.currentRoost.set('longitude', this.longitude)
          this.currentRoost.set('activels', this.activels)
          this.currentRoost.set('numPM', Number(this.numPM))
          this.currentRoost.set('scomposition', this.scomposition)
          this.currentRoost.set('dir_detail', this.dir_detail)
          this.currentRoost.set('habitat_detail', this.habitat_detail)
          this.currentRoost.set('history', this.history)
          this.currentRoost.set('begin', new Date(this.begin))
          this.currentRoost.set('end', new Date(this.end))
          this.currentRoost.set('threats', this.threats)
          this.currentRoost.set('opportunities', this.opportunities)
          this.currentRoost.set('comments', this.comments)
          this.currentRoost.set('privacy', Boolean(this.privacy))
          this.currentRoost.set('email', val)
          this.currentRoost.set('status', "Pending")
          this.currentRoost.save().then(()=>{
            alert('Successfully Submitted')
            this.navCtrl.pop()
          }, error => {
            alert('Failed to create object with error: ' + error.message)
          })
        })
  }
  }

  
}
