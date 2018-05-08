import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'reflect-metadata';
import { IProduct } from './product';
import { ProductSerivice } from './product.service';
//import { Observable } from 'rxjs/Observable';
//import { } from './star';


@Component ({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls : ['./product-list.component.css']
}

)

export class ProductListComponent implements OnInit {
    pageTitle: String ='Product List';
    imageWidth : Number = 50;
    imageMargin : Number= 2;
    showImage : boolean =false;
    errorMessage : string;
    _listFilter : string;
    get listFilter (): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filterProducts = this.filterProducts ? this.performFilter(this.listFilter) :this.products;
    }

    filterProducts : IProduct [];
    products : IProduct[] ;

    constructor(private _productService: ProductSerivice) {
        //this.filterProducts = this.products;
        //this.listFilter = 'cart';

    }

    onRatingClicked(message: string) :void {
        this.pageTitle = 'Product List: ' + message;
     }
    performFilter(filterBy : string): IProduct [] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(( product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
    }

    toggleImage() : void{
        this.showImage = !this.showImage;
    }
    ngOnInit():void{
    this._productService.getProducts()
    .subscribe(products => {
        this.products =  products;
        this.filterProducts = this.products;
    },
    error => this.errorMessage = <any>error);
    
    }
}