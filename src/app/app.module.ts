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
import {HttpClientModule} from '@angular/common/http';

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
    BrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SlidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
