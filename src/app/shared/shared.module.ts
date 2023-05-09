import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';







const AngularMaterialComps = [
  MatCardModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatDialogModule

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialComps
  ],
  exports: [
    AngularMaterialComps
  ]
})
export class SharedModule { }
