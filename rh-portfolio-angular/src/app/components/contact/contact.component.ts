import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  email = 'robdetta@gmail.com';
  linkedinUrl = 'https://www.linkedin.com/in/robbie-hem-38805930/';
  githubUrl = 'https://github.com/Robdetta';

  copyEmail(): void {
    navigator.clipboard.writeText(this.email);
    alert('Email copied to clipboard!');
  }
}
