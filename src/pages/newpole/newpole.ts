import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Parse from 'parse'
/**
 * Generated class for the NewpolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpole',
  templateUrl: 'newpole.html',
})
export class NewpolePage {
  name: any
  colony: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.colony = navParams.get('colony');
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }
  newPole() {
    const Pole = Parse.Object.extend("MartinWatch_Poles");
    const newPole = new Pole();
    newPole.set("colony", this.colony);
    newPole.set("name", this.name);
    newPole.set("num_cavity", '0')
    newPole.save().then(()=>{
      alert("Successfully submitted!")
      this.updateColony()
    }, (error)=>{
      alert("Error" + error)
    })
  }

  updateColony(){
    const Colony = Parse.Object.extend("MartinWatch");
    const newColony = new Colony();
    var query = new Parse.Query(newColony)
    query.get(this.colony.id).then((colony)=>{
    var num_pole = colony.get("num_pole") + 1
    colony.set("num_pole", num_pole)
    colony.save().then(()=>{
      
    }, (error) => {
      alert("Error updating" + error)
    })
  }
  )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewpolePage');
  }

}
