import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdcastsComponent } from './prodcasts.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [ProdcastsComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProdcastsComponent,
      },
    ]),
  ],
})
export class ProdcastsModule {}