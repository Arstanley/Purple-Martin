import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import Parse from 'parse'
/**
 * Generated class for the NewNestCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-nest-check',
  templateUrl: 'new-nest-check.html',
})
export class NewNestCheckPage {
  cavity: any
  date: any
  species: any
  male_age: any
  female_age: any
  nest_stage: any
  young: any
  egg: any
  action: any
  notes: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.cavity = navParams.get("_cavity")
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  newCheck() {
    if(this.date == undefined || this.action == undefined || 
    this.species == undefined) {
      const alertCT = this.alertCtrl.create({
        title: "Warning",
        subTitle: "please fill in all fields",
        buttons: ["OK"]
      });
      alertCT.present();
    } else {
      const nestCheck = Parse.Object.extend("Nest_Checks");
      const newCheck = new nestCheck();
      newCheck.set("date", this.date)
      newCheck.set("male_age", this.male_age);
      newCheck.set("female_age", this.female_age);
      newCheck.set("egg", Number(this.egg));
      newCheck.set("young", Number(this.young));
      newCheck.set("notes", this.notes);
      newCheck.set("nest_stage", this.nest_stage);
      newCheck.set("action", this.action);
      newCheck.set("species", this.species);
      newCheck.set("cavity", this.cavity);
      newCheck.save().then(()=>{
        alert("Successfully submitted!")
        this.navCtrl.pop()
      }, (error)=>{
        alert("Error" + error)
      })
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewNestCheckPage');
  }

}
