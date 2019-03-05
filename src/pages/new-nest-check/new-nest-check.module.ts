import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewNestCheckPage } from './new-nest-check';

@NgModule({
  declarations: [
    NewNestCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(NewNestCheckPage),
  ],
})
export class NewNestCheckPageModule {}
