import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'auth'},
  {path: 'auth', loadChildren: () => import('./modules/auth-module/auth-module.module').then(t => t.AuthModuleModule)},
  {path: 'admin', canActivate: [AuthGuard],loadChildren: () => import('./modules/admin-module/admin-module.module').then(t => t.AdminModuleModule)},
  {path: 'inventory',canActivate: [AuthGuard], loadChildren: () => import('./modules/inventory-module/inventory-module.module').then(t => t.InventoryModuleModule)},
  {path: 'sales',canActivate: [AuthGuard], loadChildren: () => import('./modules/sales-module/sales-module.module').then(t => t.SalesModuleModule)},
  {path: 'shop',canActivate: [AuthGuard], loadChildren: () => import('./modules/shop-module/shop-module.module').then(t => t.ShopModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
