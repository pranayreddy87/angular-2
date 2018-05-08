import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string ='Product Details';
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
