import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookstall } from '../models/bookstall';

@Injectable({
  providedIn: 'root'
})
export class BookstallService {
   private baseurl="https://sheetdb.io/api/v1/wg9i3dbhua8gh"
 
   constructor(private http:HttpClient){}

   onsumbit():Observable<Bookstall[]>{
  return this.http.get<Bookstall[]>(this.baseurl);
   }
}
