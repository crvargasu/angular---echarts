import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicLineEchartsComponent } from './echarts/line/basic-line-echarts/basic-line-echarts.component';
import { NgxEchartsModule} from 'ngx-echarts';
import { EchartService } from './echarts/echart.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetropolitanaComponent } from './echarts/regiones/metropolitana/metropolitana.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
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
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatIconModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [EchartService, SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
