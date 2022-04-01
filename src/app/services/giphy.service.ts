import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  baseURL = environment.apiGiphy;
  key = environment.apigiphyKey;

  constructor(private http: HttpClient) { }

  get(search: string): Observable<any> {
    return this.http.get(`${this.baseURL}${search}${this.key}`);
  }
}
