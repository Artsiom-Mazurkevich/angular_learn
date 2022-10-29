import { Component } from '@angular/core'

interface IUser {
   name: string
   age: number
}

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   public title: string = 'angular_lesson'
   user: IUser = {
      name: 'Yura',
      age: 20,
   }
   isAppLoading = false
   public disableBtn() {
      this.isAppLoading = true
   }
   text = ''

   changeTextInput(event: Event) {
      this.text = (event.currentTarget as HTMLInputElement).value
   }

   two_way_binding_test = 'two_way_binding'

   titleParent = 'titleParent'
}
