import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe-model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 
  @Input() recipe:Recipe
  @Input() index:number
  //@Output() recipeSelector=new EventEmitter<void>();

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  // onSelected(){
  //   //this.recipeSelector.emit()
  //   this.recipeService.recipeSelected.emit(this.recipe)
  // }

}
