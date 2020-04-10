
import { Component, OnInit } from '@angular/core';

import { Category } from "../category";
import { CategoriesService } from "../categories.service";
import { Product } from '../product';
import { Location } from '@angular/common';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Category[];

  constructor(private categoriesService:CategoriesService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories()
    .subscribe(categories => this.categories = categories);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.categoriesService.addProduct({ name } as Product)
      .subscribe();
  }
  
  //delete(product:Product):void {
    
  //}
  logout(){
    this.location.go('login')
  }

  // delete(category: Category): void {
  //   this.categories = this.categories.filter(c => c !== category);
  //   this.categoriesService.deleteCategory(category).subscribe();
  // }  
}

