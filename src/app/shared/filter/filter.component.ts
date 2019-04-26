import { Component, OnInit, Input } from '@angular/core';
import { IFilter } from '../../interfaces/IFilter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() filter: IFilter;
  @Input() activated: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
