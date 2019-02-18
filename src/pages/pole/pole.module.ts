import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PolePage } from './pole';

@NgModule({
  declarations: [
    PolePage,
  ],
  imports: [
    IonicPageModule.forChild(PolePage),
  ],
})
export class PolePageModule {}
