import { Component, OnInit } from '@angular/core';
import { ITable } from '../../interfaces/ITable';
import { IFilter } from '../../interfaces/IFilter';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { TableService } from '../../core/services/table.service';
import { IFood } from '../../interfaces/IFood';
import { FoodService } from '../../core/services/food.service';
import { OrderService } from '../../core/services/order.service';
import { FilterService } from '../../core/services/filter.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  table: ITable;
  filters: IFilter[];
  foods: IFood[];
  customer: string;
  constructor(private route: ActivatedRoute,
    private tableService: TableService,
    private foodService: FoodService,
    private orderService: OrderService,
    private router: Router,
    private filterService: FilterService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.tableId;
    this.tableService.getTableById(id).subscribe(data => {
      this.table = data;
      if (this.table.bill && this.table.bill.status > 0) {
        this.customer = this.table.bill.customer;
        this.orderService.loadOrder(this.table.bill);
      }
    });

    this.foodService.getFoods().subscribe(data => {
      this.foods = data;
      if (this.table.bill) {
        this.foods.map(item => {
          const existsItem = this.table.bill.details.find(i => i.food === item.id);
          if (existsItem) {
            item.quantity = existsItem.quatity;
          } else {
            item.quantity = 0;
          }
        });
      }
    });

    this.filterService.getFilters();
    this.filterService.oFilters.subscribe(data => {
      this.filters = data;
    })
  }

  selectFilter(filter: IFilter) {
    this.filters = this.filters.map(f => {
      f.active = false;
      return f;
    });
    if (filter.active = true) {
      this.foodService.getFoods().subscribe(foods => {
        this.foods = foods.filter(item => item.categories.find(i => i.id === filter.id));
        if (this.table.bill) {
          this.foods.map(item => {
            const existsItem = this.table.bill.details.find(i => i.food === item.id);
            if (existsItem) {
              item.quantity = existsItem.quatity;
            } else {
              item.quantity = 0;
            }
          });
        }
      })
    }
  }

  orderNow(data: any) {
    if (!this.table.bill || this.table.bill.status === 0) {
      this.orderService.createOrder(this.table.id,
        this.customer,
        data.totalAmount,
        1,
        data.foodOrdered).subscribe((res: any) => {
          const params = {
            id: res.id,
            tableId: this.table.id,
          }
          this.router.navigate(['order', 'thanks', params]);
        });
    } else {
      this.orderService.updateOrder(this.table.bill.id,
        this.table.id,
        this.customer,
        data.totalAmount,
        1,
        data.foodOrdered).subscribe((res: any) => {
          const params = {
            id: res.id,
            tableId: this.table.id
          }
          this.router.navigate(['order', 'thanks', params]);
        });
    }
  }
}