import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todoList: Item[] = [
    {
      description: "make up bed", 
      isComplete: false
    } as Item,
    {
      description: "eat breakfast", 
      isComplete: false
    } as Item,
    {
      description: "brush teeth", 
      isComplete: false
    } as Item,
    {
      description: "take shower", 
      isComplete: false
    } as Item,
    {
      description: "get dressed", 
      isComplete: false
    } as Item,
    {
      description: "go to school", 
      isComplete: false
    } as Item,
  ];

  constructor() { }

  ngOnInit() {
  }

}
