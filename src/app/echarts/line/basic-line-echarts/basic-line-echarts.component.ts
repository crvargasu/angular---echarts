import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts';
import $ from "jquery";


@Component({
  selector: 'app-basic-line-echarts',
  templateUrl: './basic-line-echarts.component.html',
  styleUrls: ['./basic-line-echarts.component.scss'],
  providers: []
})
export class BasicLineEchartsComponent implements OnInit {

  _chartOption !:EChartOption;
  subscription!: Subscription;
  public zoom !: number;
  constructor() { 
    this.zoom = 1;
  }

  ngOnInit(): void {
    // this.subscription = this.echartService.getbasicLineEchartData().subscribe(data=>{
    //   this._initBasicLineEchart(data);
    // });
    this._initMapEchart();
  }

  // private _initBasicLineEchart(chartData : BasicEchartLineModel[]){
  public onChartClick(e: any): void {
    console.log(`se hizo click en ${e.name}`);
    if(e.name == "Región Metropolitana de Santiago"){
      window.location.href = "/Metropolitana"
    }
  }
  
  public increaseZoom(): void {
    this.zoom ++;
    this._initMapEchart()
  }

  public decreaseZoom(): void {
    if(this.zoom > 0){
      this.zoom --;
      this._initMapEchart()
    }
  }

  private _initMapEchart(){

    $.get("https://raw.githubusercontent.com/crvargasu/angular---echarts/map/src/assets/echart/all.json", function(cljson){
      echarts.registerMap('Cl', cljson, {
        
      });
    });
    

    this._chartOption = {
      title: {
        text: 'Chile',
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
          name: 'Chile Region',
          type: 'map',
          zoom: this.zoom,
          map: 'Cl',
          roam: true,
          emphasis: {
            label: {
                show: true
            }
        },
        data:[
          {name:"Región de Aysén del Gral.Ibañez del Campo", value: 104843},
          {name:"Región de Magallanes y Antártica Chilena", value: 158657},
          {name:"Región de Arica y Parinacota", value: 183712},
          {name:"Región de Atacama", value: 280543},
          {name:"Región de Los Ríos", value: 379709},
          {name:"Región de Antofagasta", value: 575268},
          {name:"Región de Tarapacá", value: 683203},
          {name:"Región de Coquimbo", value: 718717},
          {name:"Región de Los Lagos", value: 836256},
          {name:"Región del Libertador Bernardo O'Higgins", value: 883368},
          {name:"Región de La Araucanía", value: 970419},
          {name:"Región del Maule", value: 1007831},
          {name:"Región de Valparaíso", value: 1759167},
          {name:"Región del Bío-Bío", value: 2036443},
          {name:"Región Metropolitana de Santiago", value: 6883563},
      ],
      
        // data: chartData.map(m => ({
        //   value: m.value,
        //   name: m.name
        // })),
      
      }],
      visualMap: [
        {  
          left: 'right',
          min: 0,
          max: 15,
          dimension: 3,
          inRange: {
            color: ['#DFDFEB', '#1B1464'], 
            symbolSize: [30, 100]
          },
          text: ['High', 'Low'],
        }
      ],

    };

  }

}
