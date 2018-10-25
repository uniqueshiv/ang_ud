import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import {HeaderComponent} from './header/header.component'
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoute:Routes=[
    { path:'',redirectTo:'/recipes', pathMatch: 'full'},
    { path:'recipes',component:RecipesComponent,children:[
      { path:'',component:RecipeStartComponent },
      { path:'new', component:RecipeEditComponent },//we are defining before down component to tell angular that this is static path not dynamic
      { path:':id',component:RecipeDetailComponent },
      { path:':id/edit', component:RecipeEditComponent}
    ]},

    {path:'shopping-list',component:ShoppingListComponent}
    ]

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule],
})

export class AppRoutingModule{

}
