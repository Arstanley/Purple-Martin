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
  pole: any
  opening_type: any
  housing_type: any
  notes: any
  name: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pole = navParams.get('pole')
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  newCavity() {
    const Cavity = Parse.Object.extend("MartinWatch_Cavities");
    const newCavity = new Cavity();
    newCavity.set("Pole", this.pole);
    newCavity.set("housing_type", this.housing_type);
    newCavity.set("opening", this.opening_type);
    newCavity.set("eggs", 'N/A');
    newCavity.set("young", 'N/A');
    newCavity.set("name", this.name);
    newCavity.set("notes", this.notes);
    newCavity.save().then(()=>{
      alert("Successfully submitted!")
      this.updatePole()
    }, (error)=>{
      alert("Error" + error)
    })
  }

  updatePole() {
    const Pole = Parse.Object.extend("MartinWatch_Poles");
    const newPole = new Pole();
    var query = new Parse.Query(Pole)
    query.get(this.pole.id).then((pole)=>{
      var num_cav = Number(pole.get("num_cavity")) + 1
      pole.set("num_cavity", String(num_cav))
      pole.get("colony").set("num_cavaties", pole.get("colony").get("num_cavaties")+1)
      pole.save().then(()=>{
        
      }, (error) => {
        alert("Error updating" + error)
      })
    }
    )
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad NewCavityPage');
  }

}
