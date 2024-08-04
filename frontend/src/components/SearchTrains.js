import React, { useState } from 'react';
import axios from 'axios';

const SearchTrains = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [trains, setTrains] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/user/trains', {
        params: { source, destination },
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setTrains(response.data);
    } catch (error) {
      alert('Failed to fetch trains');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Search Trains</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Search</button>
        </form>
        {trains.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Available Trains</h3>
            <ul>
              {trains.map((train) => (
                <li key={train.id} className="mb-4 p-4 border border-gray-300 rounded">
                  <h4 className="text-lg font-bold">{train.name}</h4>
                  <p>Source: {train.source}</p>
                  <p>Destination: {train.destination}</p>
                  <p>Available Seats: {train.availableSeats}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTrains;
