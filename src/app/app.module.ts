import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { FormsModule } from '@angular/forms';
import { StockService } from './app.service';
import { HttpModule } from '@angular/http';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { CustomOption } from '../assets/custom.toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot()
  ],
  providers: [
    StockService,
    {provide: ToastOptions, useClass: CustomOption}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
