# Quick Reference: Where Each File Is

## 📍 Blog Component Files

### File 1: `src/app/components/blog/blog.component.ts`

```typescript
// This is where the LOGIC for the blog list is
import { BlogService } from '../../services/blog.service';

export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    // Get all posts from the service
    this.blogPosts = this.blogService.getAllPosts();
  }
}
```

### File 2: `src/app/components/blog/blog.component.html`

```html
<!-- This is where the LAYOUT of the blog list is -->
<section
  id="blog"
  class="py-20 border-t border-tertiary"
>
  <h2>Latest Insights & Blog</h2>

  <!-- Loop through all blog posts -->
  <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    <div *ngFor="let post of blogPosts">
      <h3>{{ post.title }}</h3>
      <!-- Link to individual post -->
      <a [routerLink]="['/blog', post.slug]"> Read Article → </a>
    </div>
  </div>
</section>
```

---

## 📍 Blog Detail Component Files

### File 3: `src/app/components/blog-detail/blog-detail.component.ts`

```typescript
// This is where the LOGIC for showing ONE blog post is
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

export class BlogDetailComponent implements OnInit {
  post: BlogPost | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) {}

  ngOnInit(): void {
    // Get the slug from the URL (e.g., /blog/react-state-management)
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      // Find the post with that slug
      this.post = this.blogService.getPostBySlug(slug);
    });
  }
}
```

### File 4: `src/app/components/blog-detail/blog-detail.component.html`

```html
<!-- This is where the LAYOUT of ONE blog post is -->
<section class="py-20 min-h-screen">
  <div *ngIf="post">
    <a routerLink="/blog">← Back to Blog</a>

    <article>
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>

      <!-- Display the full content -->
      <div [innerHTML]="post.content"></div>
    </article>
  </div>
</section>
```

---

## 📍 Blog Service File

### File 5: `src/app/services/blog.service.ts`

```typescript
// This is where ALL blog post DATA is stored
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
      description: 'An analysis of using lightweight state management...',
      content: `<h2>Introduction</h2><p>...</p>`, // Full HTML content
    },
    // ADD MORE POSTS HERE
  ];

  getAllPosts(): BlogPost[] {
    return this.posts;
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find((post) => post.slug === slug);
  }
}
```

---

## 📍 Routing File

### File 6: `src/app/app.routes.ts`

```typescript
// This tells Angular which component to show for each URL
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

export const routes: Routes = [
  {
    path: 'blog/:slug', // URL: /blog/react-state-management
    component: BlogDetailComponent, // Show this component
  },
];
```

---

## 📍 Netlify Configuration

### File 7: `src/_redirects`

```
/* /index.html 200
```

This file tells Netlify to handle all routes through Angular

---

## Flow Diagram

```
USER CLICKS LINK
    ↓
Browser goes to: /blog/react-state-management
    ↓
Angular routing (app.routes.ts) catches it
    ↓
Loads: BlogDetailComponent
    ↓
Component gets "react-state-management" slug from URL
    ↓
Calls: blogService.getPostBySlug('react-state-management')
    ↓
BlogService finds that post in the posts array
    ↓
Component displays the post using the HTML template
```

---

## Summary

| File                         | Purpose               | Edit this to...       |
| ---------------------------- | --------------------- | --------------------- |
| `blog.service.ts`            | Stores all blog data  | Add new blog posts    |
| `blog.component.ts`          | Logic for blog list   | (Usually don't edit)  |
| `blog.component.html`        | Layout of blog list   | Change how list looks |
| `blog-detail.component.ts`   | Logic for single post | (Usually don't edit)  |
| `blog-detail.component.html` | Layout of single post | Change how post looks |
| `app.routes.ts`              | URL routing           | Add new routes        |
| `_redirects`                 | Netlify config        | (Don't edit for blog) |

Place your image in the assets folder:
For example:
src/assets/blog/cat-detection.jpg

Reference it in your markdown file:
![Cat Detection Example](assets/blog/cat-detection.jpg)

The path should be relative to the src folder, so assets/blog/your-image.jpg works.
Optional: Add captions or adjust size with HTML if needed:
<img src="assets/blog/cat-detection.jpg" alt="Cat Detection Example" width="600" />

<figcaption>Frigate detecting a cat in the living room.</figcaption>
