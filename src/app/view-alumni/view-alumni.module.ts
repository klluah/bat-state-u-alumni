import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewAlumniPageRoutingModule } from './view-alumni-routing.module';
import { ViewAlumniPage } from './view-alumni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAlumniPageRoutingModule
  ],
  declarations: [ViewAlumniPage]
})
export class ViewAlumniPageModule {}
