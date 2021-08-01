import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [BlogsComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogsComponent,
      },
    ]),
  ],
})
export class BlogsModule {}