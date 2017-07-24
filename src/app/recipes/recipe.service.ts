import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe( 'Cake',
                'Awesome',
                'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18185711/051107001-01-pumpkin-layer-cake-recipe-main.jpg',
                [
                  new Ingredient('Cheese', 5),
                  new Ingredient('Cream', 6)
                ]
    ),
    new Recipe( 'French Fries',
                'So Good',
                'http://az616578.vo.msecnd.net/files/2016/09/17/636096940768710804952549616_french-fries-1200.jpg',
                [
                  new Ingredient('Potatoes', 10),
                  new Ingredient('Sauce', 4)
                ]
    )
  ];
  constructor(private shoppingListService: ShoppingListService){}
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
