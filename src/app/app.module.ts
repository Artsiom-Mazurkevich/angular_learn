import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { SimpleComponent } from './components/simple/simple.component'
import { TemplateVariablesComponent } from './components/template-variables/template-variables.component'
import { NgForLearnComponent } from './components/ng-for-learn/ng-for-learn.component'
import { NgSwitchLearnComponent } from './components/ng-switch-learn/ng-switch-learn.component'

@NgModule({
   declarations: [
      AppComponent,
      SimpleComponent,
      TemplateVariablesComponent,
      NgForLearnComponent,
      NgSwitchLearnComponent,
   ],
   imports: [BrowserModule, AppRoutingModule, FormsModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
