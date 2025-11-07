# Portfolio File Structure Guide

## Understanding the File Organization

### 📁 Main Folders in `rh-portfolio-angular/src/app/`:

```
src/app/
├── components/        # All visual components go here
│   ├── hero/         # Hero section component
│   ├── blog/         # Blog list component
│   └── blog-detail/  # Individual blog post page
└── services/         # Services that provide data
    └── blog.service.ts
```

---

## Component Files Explained

### 1️⃣ **BLOG COMPONENT** (Shows list of blog posts)

Location: `src/app/components/blog/`

**Files:**

- `blog.component.ts` - The logic (TypeScript)
- `blog.component.html` - The visual layout (template)
- `blog.component.css` - The styles (if needed)

**What it does:** Displays a list of all blog posts on the home page

---

### 2️⃣ **BLOG DETAIL COMPONENT** (Shows single blog post)

Location: `src/app/components/blog-detail/`

**Files:**

- `blog-detail.component.ts` - The logic (TypeScript)
- `blog-detail.component.html` - The visual layout (template)
- `blog-detail.component.css` - The styles (if needed)

**What it does:** When you click a blog post, this shows the full article content

---

### 3️⃣ **BLOG SERVICE** (Stores all blog data)

Location: `src/app/services/blog.service.ts`

**What it does:**

- Holds all your blog post data (title, content, date, etc.)
- Makes it easy to add new blog posts
- Provides data to both blog and blog-detail components

---

## How They Connect

```
HOME PAGE
└─ app.component.html
   ├─ Header
   ├─ app-hero (shows intro)
   ├─ app-blog (shows list of 3 blog posts)
   │  └─ When you click "Read Article →"
   │     └─ Navigates to: /blog/react-state-management
   │        └─ Shows: blog-detail component
   │           └─ Gets data from: blog.service.ts
   └─ Footer
```

---

## File Edits Made

✅ **blog.component.ts** - Updated to use BlogService
✅ **blog-detail.component.ts** - Already set up correctly
✅ **blog-detail.component.html** - Already set up correctly
✅ **blog.service.ts** - Already set up correctly
✅ **app.routes.ts** - Added routing for `/blog/:slug`
✅ **angular.json** - Added `_redirects` file for Netlify
✅ **src/\_redirects** - Created for Netlify routing

---

## How to Add a New Blog Post

Edit: `src/app/services/blog.service.ts`

Find the `posts` array and add a new object:

```typescript
{
  id: 4,
  slug: 'my-new-post',  // URL slug (no spaces, use hyphens)
  title: 'My New Blog Post Title',
  category: 'Engineering',
  date: 'Nov 6, 2025',
  description: 'Brief description shown in the list',
  content: `
    <h2>Your Heading</h2>
    <p>Your paragraph text here</p>
    <h2>Another Section</h2>
    <p>More content...</p>
  `
}
```

That's it! The new post will automatically appear in the blog list and be clickable!

---

## Netlify Deployment

The `_redirects` file tells Netlify to redirect all routes to `index.html` so Angular can handle routing client-side. This file is automatically included in your build now.

---

## Testing Locally

Run: `ng serve`

- Click "Read Article →" on any blog post
- You should see the full post at `/blog/[post-slug]`
- Click "Back to Blog" to go back to the list
