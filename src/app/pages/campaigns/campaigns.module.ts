import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CampaignsComponent } from './campaigns.component';

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
  ],
})
export class CampaignsModule {}