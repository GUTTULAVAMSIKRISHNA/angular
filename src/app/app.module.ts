import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { SubBannerComponent } from './sub-banner/sub-banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardsComponent } from './cards/cards.component';
import { SubCardsComponent } from './sub-cards/sub-cards.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    SubBannerComponent,
    WelcomeComponent,
    CardsComponent,
    SubCardsComponent,
    FaqComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    AboutusComponent,
    ContactusComponent,
    DetailsComponent,
    OrderComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
