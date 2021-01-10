import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }
  sum = 0;
  ngOnInit(): void {
  }
  public budgetItems: BudgetItem[] = [];
  addItem(newItem: BudgetItem)
  {
    this.budgetItems.push(newItem);
    this.sum = this.sum + newItem.amount;
  }
  
  deleteItem(item: BudgetItem)
  {
    this.sum = this.sum - item.amount;
    this.budgetItems.splice(this.budgetItems.indexOf(item), 1);
  }

}
