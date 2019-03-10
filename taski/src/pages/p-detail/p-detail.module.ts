import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PDetailPage } from './p-detail';

@NgModule({
  declarations: [
    PDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PDetailPage),
  ],
})
export class PDetailPageModule {}
