import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { ServicesComponent } from './containers/services/services.component';
import { PricesComponent } from './containers/prices/prices.component';
import { ContactComponent } from './containers/contact/contact.component';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemCardComponent,
    PriceCardComponent,
    ServicesComponent,
    PricesComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
