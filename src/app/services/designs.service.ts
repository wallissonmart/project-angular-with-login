import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllDesigns } from '../models/AllDesigns';

@Injectable({
  providedIn: 'root',
})
export class DesignsService {
  private apiUrL = 'https://api.trakto.io';

  constructor(private http: HttpClient) {}

  listLast10Designs(token: string): Observable<AllDesigns> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<AllDesigns>(
      `${this.apiUrL}/document?total_per_page=10&order_by=updated_at&order_orientation=desc`,
      { headers }
    );
  }

  listAllDesigns(token: string): Observable<AllDesigns> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<AllDesigns>(
      `${this.apiUrL}/document?order_by=created_at&order_orientation=desc`,
      { headers }
    );
  }

  getSingleDesign(token: string, id: string): Observable<any> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${this.apiUrL}/document:${id}`, { headers });
  }
}
