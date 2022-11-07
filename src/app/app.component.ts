import { Component, OnInit } from '@angular/core'
import { IProduct } from './mock_data/products'
import { products as data } from './mock_data/products'
import { ProductsService } from './services/products.service'
import { logMessages } from '@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
   title: string = 'angular_lesson'
   loading = false
   products: IProduct[] = []

   constructor(private productService: ProductsService) {}

   ngOnInit(): void {
      this.loading = true
      this.productService.getAll().subscribe(products => {
         this.products = products
         this.loading = false
      })
   }
}
