import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
import { MartinDataHistoryPage } from '../pages/martin-data-history/martin-data-history';
import {IonicStorageModule} from '@ionic/storage'
import { UnderdevelopmentpagePage } from '../pages/underdevelopmentpage/underdevelopmentpage';
import {CavityListPage} from '../pages/cavity-list/cavity-list'
import {NewCavityPage} from '../pages/new-cavity/new-cavity'
import { NewpolePage } from '../pages/newpole/newpole';
import { PolePage } from '../pages/pole/pole';
import { NestcheckHistoryPage } from '../pages/nestcheck-history/nestcheck-history';
import { NewNestCheckPage } from '../pages/new-nest-check/new-nest-check';
import { EditMartinWatchPage } from '../pages/edit-martin-watch/edit-martin-watch';
import { EditPolePage } from '../pages/edit-pole/edit-pole';
import { EditCavityPage } from '../pages/edit-cavity/edit-cavity';
import { EditNestCheckPage } from '../pages/edit-nest-check/edit-nest-check';
import { ProjectPage } from '../pages/project/project';
import { MartinRoostPage } from '../pages/new-martin-roost/martin-roost';
import { MartinRoostListPage } from '../pages/martin-roost-list/martin-roost-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    MartinwatchhelppagePage,
    MartinDataHistoryPage,
    UnderdevelopmentpagePage,
    CavityListPage,
    NewCavityPage,
    NewpolePage,
    PolePage,
    NestcheckHistoryPage,
    NewNestCheckPage,
    EditMartinWatchPage,
    EditPolePage,
    EditCavityPage,
    EditNestCheckPage,
    ProjectPage,
    MartinRoostPage,
    MartinRoostListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
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
    MartinwatchhelppagePage,
    MartinDataHistoryPage,
    UnderdevelopmentpagePage,
    CavityListPage,
    NewCavityPage,
    NewpolePage,
    PolePage,
    NestcheckHistoryPage,
    NewNestCheckPage,
    EditMartinWatchPage,
    EditPolePage,
    EditCavityPage,
    EditNestCheckPage,
    ProjectPage,
    MartinRoostPage,
    MartinRoostListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
