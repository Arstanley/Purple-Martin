import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CavityListPage } from './cavity-list';

@NgModule({
  declarations: [
    CavityListPage,
  ],
  imports: [
    IonicPageModule.forChild(CavityListPage),
  ],
})
export class CavityListPageModule {}
