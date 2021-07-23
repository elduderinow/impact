import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Asteroid} from "./models/asteroid";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url:string = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-07-30&api_key=XmohfzUl7TDAmHjfPki0ZXJAwYp4VyaKqvfpWdFm"

  constructor(private http: HttpClient) {}

  getdata(){
    return this.http.get(this.url);
  }
}
