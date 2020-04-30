import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Data} from './data';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public getStudent(): Observable<Data[]> {
    return this.http.get<Data[]>("http://localhost:3000/student");

  }

}

