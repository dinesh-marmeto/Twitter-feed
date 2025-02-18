import React, { createContext, useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import postsData from '../data/posts.json';
import axios from 'axios'

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  
  useEffect(() => {
    const fetchPosts = async () => {
      const cachedPosts = sessionStorage.getItem('posts');
      if (cachedPosts) {
        setPosts(JSON.parse(cachedPosts));
        return;
      }
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        const fetchedPosts = response.data.posts;
        let avatarId = 1;
        
        const formattedPosts = fetchedPosts.map((post) => {
          const tagsString = post.tags.map((tag) => `#${tag}`).join(' ');
          const contentWithTags = `${post.body}\n${tagsString}`;

          const formattedPost = {
            id: post.id,
            profilePicture: `https://i.pravatar.cc/50?img=${avatarId}`, 
            profileName: `User ${post.userId}`,
            username: `user${post.userId}`,
            timestamp: `${post.id}h ago`,
            content: contentWithTags, 
            image: `https://picsum.photos/seed/${avatarId}/500/300`, 
            likes: post.reactions['likes'],
          };

          avatarId = avatarId < 70 ? avatarId + 1 : 1;
          return formattedPost;
        });
        sessionStorage.setItem('posts', JSON.stringify(formattedPosts));
        setPosts(formattedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/page/') || path.startsWith('/tag/')) {
      const pageNumber = parseInt(path.split('/page/')[1] || 1, 10);
      setCurrentPage(pageNumber);
    }
  }, [location]);

  const likePost = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = useMemo(() => posts.slice(indexOfFirstPost, indexOfLastPost), [posts, currentPage]);
  
  const goToPage = (pageNumber) => {
    if (location.pathname.startsWith('/tag/')) {
      const hashtag = location.pathname.split('/tag/')[1].split('/')[0];
      navigate(`/tag/${hashtag}/page/${pageNumber}`);
    } else {
      navigate(`/page/${pageNumber}`);
    }
  };

  const value = {
    posts: currentPosts,
    likedPosts,
    likePost,
    currentPage,
    goToPage,
    totalPosts: posts.length,
    postsPerPage,
  };

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostsContext, PostsProvider };