import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';

import { AuthGuard } from 'src/app/guards/auth.guard';

import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ConfirmCodeComponent } from './pages/confirm-code/confirm-code.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserUpdateComponent } from './pages/user-update/user-update.component';
import { FormsModule } from '@angular/forms';


const router = RouterModule.forChild([
    {path: '', component: LoadingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user/forgot_password', component: ForgotPasswordComponent},
    {path: 'user/create', component: CreateUserComponent},
    {path: 'user/change_password', component: ChangePasswordComponent},
    {path: 'user/confirm_code', component: ConfirmCodeComponent},
    {path: 'user/list', 
      canActivate: [AuthGuard],
      data:{ permission: 'view_user' }, 
      component: UserListComponent
    },
    {path: 'user/update/:id',
      canActivate: [AuthGuard],
      data: { permission: 'update_user',queryParams: ['id'] }, 
      component: UserUpdateComponent
    },
    {path: 'user/detail/:id', 
      canActivate: [AuthGuard],
      data: { permission: 'view_user', queryParams: ['id'] }, 
      component: UserDetailComponent
    },
])

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    CreateUserComponent,
    ChangePasswordComponent,
    ConfirmCodeComponent,
    LoadingComponent,
    UserListComponent,
    UserDetailComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    router,
    SharedModuleModule,
    FormsModule
  ]
})
export class AuthModuleModule { }
