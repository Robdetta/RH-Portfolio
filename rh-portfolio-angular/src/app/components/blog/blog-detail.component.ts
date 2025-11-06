import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { BlogPost } from '../../models/portfolio.model';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;
  loading = true;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.loadBlogPost(slug);
    });
  }

  loadBlogPost(slug: string) {
    this.portfolioService.getBlogPosts().subscribe({
      next: (posts) => {
        this.post = posts.find(p => p.slug === slug) || null;
        if (!this.post) {
          this.notFound = true;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading blog post:', error);
        this.notFound = true;
        this.loading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/#blog']);
  }
}
