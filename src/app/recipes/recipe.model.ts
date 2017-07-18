import {Ingredient} from "../shared/ingredient.model";
/**
 * Created by Jay on 7/12/2017.
 */
export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
