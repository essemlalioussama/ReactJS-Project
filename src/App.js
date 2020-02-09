import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">

      <Header branding="Contact Manager" />
      <div className="container">
        <Contact name="Essemlali Oussama" email="o.essemlali@gmail.com" number="0617097894" />
        <Contact name="Asmae Kaouissi" email="kaouissi.univers@gmail.com" number="0617097894" />
      </div>
    </div>
  );
}

export default App;
