import { Component, OnInit } from '@angular/core';
import { IFilter } from '../../interfaces/IFilter';
import { IFood } from '../../interfaces/IFood';
import { FoodService } from '../../core/services/food.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { FilterService } from '../../core/services/filter.service';
import { ITab } from '../../interfaces/ITab';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  filters: IFilter[];
  foods: IFood[];
  constructor(private foodService: FoodService,
    private route: ActivatedRoute,
    private filterService: FilterService,
    private router: Router) { }

  ngOnInit() {
    this.filterService.getFilters();
    this.filterService.oFilters.subscribe(data => {
      this.filters = data;
    })

    this.foodService.getFoods().subscribe(data => {
      this.foods = data;
    })
  }

  selectFilter(filter: IFilter) {
    this.filters = this.filters.map(f => {
      f.active = false;
      return f;
    });
    filter.active = true;
    this.foodService.getFoods().subscribe(foods => {
      if (filter.active = true) {
        this.foods = foods.filter(item => item.categories.find(i => i.id === filter.id));
      }
    })
  }
}
