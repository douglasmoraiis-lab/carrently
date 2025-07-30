// src/App.tsx
import React from 'react';
import Header from './components/Header';
import './index.css'; // Certifique-se de que o Tailwind CSS está configurado
import BookingForm from './components/BookingForm';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <BookingForm  />
      <main>
      </main>
    </div>
  );
}

export default App;