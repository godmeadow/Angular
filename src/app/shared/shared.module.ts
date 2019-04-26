import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableStatusPipe } from './pipes/table-status.pipe';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { TabComponent } from './footer/tab/tab.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [
        CommonModule,
        FormsModule,
        HeaderComponent,
        LayoutComponent,
        PageNotFoundComponent,
        TableStatusPipe,
        FilterComponent,
        FooterComponent
    ],
    declarations: [
        HeaderComponent,
        LayoutComponent,
        PageNotFoundComponent,
        TableStatusPipe,
        FilterComponent,
        FooterComponent,
        TabComponent
    ],
    providers: [],
})
export class SharedModule { }
