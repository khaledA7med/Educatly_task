import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<any> {
    return this.http.get<any>('https://dev.to/api/articles');
  }
}
