import { Component } from '@angular/core'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   name = 'Artsiom'
   age = 27
   title: string = 'angular_lesson'
   products: Array<any> = []
   addItem(text: string, price: number) {
      this.products.push({ text, price })
   }
   logEvent(e: MouseEvent) {
      console.log(e)
   }
   isRed = false
}
