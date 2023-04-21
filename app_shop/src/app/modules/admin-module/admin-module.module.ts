import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RouterModule } from '@angular/router';

import { AdminMenuComponent } from './pages/admin-menu/admin-menu.component';
import { AdminAccountComponent } from './pages/admin-account/admin-account.component';
import { AdminConfigComponent } from './pages/admin-config/admin-config.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientsDetailComponent } from './pages/clients-detail/clients-detail.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { OrderCheckoutComponent } from './pages/order-checkout/order-checkout.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { CreditDetailComponent } from './pages/credit-detail/credit-detail.component';

const router = RouterModule.forChild([
  {path: '', 
      canActivate: [AuthGuard],
      data:{ permission: 'isAdmin' }, 
      component: AdminMenuComponent
  },
  {path: 'account', 
      canActivate: [AuthGuard],
      data:{ permission: 'isAdmin' }, 
      component: AdminAccountComponent
  },
  {path: 'config', 
      canActivate: [AuthGuard],
      data:{ permission: 'isAdmin' }, 
      component: AdminConfigComponent
  },
  {path: 'clients', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_cliente' }, 
      component: ClientsComponent
  },
  {path: 'clients/detail', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_cliente' ,queryParams: ['id']}, 
      component: ClientsDetailComponent
  },
  {path: 'orders', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_order' }, 
      component: OrdersComponent
  },
  {path: 'orders/detail', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_order' ,queryParams: ['id']}, 
      component: OrderDetailComponent
  },
  {path: 'orders/checkout', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_order_checkout',queryParams: ['id'] }, 
      component: OrderCheckoutComponent
  },
  {path: 'credits', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_credito' }, 
      component: CreditsComponent
  },
  {path: 'credits/detail', 
      canActivate: [AuthGuard],
      data:{ permission: 'isAdmin' ,queryParams: ['id']}, 
      component: CreditDetailComponent
  },
]);

@NgModule({
  declarations: [
    AdminMenuComponent,
    AdminAccountComponent,
    AdminConfigComponent,
    ClientsComponent,
    ClientsDetailComponent,
    OrdersComponent,
    OrderDetailComponent,
    OrderCheckoutComponent,
    CreditsComponent,
    CreditDetailComponent
  ],
  imports: [
    CommonModule,
    router
  ]
})
export class AdminModuleModule { }
