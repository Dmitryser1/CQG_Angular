import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../item-card/item.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = "http://localhost:3000"
  
  constructor(private http: HttpClient) { }

  getPackages(): Observable<Item[]>{
    return this.http.get<Item[]>(`${this.apiUrl}/packages`)
  }

  getDependencies(id : string):Observable<string[]>{
    return this.http.get<string[]>(`${this.apiUrl}/packages/${id}/dependencies`)
  }
}
