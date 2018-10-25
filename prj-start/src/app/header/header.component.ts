import {Component,EventEmitter, Output} from '@angular/core'
//import { EventEmitter } from 'events';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',

})

export class HeaderComponent{

 @Output() featureSelected=new EventEmitter<string>();

 constructor(){}

 ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     
 }
 onSelect(feature:string){
    // alert(feature)
    this.featureSelected.emit(feature)
    console.log("eventemitter:headercomponent")
    console.info("ss",this.featureSelected)
 }
}