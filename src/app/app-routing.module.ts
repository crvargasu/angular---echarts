import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLineEchartsComponent } from './echarts/line/basic-line-echarts/basic-line-echarts.component';
import { MetropolitanaComponent } from './echarts/regiones/metropolitana/metropolitana.component';

const routes: Routes = [
  {
    path: 'basic-line-echart',
    component: BasicLineEchartsComponent
  },
  {
    path: 'Metropolitana',
    component: MetropolitanaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
