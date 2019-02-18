import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import Parse from 'parse';
import { MenuController, Nav } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import {ScoutArrivalPage} from '../pages/scout-arrival/scout-arrival'
import {ScoutLandlordPage} from '../pages/scout-landlord/scout-landlord'
import {LandlordhelpPage} from '../pages/landlordhelp/landlordhelp'
import {ArrivalNotePage} from '../pages/arrival-note/arrival-note'
import {VisitorHomePage} from '../pages/visitor-home/visitor-home'
import {PicturePage} from '../pages/picture/picture'
import {HomeTabsPage} from '../pages/home-tabs/home-tabs'
import {MartinWatchPage} from '../pages/martin-watch/martin-watch'
import { MenuPage } from '../pages/menu/menu';
import {NewMartinWatchPage } from '../pages/new-martin-watch/new-martin-watch'
import {MartinwatchdataPage} from '../pages/martinwatchdata/martinwatchdata'
import {MartinwatchhelppagePage} from '../pages/martinwatchhelppage/martinwatchhelppage'
import {MartinDataHistoryPage} from '../pages/martin-data-history/martin-data-history'
import {UnderdevelopmentpagePage} from '../pages/underdevelopmentpage/underdevelopmentpage'
import {CavityListPage} from '../pages/cavity-list/cavity-list'
import {NewCavityPage} from '../pages/new-cavity/new-cavity'
import {PolePage} from '../pages/pole/pole'
import {NewpolePage} from '../pages/newpole/newpole'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = MenuPage;

  constructor(public menu: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    Parse.initialize("k49m29iKFs68BmiiMtvIF5u7h1CJsZC6TivIWvVs","OOCasTyRmDC4hYfDzc9lzrIa3o2eSFphRM1c5vhh")
    Parse.serveURL = 'https://parseapi.back4app.com/';
    
  }
}

