import { Component, OnInit } from '@angular/core'
import { IProduct } from './mock_data/products'
import { products as data } from './mock_data/products'
import { ProductsService } from './services/products.service'
import { logMessages } from '@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild'
import { Observable, tap } from 'rxjs'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
// export class AppComponent implements OnInit {
//    title: string = 'angular_lesson'
//    loading = false
//    products: IProduct[] = []
//
//    constructor(private productService: ProductsService) {}
//
//    ngOnInit(): void {
//       this.loading = true
//       this.productService.getAll().subscribe(products => {
//          this.products = products
//          this.loading = false
//       })
//    }
// }
export class AppComponent implements OnInit {
   title: string = 'angular_lesson'
   // знак доллара указывает на то, что это стрим
   products$: Observable<IProduct[]>
   loading = false

   constructor(private productService: ProductsService) {}

   ngOnInit(): void {
      this.loading = true
      this.products$ = this.productService.getAll().pipe(
         tap(() => {
            this.loading = false
         })
      )
   }
}
