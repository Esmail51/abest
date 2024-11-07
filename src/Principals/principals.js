
import './principal.css'
import img1 from '../assets/images/pic10.png'
import img2 from '../assets/images/pic11.png'
import img3 from '../assets/images/pic9.png'
import img4 from '../assets/images/gemco.png'
import img5 from '../assets/images/hobre.png'
import img6 from '../assets/images/jmcanty.jpg'
import img7 from '../assets/images/hobre.png'
import img8 from '../assets/images/mettler-toledo.jpg'
import img9 from '../assets/images/pic10.png'





const PrincipalComponent = () => {
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
            <table className="principals-table">
              <tbody>
                <tr>
                  <td className="p-logo">
                    <div className="logo-box">
                      <img src={img4} alt="GEMCO Logo" />
                    </div>
                  </td>
                  <td className="p-details">
                    <span className="inner-title">GEMCO International B.V (Exclusive Agency)</span>
                    <br />
                    Specialized in design, engineering &amp; construction of industrial workshops
                  </td>
                </tr>
                <tr>
                  <td className="p-logo"><br /></td>
                  <td className="p-details"><span className="inner-title"><br /></span></td>
                </tr>
                <tr>
                  <td className="p-logo">
                    <div className="logo-box">
                      <img src={img8} alt="Mettler Toledo Logo" />
                    </div>
                  </td>
                  <td className="p-details">
                    <span className="inner-title">Mettler Toledo AG Process Analytics</span>
                    <br />
                    Process Analytics, Measurement Solutions for Industrial Applications
                  </td>
                </tr>
                <tr>
                  <td className="p-logo">
                    <div className="logo-box">
                      <img src={img5} alt="Rose Logo" />
                    </div>
                  </td>
                  <td className="p-details">
                    <span className="inner-title">Rose Systemtechnik</span>
                    <br />
                    Junction Boxes &amp; Custom made Industrial Enclosures
                  </td>
                </tr>
                <tr>
                  <td className="p-logo"><br /></td>
                  <td className="p-details"><br /></td>
                </tr>
                <tr>
                  <td className="p-logo">
                    <div className="logo-box">
                      <img src={img7} alt="Servomex Logo" />
                    </div>
                  </td>
                  <td className="p-details">
                    <span className="inner-title">Servomex Group Limited</span>
                    <br />
                    Process/Oxygen, Hydrocarbon, CO, CO2, NOX Analysers for oil &amp; gas industries
                  </td>
                </tr>
                <tr>
                  <td className="p-logo">
                    <div className="logo-box">
                      <img src={img6} alt="Shaw Moisture Logo" />
                    </div>
                  </td>
                  <td className="p-details">
                    <span className="inner-title">Shaw Moisture Meters</span>
                    <br />
                    Portable &amp; online Moisture Analysers
                  </td>
                </tr>
                <tr>
                  <td className="p-logo">
                    <div className="logo-box">
                      <img src={img1} alt="Monicon Logo" />
                    </div>
                  </td>
                  <td className="p-details">
                    <span className="inner-title">Monicon Technology</span>
                    <br />
                    Gas Detection Systems
                  </td>
                </tr>
                <tr>
                  <td className="p-logo">
                    <div className="logo-box">
                      <img src={img9} alt="Orga Logo" />
                    </div>
                  </td>
                  <td className="p-details">
                    <span className="inner-title">Orga B.V</span>
                    <br />
                    Operational safety underpins the aviation and offshore industries' licenses to operate. Up-to-date aids to navigation and obstruction lighting that meet relevant operational needs and safety regulations are vitally important to maintain these licenses.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}

export default PrincipalComponent