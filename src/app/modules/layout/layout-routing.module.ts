import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'women',
          pathMatch: 'full'
        },
        {
          path: 'women',
          component: WomenComponent
        },
        {
          path: 'men',
          component: MenComponent
        },
        {
          path: 'kids',
          component: KidsComponent
        },
        {
          path: 'details',
          component: ProductDetailsComponent
        },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
