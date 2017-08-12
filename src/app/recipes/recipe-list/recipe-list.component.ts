import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Shawarma recipe', 'This is simply a test recipe', 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'),
    new Recipe('Cake recipe', 'This is simply another test recipe', 'https://static.pexels.com/photos/69817/france-confectionery-raspberry-cake-fruit-69817.jpeg'),
    new Recipe('Biriyani Recipe', 'This is simply one more test recipe', 'https://c.pxhere.com/photos/5f/6f/sweet_foods_food_sweet_biscuits_red_green_sugar_alimentari-964833.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeElement: Recipe) {
    this.recipeWasSelected.emit(recipeElement);
  }
}
