import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { IFoodOrdered } from '../../interfaces/IFoodOrdered';
import { ITable } from '../../interfaces/ITable';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  isShowDetails: boolean = false;
  totalAmount: number = 0;
  quatity: number = 0;
  foodOrdered: IFoodOrdered[];
  table:ITable;
  @Output() onOrderNow = new EventEmitter<any>();
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.totalAmount.subscribe(data => {
      this.totalAmount = data;
    });
  
    this.orderService.foodOrdered.subscribe(data => {
      this.quatity = data.length;
      this.foodOrdered = data;
    });
  }

  orderNow() {
    this.onOrderNow.emit({
      totalAmount: this.totalAmount,
      foodOrdered: this.foodOrdered
    });
  }
}
