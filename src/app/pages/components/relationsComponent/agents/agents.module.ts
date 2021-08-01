import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgentsComponent } from './agents.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CRUDTableModule } from '../../../../_metronic/shared/crud-table';

@NgModule({
  declarations: [AgentsComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AgentsComponent,
      },
    ]),
    CRUDTableModule,
  ],
})
export class AgentsModule {}