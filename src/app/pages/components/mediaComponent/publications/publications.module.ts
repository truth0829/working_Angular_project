import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicationsComponent } from './publications.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CRUDTableModule } from '../../../../_metronic/shared/crud-table';

@NgModule({
  declarations: [PublicationsComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PublicationsComponent,
      },
    ]),
    CRUDTableModule,
  ],
})
export class PublicationsModule {}