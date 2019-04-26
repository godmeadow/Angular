import { Component, OnInit, Input } from '@angular/core';
import { IFood } from '../../interfaces/IFood';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  @Input() food: IFood;
  constructor() { }

  ngOnInit() {
  }

}
