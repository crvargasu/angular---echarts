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

    $.get("https://echarts.apache.org/examples/data/asset/geo/USA.json", function(usjson){
      echarts.registerMap('USA', usjson, {
        // Move Alaska to the bottom left of United States
        Alaska: {
            // Upper left longitude
            left: -131,
            // Upper left latitude
            top: 25,
            // Range of longitude
            width: 15
        },
        // Hawaii
        Hawaii: {
            left: -110,
            top: 28,
            width: 5
        },
        // Puerto Rico
        'Puerto Rico': {
            left: -76,
            top: 26,
            width: 2
        }
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
          max: 5000,
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
          {name: 'Alabama', value: 4822023},
          {name: 'Alaska', value: 731449},
          {name: 'Arizona', value: 6553255},
          {name: 'Arkansas', value: 2949131},
          {name: 'California', value: 38041430},
          {name: 'Colorado', value: 5187582},
          {name: 'Connecticut', value: 3590347},
          {name: 'Delaware', value: 917092},
          {name: 'District of Columbia', value: 632323},
          {name: 'Florida', value: 19317568},
          {name: 'Georgia', value: 9919945},
          {name: 'Hawaii', value: 1392313},
          {name: 'Idaho', value: 1595728},
          {name: 'Illinois', value: 12875255},
          {name: 'Indiana', value: 6537334},
          {name: 'Iowa', value: 3074186},
          {name: 'Kansas', value: 2885905},
          {name: 'Kentucky', value: 4380415},
          {name: 'Louisiana', value: 4601893},
          {name: 'Maine', value: 1329192},
          {name: 'Maryland', value: 5884563},
          {name: 'Massachusetts', value: 6646144},
          {name: 'Michigan', value: 9883360},
          {name: 'Minnesota', value: 5379139},
          {name: 'Mississippi', value: 2984926},
          {name: 'Missouri', value: 6021988},
          {name: 'Montana', value: 1005141},
          {name: 'Nebraska', value: 1855525},
          {name: 'Nevada', value: 2758931},
          {name: 'New Hampshire', value: 1320718},
          {name: 'New Jersey', value: 8864590},
          {name: 'New Mexico', value: 2085538},
          {name: 'New York', value: 19570261},
          {name: 'North Carolina', value: 9752073},
          {name: 'North Dakota', value: 699628},
          {name: 'Ohio', value: 11544225},
          {name: 'Oklahoma', value: 3814820},
          {name: 'Oregon', value: 3899353},
          {name: 'Pennsylvania', value: 12763536},
          {name: 'Rhode Island', value: 1050292},
          {name: 'South Carolina', value: 4723723},
          {name: 'South Dakota', value: 833354},
          {name: 'Tennessee', value: 6456243},
          {name: 'Texas', value: 26059203},
          {name: 'Utah', value: 2855287},
          {name: 'Vermont', value: 626011},
          {name: 'Virginia', value: 8185867},
          {name: 'Washington', value: 6897012},
          {name: 'West Virginia', value: 1855413},
          {name: 'Wisconsin', value: 5726398},
          {name: 'Wyoming', value: 576412},
          {name: 'Puerto Rico', value: 3667084}
      ]
        // data: chartData.map(m => ({
        //   value: m.value,
        //   name: m.name
        // })),
      
      }]

    };

  }

}
