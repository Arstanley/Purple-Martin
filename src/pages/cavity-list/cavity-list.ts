import { Component, Query } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import Parse from 'parse'
import { NewCavityPage } from '../new-cavity/new-cavity';
import { query } from '@angular/core/src/animation/dsl';
import { NestcheckHistoryPage } from '../nestcheck-history/nestcheck-history';
import { NullTemplateVisitor } from '@angular/compiler';
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
  pole: any;
  pole_name: any;
  colony_name: any;
  cav_num: any;
  cavities: Array<{Opening: string, Type: string, updatedAt:string, order: number, ID: string}>;
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.pole = this.navParams.get('pole');
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.pole_name = this.pole.get("name");
    this.colony_name = this.pole.get("colony").get("Name");
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
    const Cavity = Parse.Object.extend("MartinWatch_Cavities");
    const q = new Parse.Query(Cavity);
    var MartinWatch_Poles = Parse.Object.extend('MartinWatch_Poles')
    q.equalTo("Pole", new MartinWatch_Poles({id: this.pole.id}));
    const results = await q.find();
    this.cavities = [];
    if(results.length == 0) {
      this.cavities.push({
        Opening: "No Data Available; Please add a cavity.",
        Type: "No Data Available; Please add a cavity.",
        updatedAt: "No Data Available; Please add a cavity.",
        order: 0,
        ID: null
      })
    } else {
      for(let i = 0; i < results.length; i++) {
        var object = results[i];
        var d = new Date(object.updatedAt)
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        this.cavities.push({
          Opening: object.get('opening'),
          Type: object.get('housing_type'),
          updatedAt: year.toString() + "/" + month.toString() + "/" + date.toString(),
          order: i + 1,
          ID: object.id
        })
      }
    }
  }

  addCavity() {
    this.navCtrl.push(NewCavityPage, {
      pole: this.pole
    })
  }

  selected(event, cavity) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    const Cavity = Parse.Object.extend('MartinWatch_Cavities');
    const query = new Parse.Query(Cavity);
    alert(query)
    query.get(cavity.ID).then((cav) => {
      this.navCtrl.push(NestcheckHistoryPage, {
        _cavity: cav,
        cav_num: cavity.order
      })
    }, (error) => {
      alert(error + "Cannot retrieve object");
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CavityListPage');
  }
  ionViewWillEnter(){
    this.constructData();
  }

}
