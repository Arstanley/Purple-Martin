import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditPolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-pole',
  templateUrl: 'edit-pole.html',
})
export class EditPolePage {
  pole: any
  name: "name"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pole = navParams.get("pole")
    this.name = this.pole.get("name")
  }

  updatePole() {
    this.pole.set('name', this.name).then(()=>{
      alert('Successfully Updated')
    })
    this.navCtrl.pop()
  }

  deletePole() {
    this.pole.destroy().then(()=>{
      alert('Successfully Deleted')
      this.navCtrl.pop()
    })  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPolePage');
  }

}
