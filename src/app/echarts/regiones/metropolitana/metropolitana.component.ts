import { Component, OnInit } from '@angular/core';
import { EchartService } from '../../echart.service';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-metropolitana',
  templateUrl: './metropolitana.component.html',
  styleUrls: ['./metropolitana.component.scss']
})
export class MetropolitanaComponent implements OnInit {

  _chartOption !:EChartOption;
  
  constructor(private echartService :EchartService) { }

  ngOnInit(): void {
    this._initMetropEchart();
  }

  private _initMetropEchart(){

  }

}
