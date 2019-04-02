import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ScoutLandlordPage} from '../scout-landlord/scout-landlord'
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Parse} from 'parse'
import {LandlordhelpPage} from '../landlordhelp/landlordhelp'
import {ArrivalNotePage} from '../arrival-note/arrival-note'

/**
 * Generated class for the ScoutArrivalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-scout-arrival',
  templateUrl: 'scout-arrival.html',
})
export class ScoutArrivalPage {
  @ViewChild('formSlider') formSlider: any;

  slideColonyForm: FormGroup;
  slideLandlordForm: FormGroup;
  slideScoutReportForm: FormGroup;
  slideSubadultForm: FormGroup;
  slideAdditionalForm: FormGroup;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
      Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
      Parse.serverURL = 'https://parseapi.back4app.com/';
      this.slideColonyForm = formBuilder.group({
        address:[''],
        city: [''],
        state: [''],
        postCode:[''],
        country:[''],

        landlordStatus: [''],
        yearsActive:[''],
        martinPairs: [''],

        firstObserved: [''],
        firstSubadult: [''],

        privacyOptions: ['']

      })
  }

  next(){
    this.formSlider.slideNext();
  }

  prev(){
    this.formSlider.slidePrev();
  }

  landlordHelp(){
    this.navCtrl.push(LandlordhelpPage);
  }

  arrivalNote(){
    this.navCtrl.push(ArrivalNotePage);
  }

  save(){
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoutArrivalPage');
  }

}
