import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ServiceExperienciaService {
  ExperienciaURL = 'https://backendjcm.onrender.com/experiencia/'
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.ExperienciaURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.ExperienciaURL + `detail/${id}`)
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.ExperienciaURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.ExperienciaURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.ExperienciaURL + `delete/${id}`);
  }
}
