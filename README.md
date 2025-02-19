# Twitter-Like Post Feed with Hashtag Filtering

## Overview
This project is a Twitter-like social media post feed built using Vite and React. Users can view, like, and filter posts based on hashtags. The application supports pagination, browser back button functionality, and state persistence.

## Features

### 1. Post Structure
Each post contains:
- Profile Picture
- Profile Name & Username
- Timestamp
- Post Content (Text + Hashtags)
- Optional Image
- Like Button (Toggle Likes)

### 2. Functionality
- **Like Button**: Clicking increases the like count; clicking again removes it.
- **Hashtag Filtering**: Clicking on a hashtag (e.g., #react, #shopify) filters posts with that hashtag.
- **Pagination**: Displays 10 posts per page with pagination controls.
- **Browser Back Button Support**:
  - If a user filters by a hashtag and navigates back, the previous state is restored.
  - If a user is on page 3 and presses back, they return to page 2, maintaining scroll position.

### 3. State Management
- Uses Context API for managing post state.
- Persists like counts & selected filters using local storage.

### 4. Routing & Navigation
Implemented with React Router:
- `/` → Default post feed
- `/tag/react` → Filtered posts with `#react`
- `/page/2` → Second page of posts
- URL updates dynamically based on user actions.

## Installation & Setup
### Prerequisites
- Node.js installed
- Package manager (npm or yarn)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```
2. Navigate to the project folder:
   ```bash
   cd repository-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the app in the browser:
   ```
   http://localhost:5173
   ```

## Deployment
- Deploy on [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or GitHub Pages.
- Ensure all features work before submitting the deployed link.

## Code Quality & Best Practices
- Proper state management & separation of concerns
- Clean folder structure & modular components

## Bonus Features
- Lazy Load Images for performance optimization
- Dark Mode Support

## Timeline
- **Deadline**: 4 Days from Task Assignment

## Evaluation Criteria
| Criteria | Weightage |
|----------|-----------|
| Functionality (Likes, Filtering, Pagination, URL Handling) | 30% |
| UI & UX (Responsiveness, Smooth Navigation) | 20% |
| State Management (Efficiency & Persistence) | 20% |
| Performance Optimization (Lazy Loading, Debouncing) | 15% |
| Code Quality (Best Practices, Modular Components) | 10% |
| Deployment & Documentation | 5% |

## link
https://twitter-feeds.netlify.app/
