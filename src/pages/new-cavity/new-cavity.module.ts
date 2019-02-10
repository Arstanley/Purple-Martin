import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCavityPage } from './new-cavity';

@NgModule({
  declarations: [
    NewCavityPage,
  ],
  imports: [
    IonicPageModule.forChild(NewCavityPage),
  ],
})
export class NewCavityPageModule {}
