import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminPanel from './components/AdminPanel';
import SearchTrains from './components/SearchTrains';
import BookSeat from './components/BookSeat';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between">
            <div className="text-white">
              <Link to="/search-trains" className="mr-4">Search Trains</Link>
              <Link to="/book-seat" className="mr-4">Book Seat</Link>
              <Link to="/admin" className="mr-4">Admin Panel</Link>
            </div>
            <div>
              <Link to="/login" className="text-white mr-4">Login</Link>
              <Link to="/register" className="text-white">Register</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/search-trains" element={<SearchTrains />} />
          <Route path="/book-seat" element={<BookSeat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
