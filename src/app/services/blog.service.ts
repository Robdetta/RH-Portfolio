import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  content?: string;
  markdownFile?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      id: 1,
      slug: 'react-state-management',
      title: 'Deep Dive: Optimizing React State Management with Zustand',
      category: 'Engineering',
      date: 'Oct 28, 2025',
      description:
        'An analysis of using lightweight state management tools to reduce boilerplate and improve component re-renders compared to older patterns.',
      markdownFile: 'assets/blog/react-state-management.md',
    },
    {
      id: 2,
      slug: 'technical-design-documents',
      title:
        'The Art of the Technical Design Document: From Idea to Implementation',
      category: 'Leadership',
      date: 'Sep 15, 2025',
      description:
        'How clear documentation and communication are crucial for team velocity and successful project handoffs. Showcases organizational skills.',
      markdownFile: 'assets/blog/technical-design-documents.md',
    },
    {
      id: 3,
      slug: 'webassembly-frontend',
      title: 'Exploring the Potential of WebAssembly in Modern Front-ends',
      category: 'Future Tech',
      date: 'Aug 01, 2025',
      description:
        'My first experiments compiling Rust to WASM and the performance improvements achieved in CPU-intensive tasks. Shows continuous learning!',
      markdownFile: 'assets/blog/webassembly-frontend.md',
    },
  ];

  constructor(private http: HttpClient) {}

  getAllPosts(): BlogPost[] {
    return this.posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }

  getLatestPosts(limit: number = 3): BlogPost[] {
    return this.getAllPosts().slice(0, limit);
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find((post) => post.slug === slug);
  }

  getMarkdownContent(markdownFile: string): Observable<string> {
    return this.http
      .get(markdownFile, { responseType: 'text' })
      .pipe(
        catchError(() =>
          of('# Post not found\n\nSorry, this blog post could not be loaded.'),
        ),
      );
  }

  addPost(post: BlogPost): void {
    post.id = Math.max(...this.posts.map((p) => p.id), 0) + 1;
    this.posts.push(post);
  }
}
