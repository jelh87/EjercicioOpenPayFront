import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  URL_API = "http://localhost:8080/api/personajes";
  URL_API_DETALLE = "http://localhost:8080/api/personajes/";
  JWT = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqY2FiZWxsb2MiLCJleHAiOjE3MDYyNDA0OTksImlhdCI6MTcwNjIxMTY5OSwicm9sIjp7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9fQ.Fmd1TwJ8_zNXumbju2elHZnyHuSYoPbTvmdSKdzuHw8";

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.JWT)
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }

  getCharacter(id: string):Observable<any>{
    let head_obj = new HttpHeaders().set("Authorization", "bearer " + this.JWT)
    return this.http.get(this.URL_API_DETALLE+id)
    .pipe(map((data:any) => data.data.results));
  }

}
