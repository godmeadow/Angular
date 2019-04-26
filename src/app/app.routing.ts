import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeComponent } from './table/coffee/coffee.component';
import { OrderComponent } from './order/order/order.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/services/auth.guard.service';

const routes: Routes = [
    {path: '', redirectTo: 'tables', pathMatch: 'full'},
    {path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    {path: 'tables', loadChildren: './table/table.module#TableModule' },
    {path: 'order', loadChildren: './order/order.module#OrderModule' },
    {path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
    {path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [],
    declarations: [],
})
export class AppRoutingModule { }



