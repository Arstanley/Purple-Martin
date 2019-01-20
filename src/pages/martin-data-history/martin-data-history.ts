import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Parse from 'parse'

/**
 * Generated class for the MartinDataHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-martin-data-history',
  templateUrl: 'martin-data-history.html',
})
export class MartinDataHistoryPage {
  selectedWatch: any
  entries: Array<{date: string, data: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedWatch = navParams.get('watch');
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.constructData();
  }

  constructData() {
    const Watch = Parse.Object.extend("MartinWatch");
    const query = new Parse.Query(Watch);
    query.get(this.selectedWatch.ID)
    .then((watch)=>{
      var data = Array(watch.get('data'));
      data = data[0];
      this.entries = [];
      if(data == undefined) {
        this.entries.push({
          date: "No data available",
          data: "No data available"
        })
      } else {
      for(let i = data.length - 1; i >= 0; --i) {
        this.entries.push({
          date: data[i][0], 
          data: data[i][1]
        });
       }
      }
    }, error=>{
      alert("Failed to retrieve object:" + error.message)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MartinDataHistoryPage');
  }

}
