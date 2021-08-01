import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RadioComponent } from './radio.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [RadioComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RadioComponent,
      },
    ]),
  ],
})
export class RadioModule {}