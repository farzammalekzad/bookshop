import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { SpecialComponent } from './pages/home/special/special.component';
import { NewComponent } from './pages/home/new/new.component';
import { PopularComponent } from './pages/home/popular/popular.component';
import { LastestnewsComponent } from './pages/home/lastestnews/lastestnews.component';
import { BrandsComponent } from './pages/home/brands/brands.component';
import {SlidersService} from './services/sliders.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import {Interceptor} from './utils/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SpecialComponent,
    NewComponent,
    PopularComponent,
    LastestnewsComponent,
    BrandsComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SlidersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
