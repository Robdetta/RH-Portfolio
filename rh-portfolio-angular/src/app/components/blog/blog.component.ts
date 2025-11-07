import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: 'react-state-management',
      title: 'Deep Dive: Optimizing React State Management with Zustand',
      category: 'Engineering',
      date: 'Oct 28, 2025',
      description:
        'An analysis of using lightweight state management tools to reduce boilerplate and improve component re-renders compared to older patterns.',
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
    },
    {
      id: 3,
      slug: 'webassembly-frontend',
      title: 'Exploring the Potential of WebAssembly in Modern Front-ends',
      category: 'Future Tech',
      date: 'Aug 01, 2025',
      description:
        'My first experiments compiling Rust to WASM and the performance improvements achieved in CPU-intensive tasks. Shows continuous learning!',
    },
  ];
}
