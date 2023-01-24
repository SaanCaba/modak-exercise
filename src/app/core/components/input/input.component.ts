import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnChanges {
  @Input() message: string = ''
  inputM:string = ''
  constructor(){}
  ngOnChanges(changes:SimpleChanges){
    console.log('pe')
  }
  
}
