import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorHomePage } from './visitor-home';

@NgModule({
  declarations: [
    VisitorHomePage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorHomePage),
  ],
})
export class VisitorHomePageModule {}
