import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfilesComponent } from './profiles.component';

@NgModule({
  declarations: [ProfilesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfilesComponent,
      },
    ]),
  ],
})
export class ProfilesModule {}