import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RouterModule } from '@angular/router';

import { InventoryOptionsComponent } from './pages/inventory-options/inventory-options.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ExpireProductComponent } from './pages/expire-product/expire-product.component';
import { LowInventoryProductComponent } from './pages/low-inventory-product/low-inventory-product.component';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { LotsComponent } from './pages/lots/lots.component';
import { LotDetailComponent } from './pages/lot-detail/lot-detail.component';
import { CreateLotComponent } from './pages/create-lot/create-lot.component';
import { UpdateLotComponent } from './pages/update-lot/update-lot.component';

const router = RouterModule.forChild([
  {path: '', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_inventario' }, 
      component: InventoryOptionsComponent
  },
  {path: 'products', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_producto' }, 
      component: ProductsComponent
  },
  {path: 'product/detail', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_producto' ,queryParams: ['id']}, 
      component: ProductsComponent
  },
  {path: 'product/create', 
      canActivate: [AuthGuard],
      data:{ permission: 'add_producto' ,queryParams: ['id']}, 
      component: CreateProductComponent
  },
  {path: 'product/update', 
      canActivate: [AuthGuard],
      data:{ permission: 'change_producto' ,queryParams: ['id']}, 
      component: UpdateProductComponent
  },
  {path: 'products/expired', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_producto'}, 
      component: ExpireProductComponent
  },
  {path: 'products/low_inventory', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_producto'}, 
      component: LowInventoryProductComponent
  },
  {path: 'categories', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_categoria'}, 
      component: AllCategoriesComponent
  },
  {path: 'lots', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_lote'}, 
      component: LotsComponent
  },
  {path: 'lot/detail', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_lote',queryParams: ['id']}, 
      component: LotDetailComponent
  },
  {path: 'lot/create', 
      canActivate: [AuthGuard],
      data:{ permission: 'add_lote'}, 
      component: CreateLotComponent
  },
  {path: 'lot/update', 
      canActivate: [AuthGuard],
      data:{ permission: 'change_lote',queryParams: ['id']}, 
      component: UpdateLotComponent
  }
]);

@NgModule({
  declarations: [
    InventoryOptionsComponent,
    ProductsComponent,
    ProductDetailComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ExpireProductComponent,
    LowInventoryProductComponent,
    AllCategoriesComponent,
    LotsComponent,
    LotDetailComponent,
    CreateLotComponent,
    UpdateLotComponent
  ],
  imports: [
    CommonModule,
    router
  ]
})
export class InventoryModuleModule { }
