import { Component } from '@angular/core';
import Parse from 'parse'
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MartinwatchhelppagePage } from '../martinwatchhelppage/martinwatchhelppage';
import { query } from '@angular/core/src/render3/instructions';
import { isUndefined } from 'ionic-angular/umd/util/util';
import { MartinDataHistoryPage } from '../martin-data-history/martin-data-history';

/**
 * Generated class for the MartinwatchdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-martinwatchdata',
  templateUrl: 'martinwatchdata.html',
})
export class MartinwatchdataPage {
  selectedWatch: any;
  date: any;
  actions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedWatch = navParams.get('watch');
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }
  
  submit(){
    const Watch = Parse.Object.extend("MartinWatch");
    const query = new Parse.Query(Watch);
    query.get(this.selectedWatch.ID)
    .then((watch)=>{
      var data = Array(watch.get('data'));
      data = data[0];
      if(watch.get('data') == undefined){
        data = [];
        data.push([this.date, this.actions])
      } else {
        data.push([this.date, this.actions])
      }
      watch.set("data", data);
      watch.save();
      alert("Success");
    }, error=>{
      alert("Failed to retrieve object:" + error.message)
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MartinwatchdataPage');
  }

  history(event){
    this.navCtrl.push(MartinDataHistoryPage, {
      watch: this.selectedWatch
    })
  }

  help(){
    this.navCtrl.push(MartinwatchhelppagePage)
  }
}
