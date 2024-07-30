import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private apiUrl = 'http://localhost:5000/api/email'; 

  constructor(private http: HttpClient) {}

  updateTemplate(template: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/templates/${template.id}`, template);
  }
}