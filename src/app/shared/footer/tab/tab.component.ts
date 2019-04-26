import { Component, OnInit, Input } from '@angular/core';
import { ITab } from '../../../interfaces/ITab';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() tab: ITab;
  @Input() activated: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
