import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { OrderService } from '../../core/services/order.service';
import { FoodService } from '../../core/services/food.service';
import { IFood } from '../../interfaces/IFood';
import { TableService } from '../../core/services/table.service';
import { ITable } from '../../interfaces/ITable';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  orderId: string;
  tableId: string;
  order: any;
  constructor(private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private foodService: FoodService,
    private tableService: TableService) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.params.id;
    this.tableId = this.route.snapshot.params.tableId;
    this.orderService.getOrderById(this.orderId).subscribe(res => {
      this.order = res;
      this.foodService.getFoods().subscribe(foods => {
        this.order.details.map(item => {
          const food = foods.find(f => f.id === item.food);
          item.cover = food.cover;
          return item;
        });
      });
    });
  }
  completeOrder() {
    this.orderService.updateStatusOrder(this.orderId, 0).subscribe(res => {
      this.router.navigate(['tables']);
    });
  }

  moreOrder() {
    this.router.navigate(['order/' + this.tableId]);
  }

}
