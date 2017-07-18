import {Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(){
     const nameEl = this.nameInputRef.nativeElement.value;
     const amountEl = this.amountInputRef.nativeElement.value;
     const addOnIngredient = new Ingredient(nameEl,amountEl);
     this.shoppingListService.addIngredientToList(addOnIngredient);
  }
}
