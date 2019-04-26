import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFood } from '../../interfaces/IFood';
import { FoodService } from '../../core/services/food.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() food: IFood;
  constructor(private foodService: FoodService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  
  }
}
