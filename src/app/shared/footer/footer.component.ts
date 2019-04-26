import { Component, OnInit } from '@angular/core';
import { ITab } from '../../interfaces/ITab';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  tabs: ITab[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.tabs = [{
      name: 'menu',
      icon: 'assets/coffee-beans'
    },
    {
      name: 'order',
      icon: 'assets/shopping-cart',
      active: true
    },
    {
      name: 'profile',
      icon: 'assets/user'
    }];
  }

  selectTab(tab: ITab) {
    this.tabs = this.tabs.map(t => {
      t.active = false;
      return t;
    })
    if (tab.active = true) {
      switch (tab.name) {
        case 'menu':
          this.router.navigate(['menu']);
          break;
        case 'order':
          this.router.navigate(['tables']);
          break;
        case 'profile':
          this.router.navigate(['profile']);
          break;
        default:
          break;
      }
    }
  }
}
