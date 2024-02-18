import { Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

export const routes: Routes = [
    {
        path: "admin", component:LayoutComponent, 
    children : [
    {path : "", component : DashboardComponent},
    {path : "customers", loadChildren : ()=> import("./admin/components/customers/customers.module").then
    (module =>module.CustomersModule)},
    {path : "products", loadChildren : ()=> import("./admin/components/products/products.module").then
    (module =>module.ProductsModule)},
    {path : "orders", loadChildren : ()=> import("./admin/components/orders/orders.module").then
    (module =>module.OrdersModule)}
    ]
    },
    {path: "", component : HomeComponent},
    {path: "carts", loadChildren : ()=> import("./ui/components/carts/carts.module").then(module =>module.CartsModule)},
    {path: "products", loadChildren : ()=> import("./ui/components/products/products.module").then(module =>module.ProductsModule)},
];
