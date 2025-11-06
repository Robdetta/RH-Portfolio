import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email = 'your-email@example.com';
  socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/robbie-hem-38805930/', icon: 'fab fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/Robdetta', icon: 'fab fa-github' },
    { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: 'fab fa-twitter' }
  ];
}
