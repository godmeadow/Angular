import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from '../core/services/auth.guard.service';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
    {path: 'thanks', component: ThanksComponent},
    {path: ':tableId', component: OrderComponent, canActivate: [AuthGuard] },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class OrderRoutingModule { }