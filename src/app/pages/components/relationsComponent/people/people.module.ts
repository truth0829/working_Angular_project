import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PeopleComponent } from './people.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CRUDTableModule } from '../../../../_metronic/shared/crud-table';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PeopleComponent,
      },
    ]),
    CRUDTableModule,
  ],
})
export class PeopleModule {}