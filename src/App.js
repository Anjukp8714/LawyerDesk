import NewsFeed from "./components/Home Page Layout/NewsFeed";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LawyerDetail from './components/LawyerDetail';
import Footer from "./components/Home Page Layout/Footer";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NewsFeed />} />
      <Route path="/lawyer-detail" element={<LawyerDetail />} />
    </Routes>
    <Footer  className=" mx-auto my-0"/>
  </BrowserRouter>
  );
}

export default App;
