import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public pageTitle = 'Product List';
  public imageWidth = 50;
  public imageMargin = 2;
  public showImage = false;
  public _listFilter: string;
  public filteredProducts: IProduct[];

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
  }

  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    }];

  constructor() { 
    this.setDefaultValues();
  }

  private setDefaultValues(): void {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }

  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void { }

}
