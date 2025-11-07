import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
    selector: 'app-blog',
    imports: [CommonModule, RouterModule],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    // Only show the 3 latest posts on the home page
    this.blogPosts = this.blogService.getLatestPosts(3);
  }
}
