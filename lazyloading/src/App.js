import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';

// Lazy-loaded components
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
