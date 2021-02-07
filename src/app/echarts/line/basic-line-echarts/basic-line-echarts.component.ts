import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EchartService } from '../../echart.service';
import { EChartOption } from 'echarts';
import { BasicEchartLineModel} from '../../echart.model';

@Component({
  selector: 'app-basic-line-echarts',
  templateUrl: './basic-line-echarts.component.html',
  styleUrls: ['./basic-line-echarts.component.scss'],
  providers: [EchartService]
})
export class BasicLineEchartsComponent implements OnInit {

  _chartOption !:EChartOption;
  subscription!: Subscription;
  constructor(private echartService :EchartService) { }

  ngOnInit(): void {
    this.subscription = this.echartService.getbasicLineEchartData().subscribe(data=>{
      this._initBasicLineEchart(data);
    });
  }

  private _initBasicLineEchart(chartData : BasicEchartLineModel[]){

    this._chartOption = {
      tooltip: {
        show: true
      },
      xAxis: {
        type: 'category',
        data: chartData.map(m => ({
          value: m.name
        }))
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: chartData.map(m => ({
          value: m.value
        })),
        type: 'line'
      }]

    };

  }

}
