import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/header';
import HomeComponent from './Home/home';
import ServicesComponent from './Services/services';
import AboutComponent from './About/about';
import PrincipalComponent from './Principals/principals';
import ClientComponent from './Clients/client';
import ContactUs from './Contact/contact';
import Footer from './Footer/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/aboutUs" element={<AboutComponent />} />
        <Route path="/services" element={<ServicesComponent />} />
        <Route path="/products" element={<PrincipalComponent />} />
        <Route path="/clients" element={<ClientComponent />} />
        <Route path="/contact" element={<ContactUs />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
