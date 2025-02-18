import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import FilteredPosts from './components/FilteredPosts';
import { PostsProvider } from './context/PostsContext';

const App = () => {
  return (
    <PostsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:pageNumber" element={<Home />} /> 
        <Route path="/tag/:hashtag" element={<FilteredPosts />} />
        <Route path="/tag/:hashtag/page/:pageNumber" element={<FilteredPosts />} /> 
      </Routes>
    </PostsProvider>
  );
};

export default App;