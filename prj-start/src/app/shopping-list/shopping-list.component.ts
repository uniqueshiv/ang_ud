import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping-list.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients:Ingredient[];
  private subscription:Subscription
  constructor(private slService:ShoppingService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();

    this.subscription=this.slService.ingredientChanged
      .subscribe(
        (ingredients:Ingredient[]) => {
          this.ingredients=ingredients
        }
      )
  }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    //alert('sss')
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
