import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'

@Component({
   selector: 'app-simple',
   templateUrl: './simple.component.html',
   styleUrls: ['./simple.component.scss'],
})
export class SimpleComponent implements OnInit, OnDestroy {
   constructor() {}
   ngOnInit() {
      this.log(`onInit`)
   }

   ngOnDestroy() {
      this.log(`onDestroy`)
   }

   private log(msg: string) {
      console.log(msg)
   }

   @Input() userName: string = ''

   _userAge: number = 0

   @Input()
   set userAge(age: number) {
      if (age < 0) this._userAge = 0
      else if (age > 100) this._userAge = 100
      else this._userAge = age
   }
   get userAge() {
      return this._userAge
   }
   @Output() changed = new EventEmitter<boolean>()
   change(increased: any) {
      this.changed.emit(increased)
   }
}
