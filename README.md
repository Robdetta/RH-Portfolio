# Robbie Hem's Portfolio Website

A modern, responsive portfolio website built with Angular 20, Tailwind CSS, and ngx-markdown.

## 🚀 Quick Start

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

### Build for Production

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

---

## 📋 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── hero/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   ├── blog-all/
│   │   ├── blog-detail/
│   │   └── contact/
│   ├── services/
│   │   ├── blog.service.ts
│   │   └── portfolio.service.ts
│   └── app.component.ts
├── assets/
│   ├── blog/          # Markdown files for blog posts
│   └── images/        # Project screenshots
└── favicon.svg        # Browser tab icon
```

---

## 📝 Blog Posts

### Adding a New Blog Post

#### Step 1: Create Markdown File

Create a new `.md` file in `src/assets/blog/`

**Naming convention:** lowercase with hyphens (e.g., `my-blog-post.md`)

Example: `src/assets/blog/angular-tips.md`

````markdown
# Angular Tips and Tricks

This is the introduction paragraph.

## Getting Started

Describe the first topic here.

### Code Example

```typescript
// Code blocks work too!
const example = 'Hello World';
console.log(example);
```
````

## Key Points

- Point 1
- Point 2
- Point 3

## Conclusion

Final thoughts here.

````

#### Step 2: Add to Blog Service

Update `src/app/services/blog.service.ts` - add to the `posts` array:

```typescript
{
  id: 4,
  slug: 'angular-tips',                    // filename without .md
  title: 'Angular Tips and Tricks',        // same as markdown H1
  category: 'Engineering',                 // Engineering, Leadership, Future Tech
  date: '2025-11-08',                      // ISO format: YYYY-MM-DD
  description: 'Useful tips for Angular development.',
  markdownFile: 'assets/blog/angular-tips.md'
}
````

#### Blog Post Fields Reference

| Field          | Purpose                       | Example                                |
| -------------- | ----------------------------- | -------------------------------------- |
| `id`           | Unique identifier             | `4`                                    |
| `slug`         | URL-friendly name             | `angular-tips`                         |
| `title`        | Post title                    | `Angular Tips and Tricks`              |
| `category`     | Post category                 | `Engineering`                          |
| `date`         | Publication date (YYYY-MM-DD) | `2025-11-08`                           |
| `description`  | Summary for blog list         | `Useful tips for Angular development.` |
| `markdownFile` | Path to markdown file         | `assets/blog/angular-tips.md`          |

#### ✨ Features

- ✅ Latest 3 posts auto-display on home page
- ✅ All posts available at `/blog` route
- ✅ Posts auto-sort by date (newest first)
- ✅ Full markdown support with syntax highlighting
- ✅ Responsive design

---

## 🎨 Portfolio Projects

### Adding a New Project

Update `src/app/services/portfolio.service.ts` - add to the `projects` array:

```typescript
{
  id: 5,
  title: 'Your Project Title',
  description: 'Detailed project description goes here.',
  image: 'assets/images/my-project.jpg',
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  githubUrl: 'https://github.com/Robdetta/my-project',
  liveUrl: 'https://my-project-demo.com'  // optional
}
```

#### Project Fields Reference

| Field          | Purpose                   | Example                                   |
| -------------- | ------------------------- | ----------------------------------------- |
| `id`           | Unique identifier         | `5`                                       |
| `title`        | Project name              | `My Awesome Project`                      |
| `description`  | Project details           | `Description of what the project does...` |
| `image`        | Screenshot path           | `assets/images/my-project.jpg`            |
| `technologies` | Tech stack                | `['React', 'Node.js']`                    |
| `githubUrl`    | GitHub repository         | `https://github.com/Robdetta/...`         |
| `liveUrl`      | Live demo link (optional) | `https://example.com`                     |

#### ✨ Features

- ✅ Responsive grid layout (1-3 columns)
- ✅ Project images with fallback placeholder
- ✅ Links to GitHub and live demos
- ✅ Technology stack display
- ✅ Hover effects

---

## 🏠 Current Projects

### 1. BrewTrail

**Social media platform for brewery reviews**

- Live: https://brewtrail.robbiehem.dev
- GitHub: https://github.com/Robdetta/brewtrail
- Tech: React, Node.js, PostgreSQL, Open Brewery API

### 2. DeckroidVania

**2.5D action-adventure game**

- GitHub: https://github.com/Robdetta/DeckroidVania
- Tech: Godot, C#

### 3. Catte

**Online multiplayer card game**

- GitHub: https://github.com/Robdetta/Catte
- Tech: JavaScript, WebSockets, HTML5, CSS3

### 4. Typing Game

**Interactive typing speed test**

- GitHub: https://github.com/Robdetta/Typing-Game
- Tech: JavaScript, HTML5, CSS3

---

## 👤 Contact Section

The contact section includes:

- ✉️ Email: `robdetta@gmail.com`
- 💼 LinkedIn: Professional profile link
- 🐙 GitHub: Code repository link
- 📋 Copy-to-clipboard functionality

---

## 🛠️ Available Commands

```bash
# Development server
ng serve

# Build production
ng build

# Generate new component
ng generate component component-name

# Generate new service
ng generate service service-name

# Run unit tests
ng test

# Run end-to-end tests
ng e2e
```

---

## 📦 Technologies

- **Angular 20** - Frontend framework
- **Tailwind CSS** - Styling
- **ngx-markdown** - Markdown rendering
- **TypeScript** - Language
- **Netlify** - Hosting & deployment

---

## 🚀 Deployment

This site is deployed on **Netlify** at `robbiehem.dev`

The `_redirects` file handles client-side routing for single-page application.

### Deploy Steps

1. Commit changes to Git
2. Push to main branch
3. Netlify auto-deploys from GitHub

---

## 📄 License

Copyright © 2025 Robbie Hem. All rights reserved.

---

## 🔗 Links

- **Portfolio:** https://robbiehem.dev
- **GitHub:** https://github.com/Robdetta
- **LinkedIn:** https://www.linkedin.com/in/robbie-hem-38805930/
- **Email:** robdetta@gmail.com
