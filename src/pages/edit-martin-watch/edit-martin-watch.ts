import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import Parse from 'parse'

/**
 * Generated class for the EditMartinWatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-martin-watch',
  templateUrl: 'edit-martin-watch.html',
})
export class EditMartinWatchPage {
  colony: any
  name: "Name"
  publicity = "Publicity"
  address = "Address"
  city = "City"
  state = "State"
  post_code = "Post Code"
  country = "Country"
  latitude = "Latitude"
  longitude = "Longitude"
  public: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    const loading = this.loadingCtrl.create({
      spinner: "dots"
    })
    loading.present()
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.colony = navParams.get("colony")
    this.name = this.colony.get("Name")
    this.publicity = this.colony.get("Publicity")
    this.longitude = this.colony.get("Longitude")
    this.latitude = this.colony.get("Latitude")
    this.country = this.colony.get("Country")
    this.post_code = this.colony.get("Post_Code")
    this.state = this.colony.get("State")
    this.address = this.colony.get("Address")
    this.city = this.colony.get("City")
    loading.dismiss()
  }

  updateColony(){
      this.colony.set("Name", this.name);
      this.colony.set("Publicity", (this.public));
      this.colony.set("Address", this.address);
      this.colony.set("City", this.city);
      this.colony.set("State", this.state);
      this.colony.set("Post_Code", this.post_code);
      this.colony.set("Country", this.country);
      this.colony.set("Longitude", this.longitude);
      this.colony.set("Latitude", this.latitude);
      this.colony.save()
      .then(() => {
        // Success
        alert('updated successfully');
        this.navCtrl.pop()
      }, error => {
        // Fails
        alert('Failed to create object with error: ' + error.message)
      }
      )
    }
  
  deleteColony(){
    this.colony.destroy().then(()=>{
      alert('successfully deleted')
      this.navCtrl.pop()
    })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditMartinWatchPage');
    this.public = this.publicity
  }

}
