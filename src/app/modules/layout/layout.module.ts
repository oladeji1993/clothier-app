import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProductDetailsComponent } from './women/product-details/product-details.component';
import { Angular4PaystackModule } from 'angular4-paystack';




@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatMenuModule,
    Angular4PaystackModule.forRoot('pk_test_3d899974e50aca79814d71c208ef76ef60bc9966'),
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
