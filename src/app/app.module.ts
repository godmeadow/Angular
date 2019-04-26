import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './shared/layout/layout.component';
import { TableModule } from './table/table.module';
import { SharedModule } from './shared/shared.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { registerLocaleData } from '../../node_modules/@angular/common';
import localeVi from '@angular/common/locales/vi';
import { MenuModule } from './menu/menu.module';
registerLocaleData(localeVi, 'Vi');

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    })
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'vi'
  }],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
