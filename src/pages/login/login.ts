import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import Parse from 'parse'
import { ToastController } from 'ionic-angular';
import {HomePage} from '../home/home'
import {SignUpPage} from '../sign-up/sign-up'
import {VisitorHomePage} from '../visitor-home/visitor-home'
import { HomeTabsPage } from '../home-tabs/home-tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  username: any
  password: any
  home: any = HomePage
  SignUp_Page: any = SignUpPage

  constructor(
    public toastCtrl: ToastController, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs", "OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  signUp() {
    this.navCtrl.push(SignUpPage)
  }

  visitorHome(){
      this.navCtrl.setRoot(VisitorHomePage)
  }

  signIn() {
    Parse.User.logIn(this.username, this.password).then((user) => {
        console.log('Logged in successfully', user);

        if(user.get('emailVerified')) {
            // If you app has Tabs, set root to TabsPage
            this.navCtrl.setRoot(HomeTabsPage)
        } else {
            Parse.User.logOut().then((resp) => {
                console.log('Logged out successfully', resp);
            }, err => {
                console.log('Error logging out', err);
            });

            this.alertCtrl.create({
                title: 'E-mail verification needed',
                message: 'Your e-mail address must be verified before logging in.',
                buttons: ['Ok']
            }).present();
        }
    }, err => {
        console.log('Error logging in', err);

        this.toastCtrl.create({
        message: err.message,
        duration: 2000
        }).present();
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
