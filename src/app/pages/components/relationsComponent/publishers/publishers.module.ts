import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublishersComponent } from './publishers.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CRUDTableModule } from '../../../../_metronic/shared/crud-table';

@NgModule({
  declarations: [PublishersComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PublishersComponent,
      },
    ]),
    CRUDTableModule,
  ],
})
export class PublishersModule {}