import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HowToComponent } from './components/how-to/how-to.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    FooterComponent,
    HowToComponent,
    MainComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'loader', component: HowToComponent},
      {path: 'main', component: MainComponent},
      {path:'', component: HowToComponent},
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
