import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StockService} from './app.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _stockService: StockService) {
    // todo: getAllStocks on init
    // todo: display stocks in list view on F.E
  }

  addStock(s: NgForm) {
    this._stockService.addStock(s.value)
      .then((stock) => {
        console.log('Stock Added : ', stock);
      }).catch((error) => {
      console.log('Oops! Something went wrong with adding a stock', error);
    });
  }

  readStock(stockId) {
    this._stockService.getStock(stockId)
      .then((stockId) => {
        console.log('Stock retrieved by ID : ', stockId);
      }).catch((error) => {
      console.log('Oops! Something went wrong with reading a stock', error);
    });
  }

  updateStock(s: NgForm) {
    this._stockService.updateStock(s.value)
      .then((stock) => {
        console.log('Stock Updated : ', stock);
      }).catch((error) => {
      console.log('Oops! Something went wrong with updating the stock', error);
    });
  }
  confirmStockDelete(stockId) {
    const c = confirm('Are you sure you would like to delete this Stock Item?');
    c ? this.stockDelete(stockId) : console.log('Not confirmed to delete item : ');
  }

  stockDelete(stockId) {
    this._stockService.deleteStock(stockId)
      .then((stockId) => {
        console.log('Stock Deleted by ID : ', stockId);
      }).catch((error) => {
      console.log('Oops! Something went wrong with deleting a stock', error);
    });
  }

}
