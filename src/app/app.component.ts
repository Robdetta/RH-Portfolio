import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HeroComponent } from './components/hero/hero.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule,
    HeroComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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

  goHome(): void {
    if (this.router.url === '/') {
      // Already on home page, scroll to home section
      this.scrollToElement('home');
    } else {
      // Navigate to home page and scroll to home section
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement('home');
        }, 100);
      });
    }
    this.closeMobileMenu();
  }

  scrollToSection(sectionId: string): void {
    if (this.router.url !== '/') {
      // Navigate to home first, then scroll
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement(sectionId);
        }, 100);
      });
    } else {
      // Already on home, just scroll
      this.scrollToElement(sectionId);
    }
    this.closeMobileMenu();
  }

  private scrollToElement(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
