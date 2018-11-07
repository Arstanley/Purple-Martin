import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArrivalNotePage } from './arrival-note';

@NgModule({
  declarations: [
    ArrivalNotePage,
  ],
  imports: [
    IonicPageModule.forChild(ArrivalNotePage),
  ],
})
export class ArrivalNotePageModule {}
