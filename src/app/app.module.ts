import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shares/components/header/header.component';
import { FooterComponent } from './shares/components/footer/footer.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NosSoinsComponent } from './pages/nos-soins/nos-soins.component';
import { SalonComponent } from './pages/salon/salon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AproposComponent,
    ContactComponent,
    NosSoinsComponent,
    SalonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
