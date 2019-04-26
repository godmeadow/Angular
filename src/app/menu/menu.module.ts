import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '../../../node_modules/@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodComponent } from './food/food.component';
import { MenuRoutingModule } from './menu.routing';


@NgModule({
    imports: [SharedModule,  RouterModule, MenuRoutingModule],
    exports: [],
    declarations: [MenuComponent, FoodDetailComponent, FoodComponent],
    providers: [],
})
export class MenuModule { }
