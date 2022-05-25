import './App.css';
import Index from './components/Index'
import Search from './components/Search'
import NewFeeds from './components/NewFeeds'
import Login from './components/Login'
import Aboutus from './components/Aboutus'
import Register from './components/Register'
import Favourite from './components/Favourite'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faFontAwesome)
function App() {
  return (
    <>
      <div className="container"><BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="Search" element={<Search />} />
          <Route path="NewFeeds" element={<NewFeeds />} />
          <Route path="Login" element={<Login />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="Register" element={<Register />} />
          <Route path="Favourite" element={<Favourite />} />
        </Routes>
      </BrowserRouter></div>

    </>

  );
}

export default App;
