import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HeroComponent } from './components/hero/hero.component';
import { BlogComponent } from './components/blog/blog.component';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterModule,
        MarkdownModule,
        HeroComponent,
        BlogComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Your Portfolio';
  isMobileMenuOpen = false;
  isBlogDetailPage = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isBlogDetailPage = this.router.url.startsWith('/blog');
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
