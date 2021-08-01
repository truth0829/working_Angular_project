import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CampaignsComponent } from './campaigns.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralModule } from '../../_metronic/partials/content/general/general.module';

@NgModule({
  declarations: [CampaignsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CampaignsComponent,
      },
    ]),
    GeneralModule,
    NgbModule,
  ],
})
export class CampaignsModule {}