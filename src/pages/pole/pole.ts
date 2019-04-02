import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import Parse from 'parse'
import { NewpolePage } from '../newpole/newpole';
import { CavityListPage } from '../cavity-list/cavity-list';
import { EditPolePage } from '../edit-pole/edit-pole';
/**
 * Generated class for the PolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pole',
  templateUrl: 'pole.html',
})
export class PolePage {
  colony: any
  colony_name: any
  poles: Array<{name: string, num_cavity: string, ID: string}>;
  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.colony = this.navParams.get('colony')
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.colony_name = this.colony.get('Name');
    this.loading()
  }
  async loading() {
    const loading = this.loadingCtrl.create({
      spinner: "dots",
      duration: 10000
    })
    loading.present()
    await this.constructData()
    loading.dismiss()
  }
  async constructData() {
    const Pole = Parse.Object.extend("MartinWatch_Poles");
    const q = new Parse.Query(Pole);
    var MartinWatch = Parse.Object.extend('MartinWatch')
    q.equalTo("colony", new MartinWatch({id: this.colony.id}));
    const results = await q.find();
    this.poles = [];
    if(results.length == 0) {
      this.poles.push({
        name: 'No Data Available; Please add a cavity.',
        num_cavity: 'No Data Available; Please add a cavity.',
        ID: 'No Data Available; Please add a cavity.'
      })
    } else {
      for(let i = 0; i < results.length; i++) {
        var object = results[i];
        this.poles.push({
          name: object.get('name'),
          num_cavity: object.get('num_cavity'),
          ID: object.id
        })
      }
    }
  }
  
  addPole() {
    this.navCtrl.push(NewpolePage, {
      colony: this.colony
    })
  }

  selected(event, pole){
    event.stopPropagation()
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    const Pole = Parse.Object.extend("MartinWatch_Poles");
    const query = new Parse.Query(Pole);
    query.get(pole.ID).then((pole) => {
      this.navCtrl.push(CavityListPage, {
        pole: pole,
      })
    }, (error) => {
      alert(error + "Cannot retrieve object");
    })
  }

  edit(event, pole) {
    event.stopPropagation()
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    const Pole = Parse.Object.extend("MartinWatch_Poles");
    const query = new Parse.Query(Pole);
    query.get(pole.ID).then((pole) => {
      this.navCtrl.push(EditPolePage, {
        pole: pole,
      })
    }, (error) => {
      alert(error + "Cannot retrieve object");
    })
  }
  
  ionViewWillEnter() {
    this.constructData()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PolePage');
  }

  finalize() {
    this.alertCtrl.create({
      title: 'Confirm',
      message: 'After clicking Confirm, you will no longer be able to edit any information, and your data will be marked as finalized in our database',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Finalize',
          cssClass: 'danger',
          handler: () => {
            this.submitData();
          }
        }
      ]

    }).present()

  }

  submitData() {
    this.colony.set('Finalized', true)
    this.colony.save().then(()=>{
      alert('Successfully Finalized')
    })
    this.navCtrl.pop()
  }

  ionViewDidEnter() {
    if(this.poles.length == 1 && this.poles[0].name=="No Data Available; Please add a cavity.") {
      document.getElementById("info").innerHTML = "NO POLE, PLEASE ADD A NEW ONE";
    }
  }

}
