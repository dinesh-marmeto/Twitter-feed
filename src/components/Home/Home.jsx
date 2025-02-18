import React, { useContext } from 'react';
import { PostsContext } from '../../context/PostsContext';
import Post from '../Post/post';
import './Home.css'
import PaginationControls from '../PaginationControls/PaginationControls';

const Home = () => {
  const { posts, likedPosts, likePost, currentPage, goToPage, totalPosts, postsPerPage } =
    useContext(PostsContext);

 
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div>
     
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={likePost}
        />
      ))}

      
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  );
};

export default Home;