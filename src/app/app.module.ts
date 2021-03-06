import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgImageSliderModule } from 'ng-image-slider';
import { NgxTreeDndModule } from 'ngx-tree-dnd';

import { AppRoutingModule, AppRouteCompoents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AppServiceService } from './services/app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AppRouteCompoents,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTreeDndModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
