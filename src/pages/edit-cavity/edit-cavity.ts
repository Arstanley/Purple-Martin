import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditCavityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-cavity',
  templateUrl: 'edit-cavity.html',
})
export class EditCavityPage {
  cavity: any
  housing_type: any
  notes: any
  opening_type: any
  name: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cavity = navParams.get("cavity")
  }

  ionViewDidLoad() {
    this.housing_type = this.cavity.get("housing_type")
    this.opening_type = this.cavity.get("opening")
    this.notes = this.cavity.get("notes")
    this.name = this.cavity.get("name")
    console.log('ionViewDidLoad EditCavityPage');
  }

  updateCavity() {
    this.cavity.set("housing_type", this.housing_type)
    this.cavity.set("name", this.name)
    this.cavity.set("notes", this.notes)
    this.cavity.set("opening", this.opening_type)
    this.cavity.save().then(()=>{
      alert('Successfully Saved')
      this.navCtrl.pop()
    })
  }

  deleteCavity() {
    this.cavity.destroy().then(()=>{
      alert('Successfully Deleted')
      this.navCtrl.pop()
    })
  }
}
