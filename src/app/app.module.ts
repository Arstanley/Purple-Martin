import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {SignUpPage} from '../pages/sign-up/sign-up'
import {ScoutArrivalPage} from '../pages/scout-arrival/scout-arrival'
import {LandlordhelpPage} from '../pages/landlordhelp/landlordhelp'
import {ArrivalNotePage} from '../pages/arrival-note/arrival-note'
import {VisitorHomePage} from '../pages/visitor-home/visitor-home'
import {PicturePage} from '../pages/picture/picture'
import {HomeTabsPage} from '../pages/home-tabs/home-tabs'
import { MartinWatchPage } from '../pages/martin-watch/martin-watch';
import { MenuPage } from '../pages/menu/menu';
import { NewMartinWatchPage } from '../pages/new-martin-watch/new-martin-watch';
import { MartinwatchdataPage } from '../pages/martinwatchdata/martinwatchdata';
import { MartinwatchhelppagePage } from '../pages/martinwatchhelppage/martinwatchhelppage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    ScoutArrivalPage,
    LandlordhelpPage,
    ArrivalNotePage,
    VisitorHomePage,
    PicturePage,
    HomeTabsPage,
    MartinWatchPage,
    MenuPage,
    NewMartinWatchPage,
    MartinwatchdataPage,
    MartinwatchhelppagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    ScoutArrivalPage,
    LandlordhelpPage,
    ArrivalNotePage,
    VisitorHomePage,
    PicturePage,
    HomeTabsPage,
    MartinWatchPage,
    MenuPage,
    NewMartinWatchPage,
    MartinwatchdataPage,
    MartinwatchhelppagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
