import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewMartinWatchPage } from '../new-martin-watch/new-martin-watch';
import Parse from 'parse'
import DateFormat from 'parse'
import SimpleDateFormat from 'parse'
import { MartinwatchdataPage } from '../martinwatchdata/martinwatchdata';
/**
 * Generated class for the MartinWatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-martin-watch',
  templateUrl: 'martin-watch.html',
})
export class MartinWatchPage {
  watches: Array<{ID: string, housingtype: string, maleAge: string, femaleAge: string, updatedAt: string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parse();
  }

  async parse(){
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    const Watch = Parse.Object.extend("MartinWatch");
    const query = new Parse.Query(Watch);
    query.exists("Housing_Type")
    const results = await query.find();
    this.watches = []
    for (let i = 0; i < results.length; i++){
      var object = results[i];
      var d = new Date(object.updatedAt)
      var date = d.getDate();
      var month = d.getMonth();
      var year = d.getFullYear();
      this.watches.push(
        {
          ID: object.id,
          housingtype: object.get("Housing_Type"),
          maleAge: object.get("Male_Age"),
          femaleAge: object.get("Female_Age"),
          updatedAt: year.toString() + "/" + month.toString() + "/" + date.toString()
        }
      );
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MartinWatchPage');
  }

  addField(){
    this.navCtrl.push(NewMartinWatchPage)
    this.parse(); 
  }

  selected(event, watch){
    this.navCtrl.push(MartinwatchdataPage, {
      watch: watch
    })
  }
}
