import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { AppComponent }   from './app.component';
import { RouterConfig } from './app.routes';

import { Home } from './modules/+home/home.ts';
import { Todo } from './modules/+todo/todo.ts';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterConfig,
    FormsModule,
    TranslateModule.forRoot()
  ],
  declarations: [
    AppComponent,
    Home,
    Todo
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
