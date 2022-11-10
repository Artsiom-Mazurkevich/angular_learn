import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { IProduct } from '../mock_data/products'
import { catchError, delay, Observable, throwError } from 'rxjs'

@Injectable({
   providedIn: 'root',
})
export class ProductsService {
   constructor(private http: HttpClient) {}

   getAll(): Observable<IProduct[]> {
      return this.http
         .get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams({ fromObject: { limit: 5 } }),
            // params: new HttpParams().append('limit', 5),
         })
         .pipe(
            delay(2000),
            catchError((e: HttpErrorResponse) => {
               return throwError(() => e.message)
            })
         )
   }
}
