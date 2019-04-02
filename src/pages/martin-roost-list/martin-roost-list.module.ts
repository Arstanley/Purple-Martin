import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MartinRoostListPage } from './martin-roost-list';

@NgModule({
  declarations: [
    MartinRoostListPage,
  ],
  imports: [
    IonicPageModule.forChild(MartinRoostListPage),
  ],
})
export class MartinRoostListPageModule {}
