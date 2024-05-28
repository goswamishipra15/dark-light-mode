import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Navbar from './components/Navbar';
import { ThemeProvider } from './theme-context';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
