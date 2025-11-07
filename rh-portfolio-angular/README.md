# RhPortfolioAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## How to Add a New Blog Post

Step 1: Create the Markdown File
Create a new .md file in src/assets/blog/ folder.

Naming convention: Use lowercase with hyphens (e.g., my-blog-post.md)

Example file: src/assets/blog/my-blog-post.md

# My Awesome Blog Post Title

This is the introduction paragraph. Write your opening thoughts here.

## Section 1: Getting Started

Describe the first topic here. You can write as much as you want.

```typescript
// Code blocks work too!
const example = 'Hello World';
console.log(example);
```

## Section 2: Key Points

- Point 1
- Point 2
- Point 3

## Conclusion

Wrap up your post with final thoughts.

## Step 2: Add Entry to Blog Service

Update src/app/services/blog.service.ts and add a new object to the posts array:

private posts: BlogPost[] = [
// ... existing posts ...
{
id: 4,
slug: 'my-blog-post', // Use the filename without .md
title: 'My Awesome Blog Post Title', // Same as your markdown H1
category: 'Engineering', // Choose: Engineering, Leadership, Future Tech, etc.
date: '2025-11-07', // Use ISO format: YYYY-MM-DD
description: 'Short description that appears on the blog list page.',
markdownFile: 'assets/blog/my-blog-post.md' // Must match your filename
}
];

Quick Reference
Field What it does Example
id Unique number 4
slug URL-friendly name my-blog-post
title Post title My Awesome Blog Post Title
category Post category Engineering
date Publication date (YYYY-MM-DD) 2025-11-07
description Summary for blog list Short description...
markdownFile Path to markdown file assets/blog/my-blog-post.md

How to add a new project

{
id: 4,
title: 'Your New Project Title',
description: 'Your project description here',
image: 'assets/projects/new-project.jpg',
technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
githubUrl: 'https://github.com/Robdetta/your-project',
liveUrl: 'https://your-project-demo.com' // optional
}
