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


## link
https://twitter-feeds.netlify.app/
