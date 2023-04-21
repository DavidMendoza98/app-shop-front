import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryMenuComponent } from './pages/category-menu/category-menu.component';
import { ProductsByCategoryComponent } from './pages/products-by-category/products-by-category.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const router = RouterModule.forChild([
  { 
    path: '', 
    component: CategoryMenuComponent, 
    canActivate: [AuthGuard], 
    data: { permission: 'isAuthenticated' }
  },
  { 
    path: 'products', 
    component: ProductsByCategoryComponent, 
    canActivate: [AuthGuard], 
    data: { permission: 'isAuthenticated' }
  },
  { 
    path: 'checkout', 
    component: CheckoutComponent, 
    canActivate: [AuthGuard], 
    data: { permission: 'isAuthenticated', queryParams: ['id'] }
  },
  { 
    path: 'order', 
    component: OrderStatusComponent, 
    canActivate: [AuthGuard], 
    data: { permission: 'isAuthenticated', queryParams: ['id'] }
  },
  { 
    path: 'history', 
    component: OrderHistoryComponent, 
    canActivate: [AuthGuard], 
    data: { permission: 'isAuthenticated', queryParams: ['id'] }
  },
]);

@NgModule({
  declarations: [
    CategoryMenuComponent,
    ProductsByCategoryComponent,
    ProductsDetailComponent,
    CheckoutComponent,
    OrderHistoryComponent,
    OrderStatusComponent
  ],
  imports: [
    CommonModule,
    router
  ]
})
export class ShopModuleModule { }
