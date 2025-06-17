import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'donation-completed',
    loadChildren: () =>
      import('./pages/donation-completed/donation-completed.module').then(
        (m) => m.DonationCompletedModule
      ),
  },
  {
    path: 'donation-cancel',
    loadChildren: () =>
      import('./pages/donation-cancel/donation-cancel.module').then(
        (m) => m.DonationCancelModule
      ),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: 'art-gallery',
    loadChildren: () =>
      import('./pages/art-gallery/art-gallery.module').then(
        (m) => m.ArtGalleryModule
      ),
  },
  {
    path: 'sponsors',
    loadChildren: () =>
      import('./pages/sponsors/sponsors.module').then((m) => m.SponsorsModule),
  },
  { path: 'web-comic', loadChildren: () => import('./pages/web-comic/web-comic.module').then(m => m.WebComicModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
