import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditNestCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-nest-check',
  templateUrl: 'edit-nest-check.html',
})
export class EditNestCheckPage {
  check: any
  date: any
  species: any
  male_age: any
  female_age: any
  nest_stage: any
  young: any
  egg: any
  action: any
  notes: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.check = this.navParams.get("check")
  }

  ionViewDidLoad() {
    this.date = this.check.get("date")
    this.species = this.check.get("species")
    this.male_age = this.check.get("male_age")
    this.female_age = this.check.get("female_age")
    this.nest_stage = this.check.get("nest_stage")
    this.young = this.check.get("young")
    this.egg = this.check.get("egg")
    this.action = this.check.get("action")
    this.notes = this.check.get("notes")
    console.log('ionViewDidLoad EditNestCheckPage');
  }

  updateCheck() {
    this.check.set("date", this.date)
    this.check.set("male_age", this.male_age);
    this.check.set("female_age", this.female_age);
    this.check.set("egg", Number(this.egg));
    this.check.set("young", Number(this.young));
    this.check.set("notes", this.notes);
    this.check.set("nest_stage", this.nest_stage);
    this.check.set("action", this.action);
    this.check.set("species", this.species);
    this.check.save().then(()=>{
      alert("Successfully submitted!")
      this.navCtrl.pop()
    }, (error)=>{
      alert("Error" + error)
    })
  }

  deleteCheck() {
    this.check.destroy().then(()=>{
      alert("Successfully deleted")
      this.navCtrl.pop()
    })
  }

}
