import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm} from '@angular/forms'
import { ShoppingService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameInput') nameInputRef:ElementRef;
  // @ViewChild('amountInput') amountInputRef:ElementRef;

  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('form') shoppingForm:NgForm;

  //  sForm={
  //    name:'',
  //    amount:''
  //  }
 
  subscription:Subscription
  editMode=false;
  editedItemIndex:number;
  editItem:Ingredient

  constructor(private slService:ShoppingService) { }

  ngOnInit() {
    this.subscription=this.slService.startEditing
        .subscribe(
          (index:number)=>{
            this.editedItemIndex=index;
            this.editMode=true;
            this.editItem= this.slService.getIngredient(index)
            this.shoppingForm.setValue({
              name:this.editItem.name,
              amount:this.editItem.amount
            })
          }
        )
  }
  
  onAddItem(form:NgForm){

    // const ingName=this.nameInputRef.nativeElement.value
    // const ingAmount= this.amountInputRef.nativeElement.value
    // const newIngredient=new Ingredient(ingName,ingAmount)
    // //this.ingredientAdded.emit(newIngredient)
    // this.slService.addIngredient(newIngredient)

    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.amount)
    this.slService.addIngredient(newIngredient)
    //this.slService.addIngredient()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
