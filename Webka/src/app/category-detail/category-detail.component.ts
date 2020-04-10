import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from "../product";
import { PRODUCTS } from "../all-products";
import { CategoriesService } from "../categories.service";

import { Category } from '../category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category:Category;
  products:Product[];
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriesService.getCategory(id)
      .subscribe(category => this.category = category);
  }
  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriesService.getProductsByCategoryIdFromAllProducts(id)
      .subscribe(products => this.products = products)
  }
  goBack(): void {
    this.location.back();
  }
  add(name: string, id: number, description: string, price: number, img: string, url: string): void {
    name = name.trim();
    if (!name&&!id&&!description&&!price&&!img&&!url) { return; }
    this.categoriesService.addProduct({ name, id, description, price, img, url } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
  }
  delete(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.categoriesService.deleteProduct(product).subscribe();
  }
}
