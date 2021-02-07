import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EchartService } from '../../echart.service';
import { EChartOption } from 'echarts';
import { Comunas_RM} from '../../echart.model';
import * as echarts from 'echarts';
import $ from "jquery";

@Component({
  selector: 'app-metropolitana',
  templateUrl: './metropolitana.component.html',
  styleUrls: ['./metropolitana.component.scss']
})
export class MetropolitanaComponent implements OnInit {

  _chartOption !:EChartOption;
  subscription!: Subscription;
  
  constructor(private echartService :EchartService) { }

  ngOnInit(): void {
    this.subscription = this.echartService.getbasicLineEchartData().subscribe(data=>{
      this._initMetropChart(data);
    });
    // this._initMetropEchart();
  }

  private _initMetropChart(chartData : Comunas_RM[]){
  // private _initMetropEchart(){

    $.get("https://raw.githubusercontent.com/crvargasu/angular---echarts/map/src/assets/echart/metropolitana.json", function(metrjson){
      echarts.registerMap('Metr', metrjson, {
        
      });
    });

    this._chartOption = {
      title: {
        text: 'Region Metropolitana',
        left: 'right'
    },

      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },
      toolbox: {
        show: true,
        left: 'left',
        top: 'top',
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {},
        }
      },
      series: [
        {
          name: 'Metropolitana',
          type: 'map',
          map: 'Metr',
          roam: true,
          emphasis: {
            label: {
                show: true
            }
        },
        data:[
          {name: "María Pinto", value: 1000},
          {name: "San Pedro", value: 1000},
          {name: "Independencia", value: 1000},
          {name: "La Florida", value: 1000},
          {name: "Lo Barnechea", value: 1000},
          {name: "Lo Espejo", value: 1000},
      ],
      
      
      }],
      visualMap: [
        {  
          left: 'right',
          min: 0,
          max: 15,
          dimension: 3,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'], 
            symbolSize: [30, 100]
          },
          text: ['High', 'Low'],
        }
      ],

    };

  }

}
