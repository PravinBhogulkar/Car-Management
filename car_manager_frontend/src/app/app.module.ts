import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { MatSlideToggleModule, } from '@angular/material/slide-toggle';
import { MatTableModule, } from '@angular/material/table';
import { CreatecardataComponent } from './createcardata/createcardata.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CreatecardataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatTableModule,
    FormsModule,
    // RouterModule.forRoot([
    //   {
    //       path: "/createcar", component: CreatecardataComponent
  //     },]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
