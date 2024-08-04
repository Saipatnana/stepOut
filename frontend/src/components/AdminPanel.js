import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [name, setName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/admin/trains', {
        name,
        source,
        destination,
        availableSeats
      }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Train added successfully');
    } catch (error) {
      alert('Failed to add train');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Train</h2>
        <input
          type="text"
          placeholder="Train Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
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
        <input
          type="number"
          placeholder="Available Seats"
          value={availableSeats}
          onChange={(e) => setAvailableSeats(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Train</button>
      </form>
    </div>
  );
};

export default AdminPanel;
