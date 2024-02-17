import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    CustomersModule,
    OrdersModule,
    DashboardModule,
    RouterLink,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [{provide: "baseUrl", useValue: "https://localhost:44362/api", multi: true}]
})
export class ComponentsModule { }
