import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicLineEchartsComponent } from './echarts/line/basic-line-echarts/basic-line-echarts.component';
import { NgxEchartsModule} from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetropolitanaComponent } from './echarts/regiones/metropolitana/metropolitana.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavService } from './echarts/sidenav.service';


@NgModule({
  declarations: [
    AppComponent,
    BasicLineEchartsComponent,
    MetropolitanaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEchartsModule,
    MatSidenavModule,
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
