import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StockService} from './app.service';
import 'rxjs/Rx';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public stocks;
  public selectedStock;
  constructor(private _stockService: StockService) {
    this._stockService.getAllStocks().then((stocks) => {
      this.stocks = stocks.data;
      console.log(stocks);
    }).catch((error) => {
        console.log('Oops! Something went wrong with adding a stock', error);
      }
    );
  }

  addStock(s: NgForm) {
    this._stockService.addStock(s.value)
      .then((stock) => {
        console.log('Stock Added : ', stock);
      }).catch((error) => {
      console.log('Oops! Something went wrong with adding a stock', error);
    });
  }

  readStock(stock) {
    this.selectedStock = stock;
    // this._stockService.getStock(stockId)
    //   .then((stockId) => {
    //     console.log('Stock retrieved by ID : ', stockId);
    //   }).catch((error) => {
    //   console.log('Oops! Something went wrong with reading a stock', error);
    // });
  }

  updateStock(updated: NgForm, selectedStock) {
    console.log ('updated value: ', updated.value);
    console.log(_.merge(selectedStock, updated.value));
    console.log('updated', updated.value.properties);
    console.log('selected selectedStock==>', selectedStock);

    // this._stockService.updateStock(s.value, selectedStock._id)
    //   .then((stock) => {
    //     console.log('Stock Updated : ', stock);
    //   }).catch((error) => {
    //   console.log('Oops! Something went wrong with updating the stock', error);
    // });
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
