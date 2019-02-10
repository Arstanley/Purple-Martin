import { Component, Query } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Parse from 'parse'
import { NewCavityPage } from '../new-cavity/new-cavity';
import { query } from '@angular/core/src/animation/dsl';
/**
 * Generated class for the CavityListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cavity-list',
  templateUrl: 'cavity-list.html',
})
export class CavityListPage {
  colony: any;
  cavities: Array<{num_pole: string, num_cavity: string, housing_type: string, opening: string, eggs: string, young: string, updatedAt:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.colony = this.navParams.get('colony');
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.constructData();
  }

  async constructData() {
    const Cavity = Parse.Object.extend("MartinWatch_Cavities");
    const q = new Parse.Query(Cavity);
    var MartinWatch = Parse.Object.extend('MartinWatch')
    q.equalTo("colony", new MartinWatch({id: this.colony.id}));
    const results = await q.find();
    alert(results)
    this.cavities = [];
    if(results.length == 0) {
      this.cavities.push({
        num_pole: "N/A",
        num_cavity: "N/A",
        housing_type: "N/A",
        opening: "N/A",
        eggs: "N/A",
        young: "N/A",
        updatedAt: "N/A"
      })
    } else {
      for(let i = 0; i < results.length; i++) {
        var object = results[i];
        var d = new Date(object.updatedAt)
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        this.cavities.push({
          num_pole: object.get("num_pole"),
          num_cavity: object.get("num_cavity"),
          housing_type: object.get("housing_type"),
          opening: object.get("opening"),
          eggs: object.get("eggs"),
          young: object.get("young"),
          updatedAt: year.toString() + "/" + month.toString() + "/" + date.toString()
        })
      }
    }
  }

  addCavity() {
    this.navCtrl.push(NewCavityPage, {
      colony: this.colony
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CavityListPage');
  }

}
