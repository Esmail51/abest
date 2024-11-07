import React from "react";
import img1 from '../assets/images/pic10.png'
import img2 from '../assets/images/pic11.png'
import img3 from '../assets/images/pic9.png';

const ServicesComponent = () => {

    return (
        <div id="content-container" className="container">
            <div className="content-module">
                <div className="left-side-block">
                    <div class="block-content company-images">
                        <img src={img1} alt="image1"/>
                    </div>
                    <div class="block-content company-images">
                        <img src={img2} alt="image" />
                    </div>
                    <div class="block-content company-images">
                        <img src={img3} alt="image" />
                    </div>
                </div>

                <div className="left-main-block">
                    <h1 className="page-title">Our Services</h1>
                    <p>
                        Abest maintains a group of qualified and experienced test and repair engineers to support their customers for analyzers and analyzer systems supplied around the world.
                        <br /><br />
                        <b>Supplier of Oil/Gas Materials</b><br />
                        <b>Supplier of Marine Materials</b><br />
                        <b>Installation and Commissioning, start-up and training</b><br />
                        <b>Servicing and Maintenance</b><br />
                        <b>Spare parts supply</b><br />
                        <b>Servicing/Repairing</b><br />
                        <b>Supply of Specialist Manpower</b><br />
                        <b>Supply of Specialist Manpower</b>
                        <br /><br />
                        With a group of well-trained engineers, we offer different kinds of support, including maintenance repairs, preventive maintenance contracts, start-up, commissioning, site surveys, customer training, and factory acceptance testing for on-shore or off-shore analyzer applications.
                        <br /><br />
                        To ensure the best possible after-sales service on delivered analyzers and to minimize their downtimes, Abest stocks a strategic level of spare parts and consumables.
                        <br /><br />
                        <span className="inner-title">After – Sales Service Facilities</span><br />
                        After Sales Services Support (Back-up Service): We have manufacturer-trained/certified engineers (trained at manufacturer facilities) to carry out servicing, calibration, and certification of the following equipment.
                        <br /><br />
                        <b>Online Gas Analyser and Gas Chromatograph</b><br />
                        <b>Portable Gas Detectors</b><br />
                        <b>Installation and Commissioning, start-up and training</b><br />
                        <b>Fixed Gas Monitoring Systems</b><br />
                        <b>Marine Fire Detection &amp; Alarm Systems</b><br />
                        <b>Oxygen Analysers</b><br />
                        <b>Moisture Analysers</b><br />
                        <b>Metal Analysers</b><br />
                        <b>Dew Point Meters</b><br />
                        <b>Self Contained Breathing Apparatus Sets</b>
                        <br /><br />
                        We provide complete service backup for all products sold by us. We also maintain adequate spares in stock, and our service engineers are available round the clock—24 hours a day, 7 days a week—to attend to any emergency calls from our clients.
                    </p>
                    <div className="clear"></div>
                </div>

                <div className="clear"></div>
            </div>
        </div>
    )
}

export default ServicesComponent
