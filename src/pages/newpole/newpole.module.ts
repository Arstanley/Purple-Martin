import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewpolePage } from './newpole';

@NgModule({
  declarations: [
    NewpolePage,
  ],
  imports: [
    IonicPageModule.forChild(NewpolePage),
  ],
})
export class NewpolePageModule {}
