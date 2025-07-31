import React from 'react';
import Header from './components/Header';
import './index.css'; // C
import BookingForm from './components/BookingForm';
import Footer from './components/footer';
import Carousel from './components/carousel';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <BookingForm  />
      <Carousel/>
      <Footer/>

      <main>
      </main>
    </div>
  );
}

export default App;