import './App.css';
import Index from './components/Index'
import Search from './components/Search'
import NewFeeds from './components/NewFeeds'
import Login from './components/Login'
import Aboutus from './components/Aboutus'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="Search" element={<Search />} />
        <Route path="NewFeeds" element={<NewFeeds />} />
        <Route path="Login" element={<Login />} />
        <Route path="Aboutus" element={<Aboutus />} />
      </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
