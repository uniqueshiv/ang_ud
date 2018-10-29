import { Recipe } from "./recipe-model";
import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService implements OnInit{
    recipeChanged=new Subject<Recipe[]>()
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

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe)
        this.recipeChanged.next(this.recipes.slice())
    }
    updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe
        this.recipeChanged.next(this.recipes.slice())
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1)
        this.recipeChanged.next(this.recipes.slice())
    }

    ngOnInit(): void {
           this.recipes     
    } 
}