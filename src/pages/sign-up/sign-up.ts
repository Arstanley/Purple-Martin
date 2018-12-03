import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import Parse from 'parse'
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginPage } from '../login/login';
import {confirmPasswordValidator} from '../../app/validators/confirmPassword'
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  
  First_Name: any
  Last_Name: any
  Salutation: any
  Telephone: Number
  company: any
  city:any
  state: any
  country:any
  post_code:any
  username: any
  password: any
  email: string
  address: string
  newsletter: boolean
  isSigningup: boolean
  myForm: FormGroup

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController) {
      Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
      Parse.serverURL = 'https://parseapi.back4app.com/';
      this.myForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        salutation: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        telephone:['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
        company:[''],
        address:['', Validators.compose([Validators.required])],
        city:['',Validators.compose([Validators.required])],
        states:['',Validators.compose([Validators.required])],
        postCode: ['',Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
        country: ['',Validators.compose([Validators.required])],
        newsletter: ['',Validators.compose([Validators.required])],
        username:['',Validators.compose([Validators.required])],
        password:['',Validators.compose([Validators.required])],
      });
  }

  save(){
    if(this.myForm.valid){
      this.SignUp()
    }
  }


  SignUp() {
    Parse.User.signUp(this.username, this.password, {
      email: this.email, 
      address: this.address, 
      First_Name: this.First_Name, 
      Last_Name: this.Last_Name,
      Salutation: this.Salutation,
      Telephone: this.Telephone,
      company: this.company,
      city: this.city,
      state: this.state,
      post_code: this.post_code,
      country: this.country,  
      newsletter: this.newsletter
      }).then((resp) => {
        console.log('Signed up successfully', resp);

        // Clears up the form
        this.username = '';
        this.password = '';
        this.email = '';
        this.address = '';

        this.toastCtrl.create({
        message: 'Account created successfully',
        duration: 2000
        }).present();

        this.isSigningup = false;
    }, err => {
        console.log('Error signing in', err);

        this.toastCtrl.create({
        message: err.message,
        duration: 2000
        }).present();
    });
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
