import { Component, OnInit } from '@angular/core'

interface Data {
   id: string
   title: string
   list: ListCars[]
}

interface ListCars {
   id: string
   car: string
}

@Component({
   selector: 'app-ng-for-learn',
   templateUrl: './ng-for-learn.component.html',
   styleUrls: ['./ng-for-learn.component.scss'],
})
export class NgForLearnComponent {
   arrayNames: string[] = ['Bob', 'Maks', 'Hanna', 'Sara', 'Jon Snow']
   arrayData: Data[] = [
      {
         id: '1',
         title: 'SomeTitle',
         list: [
            { id: 'dfg', car: 'Audi' },
            { id: 'ghj', car: 'BMW' },
            { id: 'iop', car: 'Mercedes' },
            { id: 'ert', car: 'Porsche' },
         ],
      },
      {
         id: '2',
         title: 'TitleSome',
         list: [
            { id: 'pzy', car: 'Ford' },
            { id: 'qni', car: 'Opel' },
            { id: 'ndt', car: 'Nissan' },
            { id: 'jal', car: 'Mitsubishi' },
         ],
      },
   ]

   constructor() {}
}
