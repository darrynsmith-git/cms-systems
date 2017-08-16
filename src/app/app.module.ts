import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { FormsModule } from '@angular/forms';
import { StockService } from './app.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
