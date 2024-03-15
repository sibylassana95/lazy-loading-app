import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },

  {
    path: '',
    redirectTo: 'homes',
    pathMatch: 'full',
  },
  {
    path: 'homes',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
