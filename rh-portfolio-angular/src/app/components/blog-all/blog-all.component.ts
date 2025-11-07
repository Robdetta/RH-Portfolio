import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
  selector: 'app-blog-all',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-all.component.html',
  styleUrl: './blog-all.component.css',
})
export class BlogAllComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    // Show ALL blog posts
    this.blogPosts = this.blogService.getAllPosts();
  }
}
