import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('Test Recipe','This is simply test recipe','http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18185711/051107001-01-pumpkin-layer-cake-recipe-main.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
