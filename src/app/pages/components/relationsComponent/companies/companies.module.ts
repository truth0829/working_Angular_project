import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CRUDTableModule } from '../../../../_metronic/shared/crud-table';

@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CompaniesComponent,
      },
    ]),
    CRUDTableModule,
  ],
})
export class CompaniesModule {}