import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostsContext } from "../../context/PostsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"; 
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"; 
import "./Post.css";

const Post = ({ post, onLike }) => {
  const { likedPosts } = useContext(PostsContext);
  const navigate = useNavigate();

  const renderHashtags = (content) => {
    return content.split(/(\s+)/).map((word, index) => {
      if (word.startsWith("#")) {
        return (
          <a
            key={index}
            href={`/tag/${word.slice(1)}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/tag/${word.slice(1)}`);
            }}
            className="hashtag"
          >
            {word}
          </a>
        );
      }
      return word;
    });
  };

  return (
    <div className="post-container">
      <img src={post.profilePicture} alt="Profile" className="profile-pic" />
      <div className="post-content">
        <div className="post-header">
          <span className="profile-name">{post.profileName}</span>
          <span className="username">
            @{post.username} · {post.timestamp}
          </span>
        </div>
        <p className="post-text">{renderHashtags(post.content)}</p>
        {post.image && (
          <img src={post.image} alt="Post" className="post-image" />
        )}
        <div className="post-actions">
          <button
            onClick={() => onLike(post.id)}
            className="like-button"
            style={{
              color: likedPosts[post.id] ? "red" : "gray",
            }}
          >
            <FontAwesomeIcon
              icon={likedPosts[post.id] ? solidHeart : regularHeart}
              style= {{ marginRight: '5px' }}
            />
            {post.likes + (likedPosts[post.id] ? 1 : 0)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
