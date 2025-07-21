import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({providedIn: 'root'})
export class GifsService {
    private http = Inject(HttpClient);

    // constructor(private http: HttpClient) {}
    loadTrendingGifs() {
      this.http.get(`${environment.giphyUrl}/gifs/trending`,{
        params: {
            api_key: environment.apiKey,
            limit: '20'
        }
      })  
    }
    
}