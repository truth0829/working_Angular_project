import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'profiles',
        loadChildren: () =>
          import('./profiles/profiles.module').then((m) => m.ProfilesModule),
      },
      {
        path: 'campaigns',
        loadChildren: () =>
          import('./campaigns/campaigns.module').then((m) => m.CampaignsModule),
      },
      {
        path: 'media',
        redirectTo: 'media/publications',
        pathMatch: 'full',
      },
      {
        path: 'media/publications',
        loadChildren: () =>
          import('./components/mediaComponent/publications/publications.module').then(m => m.PublicationsModule),
      },
      {
        path: 'media/blogs',
        loadChildren: () =>
          import('./components/mediaComponent/blogs/blogs.module').then(m => m.BlogsModule),
      },
      {
        path: 'media/podcasts',
        loadChildren: () =>
          import('./components/mediaComponent/prodcasts/prodcasts.module').then(m => m.ProdcastsModule),
      },
      {
        path: 'media/radio',
        loadChildren: () =>
          import('./components/mediaComponent/radio/radio.module').then(m => m.RadioModule),
      },
      {
        path: 'relations',
        redirectTo: '/relations/publishers',
        pathMatch: 'full',
      },
      {
        path: 'relations/publishers',
        loadChildren: () =>
          import('./components/relationsComponent/publishers/publishers.module').then(m => m.PublishersModule),
      },
      {
        path: 'relations/agents',
        loadChildren: () =>
          import('./components/relationsComponent/agents/agents.module').then(m => m.AgentsModule),
      },
      {
        path: 'relations/companies',
        loadChildren: () =>
          import('./components/relationsComponent/companies/companies.module').then(m => m.CompaniesModule),
      },
      {
        path: 'relations/people',
        loadChildren: () =>
          import('./components/relationsComponent/people/people.module').then(m => m.PeopleModule),
      },
      {
        path: 'relations/freelancers',
        loadChildren: () =>
          import('./components/relationsComponent/freelancers/freelancers.module').then(m => m.FreelancersModule),
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
