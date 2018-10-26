import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core"
import { Subject } from "rxjs/Subject";

export class ShoppingService{

    ingredientChanged=new Subject<Ingredient[]>();

    startEditing=new Subject<number>()

    ingredients:Ingredient[]=[
        new Ingredient('Apple',5),
        new Ingredient('Tomatoes',10)
    ];

    getIngredients(){
       return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient)
        console.log(this.ingredients)
        this.ingredientChanged.next(this.ingredients.slice());
    }
    
    getIngredient(index:number){
        return this.ingredients[index]
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredients(index:number,newIngredient:Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientChanged.next(this.ingredients.slice())
    }
}
