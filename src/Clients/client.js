import img1 from '../assets/images/pic10.png'
import img2 from '../assets/images/pic11.png'
import img3 from '../assets/images/pic9.png';
import img4 from '../assets/images/client-aadc.jpg';
import img10 from '../assets/images/client-adco.png';
import img5 from '../assets/images/client-adgas.png';
import img6 from '../assets/images/client-adma-opco.png';
import img7 from '../assets/images/client-adnoc-distribution.png';
import img9 from '../assets/images/client-etisalat.png';
import img12 from '../assets/images/client-gasco.png';
import img11 from '../assets/images/client-ras-al-khaimah.jpg';
import '../Header/header.css'
const ClientComponent = () => {
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
          <h1 className="page-title">Our Clients</h1>
          <table className="clients-table">
            <tbody>
              <tr>
                <td className="c-logo">
                  <div className="logo-box">
                    <img src={img4} alt="ADCO Logo" />
                  </div>
                </td>
                <td className="c-details">
                  <span className="inner-title">Abu Dhabi Company For Onshore Oil Operations (ADCO)</span>
                </td>
              </tr>
              <tr>
                <td className="c-logo">
                  <div className="logo-box">
                    <img src={img5} alt="ADGAS Logo" />
                  </div>
                </td>
                <td className="c-details">
                  <span className="inner-title">Abu Dhabi Gas Liquefaction Co. Ltd (ADGAS)</span>
                </td>
              </tr>
              <tr>
                <td className="c-logo">
                  <div className="logo-box">
                    <img src={img6} alt="AADC Logo" />
                  </div>
                </td>
                <td className="c-details">
                  <span className="inner-title">Al Ain Distribution Company (AADC)</span>
                </td>
              </tr>
              <tr>
                <td className="c-logo">
                  <div className="logo-box">
                    <img src={img7} alt="ADMA-OPCO Logo" />
                  </div>
                </td>
                <td className="c-details">
                  <span className="inner-title">Abu Dhabi Marine Operating Company (ADMA-OPCO)</span>
                </td>
              </tr>
              <tr>
                <td className="c-logo">
                  <div className="logo-box">
                    <img src={img4} alt="ADNOC Logo" />
                  </div>
                </td>
                <td className="c-details">
                  <span className="inner-title">Abu Dhabi National Oil Company Distribution (ADNOC)</span>
                </td>
              </tr>
              <tr>
                <td className="c-logo">
                  <div className="logo-box">
                    <img src={img9} alt="FERTIL Logo" />
                  </div>
                </td>
                <td className="c-details">
                  <span className="inner-title">Ruwais Fertilizer Industries (FERTIL)</span>
                </td>
              </tr>
              <tr>
                <td className="c-logo">
                  <div className="logo-box">
                    <img src={img10} alt="GASCO Logo" />
                  </div>
                </td>
                <td className="c-details">
                  <span className="inner-title">Abu Dhabi Gas Industries Ltd. (GASCO)</span>
                </td>
              </tr>
              <tr>
                <td className="c-logo">
                  <div className="logo-box">
                    <img src={img11} alt="TAKREER Logo" />
                  </div>
                </td>
                <td className="c-details">
                  <span className="inner-title">Abu Dhabi Oil Refining Company (TAKREER)</span>
                </td>
              </tr>
              <tr>
                <td className="c-logo">
                  <div className="logo-box">
                    <img src={img12} alt="NDC Logo" />
                  </div>
                </td>
                <td className="c-details">
                  <span className="inner-title">National Drilling Company (NDC)</span>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
)
}

export default ClientComponent