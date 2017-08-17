import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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
  constructor(private _stockService: StockService, public _notify: ToastsManager, public _view: ViewContainerRef) {
    this._notify.setRootViewContainerRef(_view);
    this._stockService.getAllStocks().then((stocks) => {
      this.stocks = stocks.data;
    }).catch((error) => {
        this._notify.error('Oops! Something went wrong when getting all inventory stock', error);
      }
    );
  }

  addStock(s: NgForm) {
    this._stockService.addStock(s.value)
      .then((stock) => {
        this.stocks.push(stock);
        this._notify.success('Stock Added!');
      }).catch((error) => {
      this._notify.error('Oops! Something went wrong', error);
    });
  }

  readStock(stock) {
    this.selectedStock = stock;
  }

  updateStock(updated: NgForm, selectedStock) {
    this._notify.warning('Oops! Something went wrong and i had to comment out the front end logic for updating a stock :(', 'My Bad!');
    // todo:: update form FE integration
    // this._stockService.updateStock(updated.value, selectedStock._id)
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
      .then(() => {
        this.stocks = _.filter(this.stocks, function(s) { return s._id !== stockId; });
        this._notify.success('Stock Deleted!');
      }).catch((error) => {
      this._notify.error('Oops! Something went wrong', error);
    });
  }

}
