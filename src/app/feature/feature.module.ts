import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureComponent],
  exports: [FeatureComponent],
  providers: []
})
export class FeatureModule { }
