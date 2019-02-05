import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Parse from 'parse'
import {Storage} from '@ionic/storage'
import { MartinWatchPage } from '../martin-watch/martin-watch';
/**
 * Generated class for the NewMartinWatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-martin-watch',
  templateUrl: 'new-martin-watch.html',
})
export class NewMartinWatchPage {
  
  housingtype: any
  maleage: number
  femaleage: number

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  newWatch(){
    this.storage.get('email').then((val)=>{
      const NewWatch = Parse.Object.extend("MartinWatch");
      const newWatch = new NewWatch();
      newWatch.set("Housing_Type", this.housingtype);
      newWatch.set("Male_Age", (this.maleage));
      newWatch.set("Female_Age", this.femaleage);
      newWatch.set("userid", val)
      newWatch.save()
      .then((watch) => {
        // Success
        alert('New object created successfully');
      }, error => {
        // Fails
        alert('Failed to create object with error: ' + error.message)
    }
    )
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewMartinWatchPage');
  }

}
