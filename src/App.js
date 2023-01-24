import React from 'react';
import './App.css';
import { Header } from './layout/Header';
import Routing from './routing/Routing';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routing />
      {/* <Footer /> */}
    </div>
  );
};
