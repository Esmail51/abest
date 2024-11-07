import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div id="footer" className="container">
      <div className="content-module">
        <div className="menu-list">
        <a onClick={()=>navigate('/')}>Home</a>
              <a onClick={()=>navigate('/aboutUs')}>About Us</a>
              <a onClick={()=>navigate('/products')}>Products</a>
              <a onClick={()=>navigate('/clients')}>Clients</a>
              <a onClick={()=>navigate('/services')}>Services</a>
              <a onClick={()=>navigate('/contact')}>Contact Us</a>
        </div>
        <div className="copyright-info">
          &copy; 2024. Aber Ahmed Equipment Est., Abu Dhabi, UAE
        </div>
      </div>
    </div>
  );
};

export default Footer;
