import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RoutingModule } from './routing/routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { TaskJSComponent } from './task-js/task-js.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, SearchComponent, LayoutComponent, HomeComponent, HeaderComponent,
    SidenavListComponent, NotFoundComponent, ProductsComponent, FooterComponent,
    CarouselComponent, BottomMenuComponent, TaskJSComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    SwiperModule,
    HttpClientModule
  ],

  providers: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
