import React from 'react';
import img1 from '../assets/images/pic10.png'
import img2 from '../assets/images/pic11.png'
import img3 from '../assets/images/pic9.png';

const ContactUs = () => {
  return (
    <div id="content-container" className="container">
      <div className="content-module">
        <div className="left-side-block">
          <div className="block-content company-images">
            <img src={img1} alt="Company Image 1" />
          </div>
          <div className="block-content company-images">
            <img src={img2} alt="Company Image 2" />
          </div>
          <div className="block-content company-images">
            <img src={img3} alt="Company Image 3" />
          </div>
        </div>
        <div className="left-main-block">
          <h1 className="page-title">Contact Us</h1>

          <div className="block-content">
            <h3 className="content-title">Office Address</h3>
            <div className="content-data company-address">
              <span style={{ float: 'right', textAlign: 'right' }}>
                <b style={{ color: '#aaaaaa' }}>E-mail:</b>{' '}
                <a href="mailto:sales@abest.ae">sales@abest.ae</a>
                <br />
                <b style={{ color: '#aaaaaa' }}>Tel:</b> +971 2 6766366 <br />
                <b style={{ color: '#aaaaaa' }}>Fax:</b> +971 2 6760360 <br />
              </span>
              <b>Aber Ahmed Equipment Est. (ABEST)</b>
              <br />
              Flat No. 708, 7th Floor, Al Ghaith Tower <br />
              (Land Mark: Day to Day Hyper Market) <br />
              P.O. Box: 43596 <br />
              Hamdan Bin Mohammed Street <br />
              Sector: E8, Zone: Al Danah <br />
              Abu Dhabi, U.A.E. <br />
            </div>
          </div>

          <br />

          <div className="block-content">
            <h3 className="content-title">Service Department Address</h3>
            <div className="content-data company-address">
              <span style={{ float: 'right', textAlign: 'right' }}>
                <b style={{ color: '#aaaaaa' }}>E-mail:</b>{' '}
                <a href="mailto:service@abest.ae">service@abest.ae</a>
                <br />
                <b style={{ color: '#aaaaaa' }}>Tel:</b> +971 2 5547977 <br />
                <b style={{ color: '#aaaaaa' }}>Fax:</b> +971 2 5547479 <br />
              </span>
              <b>Aber Ahmed Equipment Est. (ABEST)</b>
              <br />
              P.O. Box: 43596 <br />
              M15, Mussafah Industrial Area <br />
              Building 3, Plot 7 <br />
              Abu Dhabi, U.A.E. <br />
              <div className="clear"></div>
            </div>
          </div>

          <div className="clear"></div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
};

export default ContactUs;
