import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { BlogPost } from '../../models/portfolio.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  loading = true;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getBlogPosts().subscribe({
      next: (data) => {
        this.blogPosts = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading blog posts:', error);
        this.loading = false;
      }
    });
  }
}
