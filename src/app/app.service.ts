import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';
const headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
const options = new RequestOptions({ headers: headers });

@Injectable()

export class StockService {

  constructor(private http: Http ) {}

  public addStock(stock): Promise<any> {
    return this.http.post(environment.url, stock, options).toPromise()
      .then(response => response.json())
  }

  public getAllStocks(): Promise<any> {
    return this.http.get(environment.url)
      .toPromise()
      .then(response => response.json())
  }

  public getStock(stockId): Promise<any> {
    return this.http.get(environment.url, stockId).toPromise()
      .then(response => response.json())
  }

  public updateStock(stock, stockId): Promise<any> {
    console.log('update stock', stock);
    return this.http.put(environment.url + '/' + stockId, stock, options).toPromise()
      .then(response => response.json())
  }

  public deleteStock(stockId): Promise<any> {
    return this.http.delete(environment.url + '/' + stockId, stockId).toPromise()
      .then(response => response.json())
  }


}
