import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Product } from '../../../contracts/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService){ 
    super(spinner)
  }

  ngOnInit(): void {
      this.showSpinner(SpinnerType.BallAtom);
      
      this.httpClientService.get<Product[]>({
        controller: "products"
      }).subscribe(data =>console.log(data));

      // this.httpClientService.post({
      //   controller: "products"
      // }, {
      //   name:"Kalem",
      //   stock: 100,
      //   price: 15
      // }).subscribe();

      // this.httpClientService.post({
      //   controller: "products"
      // }, {
      //   name:"Kağıt",
      //   stock: 1000,
      //   price: 5
      // }).subscribe();

      // this.httpClientService.post({
      //   controller: "products"
      // }, {
      //   name:"Silgi",
      //   stock: 50,
      //   price: 2.50
      // }).subscribe();

      // this.httpClientService.post({
      //   controller: "products"
      // }, {
      //   name:"Defter",
      //   stock: 100,
      //   price: 12
      // }).subscribe();

      // this.httpClientService.put({
      //   controller: "products"},
      //   {
      //     id: "669faf1f-4f97-48f0-b85c-4ea25bec6958",
      //     name: "mavi Kağıt",
      //     stock: 1500,
      //     price: 5.5
      //   }).subscribe()

      // this.httpClientService.delete({ 
      //   controller: "products"},
      //   "87d43499-c2cf-4763-929e-f031ad5f5ced")
      //   .subscribe();

      // this.httpClientService.get({
      //   fullEndPoint: "https://jsonplaceholder.typicode.com/posts"
      // }).subscribe(data =>console.log(data));
  }
}
