import { NgModule } from '@angular/core';
import { OrderComponent } from './order/order.component';
import { FoodComponent } from './food/food.component';
import { SharedModule } from '../shared/shared.module';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ThanksComponent } from './thanks/thanks.component';
import { OrderRoutingModule } from './order.routing';

@NgModule({
    imports: [SharedModule, OrderRoutingModule],
    exports: [OrderComponent, FoodComponent],
    declarations: [OrderComponent, FoodComponent, OrderSummaryComponent, ThanksComponent],
    providers: [],
})
export class OrderModule { }
