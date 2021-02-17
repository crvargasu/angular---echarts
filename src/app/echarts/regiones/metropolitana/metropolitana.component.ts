import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EChartOption } from 'echarts';
import * as echarts from 'echarts';
import $ from "jquery";

@Component({
  selector: 'app-metropolitana',
  templateUrl: './metropolitana.component.html',
  styleUrls: ['./metropolitana.component.scss']
})
export class MetropolitanaComponent implements OnInit, AfterViewInit {

  _chartOption !:EChartOption;
  subscription!: Subscription;
  public zoom !: number;
  public comuna: string;

  opened !: boolean;
  events: string[] = [];
  shouldRun = true;
  @ViewChild('li1') p1!: ElementRef;
  @ViewChild('button1') p3!: ElementRef;

  
  constructor() { 
    this.zoom = 1;
    this.comuna = ""
  }

  ngOnInit(): void {
    // this.subscription = this.echartService.getbasicLineEchartData().subscribe(data=>{
    //   this._initMetropChart(data);
    // });
    // this.demo.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
    this._initMetropEchart();
  }

  ngAfterViewInit(){
  }

  sidenavController(sidenav: any) {
    sidenav.toggle()
  }

  showText1(){
    if (this.p3.nativeElement.innerHTML == "+"){
      this.p1.nativeElement.innerHTML = "<ul><li>Servicios educativos</li><li>Servicios educativos2</li></ul>";
      this.p3.nativeElement.innerHTML = "X";
    }
    else {
      this.p3.nativeElement.innerHTML = "+";
      this.p1.nativeElement.innerHTML = "";
    }
  }

  public increaseZoom(): void {
    this.zoom ++;
    if(this.zoom > 3){
      this._initMetropEchart2()
    }
    else{
      this._initMetropEchart()
    }
  }

  public decreaseZoom(): void {
    if(this.zoom > 0){
      this.zoom --;
      this._initMetropEchart()
    }
  }

  public onChartClick(e: any, sidenav: any): void {
    console.log(`se hizo click en ${e.name}`);
    this.sidenavController(sidenav);
    this.comuna = e.name;
    // sidenav.toggle();
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
          // label: {
          //   show: true
          // },
          roam: true,
          emphasis: {
            label: {
                show: true
            }
        },
        data:[
          {name: "María Pinto", value: 1000, label: {show: true}},
          {name: "San Pedro", value: 1000, label: {show: true}},
          {name: "Independencia", value: 1000},
          {name: "La Florida", value: 1000},
          {name: "Lo Barnechea", value: 1000, label: {show: true}},
          {name: "Lo Espejo", value: 1000},
          {name: "Lo Prado", value: 1000},
          {name: "Pedro Aguirre Cerda", value: 1000},
          {name: "Pudahuel", value: 1000},
          {name: "San Joaquín", value: 1000},
          {name: "San Ramón", value: 1000},
          {name: "El Monte", value: 1000, label: {show: true}},
          {name: "Isla de Maipo", value: 1000, label: {show: true}},
          {name: "Talagante", value: 1000, label: {show: true}},
          {name: "Colina", value: 1000, label: {show: true}},
          {name: "Lampa", value: 1000, label: {show: true}},
          {name: "Tiltil", value: 1000, label: {show: true}},
          {name: "Pirque", value: 1000, label: {show: true}},
          {name: "Puente Alto", value: 1000},
          {name: "San José de Maipo", value: 1000, label: {show: true}},
          {name: "Buin", value: 1000, label: {show: true}},
          {name: "Paine", value: 1000, label: {show: true}},
          {name: "San Bernardo", value: 1000, label: {show: true}},
          {name: "Curacaví", value: 1000, label: {show: true}},
          {name: "Calera de Tango", value: 1000, label: {show: true}},
          {name: "Melipilla", value: 1000, label: {show: true}},
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
          {name: "Alhué", value: 1000, label: {show: true}},
      ],
      
      
      }],
      visualMap: [
        {  
          left: 'right',
          min: 0,
          max: 60,
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

  //////////VISTA CON ZOOM//////////////////////

  private _initMetropEchart2(){
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
          label: {
            show: true
          },
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
            color: ['#DFDFEB', '#1B1464'], 
            symbolSize: [30, 100]
          },
          text: ['High', 'Low'],
        }
      ],

    };

  }

}
