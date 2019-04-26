import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeComponent } from './coffee/coffee.component';
import { AuthGuard } from '../core/services/auth.guard.service';

const routes: Routes = [
    {path: '', component: CoffeeComponent, canActivate: [AuthGuard] },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class TableRoutingModule { }