import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteDirective } from '../../../directives/admin/delete.directive';
@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path : "", component : ProductsComponent
    }]),
    RouterLink,
    HttpClientModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    ListComponent,
    CreateComponent,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ProductsModule { }
