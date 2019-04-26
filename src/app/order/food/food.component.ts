import { Component, OnInit, Input } from '@angular/core';
import { IFood } from '../../interfaces/IFood';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() food: IFood;
  @Input() quantity: number = 0;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    
  }

  increase() {
    this.quantity++;
    this.orderService.addFood(this.food);
  }

  decrease() {
    if (this.quantity === 0) {
      return;
    }
    this.quantity--;
    this.orderService.removeFood(this.food);
  }

}
