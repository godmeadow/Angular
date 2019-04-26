import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'detail', component: FoodDetailComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class MenuRoutingModule { }