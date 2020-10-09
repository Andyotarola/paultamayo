import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { OverlayComponent } from './components/overlay/overlay.component';

@NgModule({
  declarations: [OverlayComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    OverlayComponent
  ]
})
export class SharedModule { }
