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
  public zoom !: number;
  
  constructor(private echartService :EchartService) { 
    this.zoom = 1;
  }

  ngOnInit(): void {
    // this.subscription = this.echartService.getbasicLineEchartData().subscribe(data=>{
    //   this._initMetropChart(data);
    // });
    this._initMetropEchart();
  }

  public increaseZoom(): void {
    this.zoom ++;
    this._initMetropEchart()
  }

  public decreaseZoom(): void {
    if(this.zoom > 0){
      this.zoom --;
      this._initMetropEchart()
    }
  }

  // private _initMetropChart(chartData : Comunas_RM[]){
  private _initMetropEchart(){

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
          zoom: this.zoom,
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
          {name: "Lo Prado", value: 1000},
          {name: "Pedro Aguirre Cerda", value: 1000},
          {name: "Pudahuel", value: 1000},
          {name: "San Joaquín", value: 1000},
          {name: "San Ramón", value: 1000},
          {name: "El Monte", value: 1000},
          {name: "Isla de Maipo", value: 1000},
          {name: "Talagante", value: 1000},
          {name: "Colina", value: 1000},
          {name: "Lampa", value: 1000},
          {name: "Tiltil", value: 1000},
          {name: "Pirque", value: 1000},
          {name: "Puente Alto", value: 1000},
          {name: "San José de Maipo", value: 1000},
          {name: "Buin", value: 1000},
          {name: "Paine", value: 1000},
          {name: "San Bernardo", value: 1000},
          {name: "Curacaví", value: 1000},
          {name: "Calera de Tango", value: 1000},
          {name: "Melipilla", value: 1000},
          {name: "Cerrillos", value: 1000},
          {name: "Cerro Navia", value: 1000},
          {name: "Conchalí", value: 1000},
          {name: "Cerro Navia", value: 1000},
          {name: "El Bosque", value: 1000},
          {name: "Cerro Navia", value: 1000},
          {name: "Peñalolén", value: 1000},
          {name: "Providencia", value: 1000},
          {name: "Quilicura", value: 1000},
          {name: "Vitacura", value: 1000},
          {name: "Padre Hurtado", value: 1000},
          {name: "Quinta Normal", value: 1000},
          {name: "Recoleta", value: 1000},
          {name: "Renca", value: 1000},
          {name: "San Miguel", value: 1000},
          {name: "Huechuraba", value: 1000},
          {name: "La Cisterna", value: 1000},
          {name: "La Granja", value: 1000},
          {name: "La Pintana", value: 1000},
          {name: "La Reina", value: 1000},
          {name: "Las Condes", value: 1000},
          {name: "Maipú", value: 1000},
          {name: "Ñuñoa", value: 1000},
          {name: "Peñaflor", value: 1000},
          {name: "Estación Central", value: 1000},
      ],
      
      
      }],
      visualMap: [
        {  
          left: 'right',
          min: 0,
          max: 60,
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
