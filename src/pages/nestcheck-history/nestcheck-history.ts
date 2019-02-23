import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Parse from 'parse'

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
  checks: Array<{date: any, species: any, young: any, egg: any}>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cavity = navParams.get("_cavity")
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.constructdata();
  }
  async constructdata(){
    const nestCheck = Parse.Object.extend("Nest_Checks");
    const q = new Parse.Query(nestCheck);
    const results = await q.find();
    this.checks = [];
    if(results == 0) {
      this.checks.push({
        date: "No data available, please enter a new check",
        species: "",
        young: "",
        egg: "" 
      })
    } else {
      for(let i = 0; i < results.length; i++) {
        var object = results[i];
        this.checks.push({
          date: object.get('check_date'),
          species: object.get('species'),
          young: object.get('young'),
          egg: object.get('egg')
        })
      }
    }
  }
  
  addCheck(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NestcheckHistoryPage');
  }

}
