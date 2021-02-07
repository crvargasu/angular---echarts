import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Comunas_RM} from './echart.model';

@Injectable()
export class EchartService {
  constructor(private httpClient: HttpClient) { }
  getbasicLineEchartData() :Observable<Comunas_RM[]>{
    return this.httpClient.get<Comunas_RM[]>('assets/echart/all.json');
  }
}