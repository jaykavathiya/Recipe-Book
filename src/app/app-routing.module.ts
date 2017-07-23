import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesStartComponent} from "./recipes/recipes-start/recipes-start.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children:[
    {path: '', component: RecipesStartComponent},
    {path: ':id', component: RecipesStartComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule{

}
