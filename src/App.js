import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsFeed from './components/Home Page Layout/NewsFeed';
import LawyerDetail from './components/LawyerDetail';
import Footer from './components/Home Page Layout/Footer';
import CreatePostContent from './components/Home Page Layout/CreatePostContent';
import CreatePost from './components/Home Page Layout/CreatePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsFeed />} />
        <Route path="/lawyer-detail" element={<LawyerDetail />} />
        <Route path="/create-post" element={<CreatePostContent />} />
      </Routes>
    
      <Footer className="mx-auto my-0" />
    </Router>
  );
}

export default App;
