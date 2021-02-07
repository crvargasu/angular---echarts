import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EchartService } from '../../echart.service';
import { EChartOption } from 'echarts';
import { BasicEchartLineModel} from '../../echart.model';
import * as echarts from 'echarts';
import $ from "jquery";


@Component({
  selector: 'app-basic-line-echarts',
  templateUrl: './basic-line-echarts.component.html',
  styleUrls: ['./basic-line-echarts.component.scss'],
  providers: [EchartService]
})
export class BasicLineEchartsComponent implements OnInit {

  _chartOption !:EChartOption;
  subscription!: Subscription;
  map !: any;
  constructor(private echartService :EchartService) { 
    this.map = ""
  }

  ngOnInit(): void {
    this.subscription = this.echartService.getbasicLineEchartData().subscribe(data=>{
      this._initBasicLineEchart(data);
    });
  }

  private _initBasicLineEchart(chartData : BasicEchartLineModel[]){

    $.get("https://raw.githubusercontent.com/crvargasu/angular---echarts/map/src/assets/echart/all.json", function(usjson){
      echarts.registerMap('USA', usjson, {
        
      });
    });
    

    this._chartOption = {
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: [
        {
          min: 0,
          max: 7000,
          dimension: 3,
          inRange: {
            color: ['blue', '#121122', 'red'], 
            symbolSize: [30, 100]
          },
          outOfRange: {
            symbolSize: [30, 100]
          }
        }
      ],
      toolbox: {
        show: true,
        left: 'left',
        top: 'top',
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          type: 'map',
          map: 'USA',
          roam: true,
          emphasis: {
            label: {
                show: true
            }
        },
        data:[
          {name:"Región de Valparaíso", value: 4822023},
          
      ]
        // data: chartData.map(m => ({
        //   value: m.value,
        //   name: m.name
        // })),
      
      }]

    };

  }

}
