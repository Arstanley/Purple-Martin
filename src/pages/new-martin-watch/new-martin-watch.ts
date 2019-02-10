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
  
  name: any
  public: any
  address: any
  city: any
  state: any
  post_code: number
  country: any
  latitude: number
  longitude: number

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  newColony(){
    this.storage.get('email').then((val)=>{
      const NewWatch = Parse.Object.extend("MartinWatch");
      const newWatch = new NewWatch();
      newWatch.set("Name", this.name);
      newWatch.set("Publicity", (this.public));
      newWatch.set("Address", this.address);
      newWatch.set("City", this.city);
      newWatch.set("State", this.state);
      newWatch.set("Post_Code", this.post_code);
      newWatch.set("Country", this.country);
      newWatch.set("Longitude", this.longitude);
      newWatch.set("Latitude", this.latitude);
      newWatch.set("userid", val);
      newWatch.set("num_pole", 0);
      newWatch.set("num_cavaties", 0);
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
