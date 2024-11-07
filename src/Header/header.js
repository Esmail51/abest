import './header.css'
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    return (
      <>
        <div id="header" className="container">
          <div className="content-module">
            <div className="banner-area"></div>
          </div>
        </div>
        <div id="navigator" className="container">
          <div className="content-module">
            <div className="nav-items-list">
              <a onClick={()=>navigate('/')}>Home</a>
              <a onClick={()=>navigate('/aboutUs')}>About Us</a>
              <a onClick={()=>navigate('/products')}>Products</a>
              <a onClick={()=>navigate('/clients')}>Clients</a>
              <a onClick={()=>navigate('/services')}>Services</a>
              <a onClick={()=>navigate('/contact')}>Contact Us</a>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Header;
  