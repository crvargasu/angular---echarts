import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicLineEchartsComponent } from './echarts/line/basic-line-echarts/basic-line-echarts.component';
import { NgxEchartsModule} from 'ngx-echarts';
import { EchartService } from './echarts/echart.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BasicLineEchartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEchartsModule,
  ],
  providers: [EchartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
