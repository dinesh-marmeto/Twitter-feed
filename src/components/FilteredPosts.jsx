import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'; 
import { PostsContext } from '../context/PostsContext';
import Post from './Post/post';
import PaginationControls from './PaginationControls/PaginationControls';

const FilteredPosts = () => {
  const { hashtag } = useParams(); 
  const { posts, likedPosts, likePost, currentPage, goToPage, totalPosts, postsPerPage } =
    useContext(PostsContext);

  
  const filteredPosts = posts.filter((post) =>
    post.content.includes(`#${hashtag}`)
  );

  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

 
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div>
      {currentPosts.length > 0 ? (
        currentPosts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onLike={likePost}
          />
        ))
      ) : (
        <p>No posts found for #{hashtag}.</p>
      )}

     
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  );
};

export default FilteredPosts;