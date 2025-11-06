import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, BlogPost } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/assets/data/projects.json');
  }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('/assets/data/blog-posts.json');
  }

  getBlogPostBySlug(slug: string): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('/assets/data/blog-posts.json');
  }
}
