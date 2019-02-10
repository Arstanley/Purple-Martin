import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Parse from 'parse'
/**
 * Generated class for the NewCavityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-cavity',
  templateUrl: 'new-cavity.html',
})
export class NewCavityPage {
  colony: any
  num_pole: any
  num_cavity: any
  housing_type: any
  opening_type: any
  notes: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.colony = navParams.get('colony');
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

newCavity() {
  const Cavity = Parse.Object.extend("MartinWatch_Cavities");
  const newCavity = new Cavity();
  newCavity.set("colony", this.colony);
  newCavity.set("num_pole", this.num_pole);
  newCavity.set("num_cavity", this.num_cavity);
  newCavity.set("housing_type", this.housing_type);
  newCavity.set("opening", this.opening_type);
  newCavity.set("eggs", 'N/A');
  newCavity.set("young", 'N/A');
  newCavity.set("notes", this.notes);
  newCavity.save().then(()=>{
    alert("Successfully submitted!")
  }, (error)=>{
    alert("Error" + error)
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCavityPage');
  }

}
