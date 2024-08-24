import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {IProudct} from "../models/proudct";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorSevice: ErrorService
  ) {

  }

  products: IProudct[] = []

  getAll(): Observable<IProudct[]> {
    return this.http.get<IProudct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      delay(200),
      retry(2),
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
    )
  }

  create(product:IProudct):Observable<IProudct> {
    return this.http.post<IProudct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap(prod => this.products.push(prod))
      )
  }


  private errorHandler(error: HttpErrorResponse) {
    this.errorSevice.handle(error.message)
    return throwError(() => error.message)
  }
}
