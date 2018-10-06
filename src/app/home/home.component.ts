import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add Item';
  goalText: string = 'My first life goal';
  goal = [];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goal.length;
  }
  addItem() {
    this.goal.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goal.length;
    }

}
