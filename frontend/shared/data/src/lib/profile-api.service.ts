import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../lib/models/profile.model'; 

@Injectable({
  providedIn: 'root',
})
export class ProfileApiService {
  private apiUrl = 'https://localhost:8082/api/v1/profile'; 

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.apiUrl);
  }
}
