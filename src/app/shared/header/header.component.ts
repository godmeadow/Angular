import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() canBack: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate([this.canBack]);
  }

}
