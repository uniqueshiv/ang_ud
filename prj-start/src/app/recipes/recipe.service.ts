import { Recipe } from "./recipe-model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    //recipeSelected=new EventEmitter<Recipe>();
    recipes: Recipe[]=[
        new Recipe('A Test Recipe 1','This is smiple desc1','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',[
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),   
        new Recipe('A Test Recipe 2','This is smiple desc2','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',[
            new Ingredient('Buns',1),
            new Ingredient('Meat',1)
        ]),   
        new Recipe('A Test Recipe 3','This is smiple desc3','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',[
            new Ingredient('Apple',1),
            new Ingredient('Mango',51)
        ])    
    ];
    
    constructor(private slService:ShoppingService){}

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];
    }
    addIngredientToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients)
    }
}