import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent  extends BaseComponent implements OnInit{
  constructor(spinner: NgxSpinnerService){ 
    super(spinner)
  }

  ngOnInit(): void {
      this.showSpinner(SpinnerType.BallAtom);
  }

}
