import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from "@angular/core";

export class ShoppingListService{
  ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredients:Ingredient[] = [
    new Ingredient('Mango',10),
    new Ingredient('Potato',5)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredientToList(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
