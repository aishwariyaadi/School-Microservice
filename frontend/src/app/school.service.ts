import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
export interface School {
  id?: number;
  name: string;
  location: string;
}
@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private writeservice = 'http://localhost:30009/api/schools';
  private readservice = 'http://localhost:30008/api/schools';

  constructor(private http: HttpClient) {}

  // Method to get all schools
  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(this.readservice);
  }

  // Method to add a new school
  addSchool(school: School): Observable<School> {
    return this.http.post<School>(this.writeservice, school, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
