import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import Parse from 'parse'
import { NewNestCheckPage } from '../new-nest-check/new-nest-check';
import { EditNestCheckPage } from '../edit-nest-check/edit-nest-check';

/**
 * Generated class for the NestcheckHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nestcheck-history',
  templateUrl: 'nestcheck-history.html',
})
export class NestcheckHistoryPage {
  cavity: any
  cav_number: any
  checks: Array<{ID: any, date: any, species: any, young: any, egg: any}>
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.cavity = navParams.get("_cavity")
    this.cav_number = navParams.get("cav_num")
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.loading()
  }
  async loading() {
    const loading = this.loadingCtrl.create({
      spinner: "dots",
      duration: 10000
    })
    loading.present()
    await this.constructdata()
    loading.dismiss()
  }
  async constructdata(){
    const nestCheck = Parse.Object.extend("Nest_Checks");
    const q = new Parse.Query(nestCheck);
    const Cavity = Parse.Object.extend("MartinWatch_Cavities");
    q.equalTo("cavity", new Cavity({id: this.cavity.id}));
    const results = await q.find();
    this.checks = [];
    if(results == 0) {
      this.checks.push({
        ID: "",
        date: "No data available, please enter a new check",
        species: "",
        young: "",
        egg: "" 
      })
    } else {
      for(let i = 0; i < results.length; i++) {
        var object = results[i];
        this.checks.push({
          ID: object.id,
          date: object.get('date'),
          species: object.get('species'),
          young: object.get('young'),
          egg: object.get('egg')
        })
      }
    }
  }
  
  addCheck(){
    this.navCtrl.push(NewNestCheckPage, {
      _cavity: this.cavity
    })
  }

  edit(event, check) {
    event.stopPropagation()
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    const Check = Parse.Object.extend('Nest_Checks');
    const query = new Parse.Query(Check);
    query.get(check.ID).then((check) => {
      this.navCtrl.push(EditNestCheckPage, {
        check: check,
      })
    }, (error) => {
      alert(error + "Cannot retrieve object");
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NestcheckHistoryPage');
  }

}
