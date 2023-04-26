import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RouterModule } from '@angular/router';

import { CameraScannerComponent } from './pages/camera-scanner/camera-scanner.component';
import { InputScannerComponent } from './pages/input-scanner/input-scanner.component';
import { ScannerOptionsComponent } from './pages/scanner-options/scanner-options.component';
import { ScannerListComponent } from './pages/scanner-list/scanner-list.component';
import { SelectClientComponent } from './pages/select-client/select-client.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { FinishSaleComponent } from './pages/finish-sale/finish-sale.component';

const router = RouterModule.forChild([
  {path: 'scanner/options', 
      canActivate: [AuthGuard],
      data:{ permission: 'isAuthenticated' }, 
      component: ScannerOptionsComponent
  },
  {path: 'scanner/camera', 
      canActivate: [AuthGuard],
      data:{ permission: 'isAuthenticated' }, 
      component: CameraScannerComponent
  },
  {path: 'scanner/input', 
      canActivate: [AuthGuard],
      data:{ permission: 'isAuthenticated' }, 
      component: InputScannerComponent
  },
  {path: 'scanner/list', 
      canActivate: [AuthGuard],
      data:{ permission: 'isAuthenticated' }, 
      component: ScannerListComponent
  },
  {path: 'select_client', 
      canActivate: [AuthGuard],
      data:{ permission: 'isAuthenticated' }, 
      component: SelectClientComponent
  },
  {path: 'resume', 
      canActivate: [AuthGuard],
      data:{ permission: 'isAuthenticated' }, 
      component: ResumeComponent
  },
  {path: 'finish', 
      canActivate: [AuthGuard],
      data:{ permission: 'isAuthenticated' }, 
      component: FinishSaleComponent
  },
]);

@NgModule({
  declarations: [
    CameraScannerComponent,
    InputScannerComponent,
    ScannerOptionsComponent,
    ScannerListComponent,
    SelectClientComponent,
    ResumeComponent,
    FinishSaleComponent
  ],
  imports: [
    CommonModule,
    router
  ]
})
export class SalesModuleModule { }
