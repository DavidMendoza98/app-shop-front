import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/global/global-components/header/header.component';

import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {InputTextModule} from 'primeng/inputtext';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule } from 'primeng/tabmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FileUploadModule } from 'primeng/fileupload';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
import { SpeedDialModule } from 'primeng/speeddial';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [],
  imports: [
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    AutoCompleteModule,
    InputTextModule,
    InputTextareaModule,
    MessagesModule,
    ButtonModule,
    AvatarModule,
    ProgressBarModule,
    ToastModule,
    CarouselModule,
    TabMenuModule,
    BreadcrumbModule,
    FileUploadModule,
    SidebarModule,
    ConfirmPopupModule,
    TableModule,
    SpeedDialModule,
    RadioButtonModule,
    PasswordModule,
    MultiSelectModule,
    KeyFilterModule,
    InputNumberModule,
    HeaderComponent

  ],
  exports:[
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    AutoCompleteModule,
    InputTextModule,
    InputTextareaModule,
    MessagesModule,
    ButtonModule,
    AvatarModule,
    ProgressBarModule,
    ToastModule,
    CarouselModule,
    TabMenuModule,
    BreadcrumbModule,
    FileUploadModule,
    SidebarModule,
    ConfirmPopupModule,
    TableModule,
    SpeedDialModule,
    RadioButtonModule,
    PasswordModule,
    MultiSelectModule,
    KeyFilterModule,
    InputNumberModule,
    HeaderComponent
  ]
})
export class SharedModuleModule { }
