import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Students from './pages/Student';
import Courses from './pages/Course';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/students" 
              element={<Students />}
            />
            <Route 
              path="/courses" 
              element={<Courses />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

