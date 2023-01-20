import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Photo } from '../models/photos.model';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  http = inject(HttpClient);
  #baseUrl = 'https://jsonplaceholder.typicode.com';
  photos$ = this.http.get<Photo[]>(`${this.#baseUrl}/photos?_page=1&_limit=10`);
}
