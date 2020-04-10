import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../category';
import { Product } from "../product";
import { CategoriesService } from "../categories.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  category:Category;
  
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  // save(): void {
  //   this.categoriesService.updateProduct(this.product)
  //     .subscribe(() => this.goBack());
  // }
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriesService.getProduct(id)
      .subscribe(product => this.product = product);
  }
  goBack(): void {
    this.location.back();
  }
  
}
