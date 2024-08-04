import React, { useState } from 'react';
import axios from 'axios';

const BookSeat = () => {
  const [trainId, setTrainId] = useState('');
  const [seatNumber, setSeatNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/book', {
        trainId,
        seatNumber
      }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Seat booked successfully');
    } catch (error) {
      alert('Failed to book seat');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Book Seat</h2>
        <input
          type="text"
          placeholder="Train ID"
          value={trainId}
          onChange={(e) => setTrainId(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Seat Number"
          value={seatNumber}
          onChange={(e) => setSeatNumber(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Book Seat</button>
      </form>
    </div>
  );
};

export default BookSeat;
