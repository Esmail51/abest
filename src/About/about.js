import '../Header/header.css'
import img1 from '../assets/images/pic10.png'
import img2 from '../assets/images/pic11.png'
import img3 from '../assets/images/pic9.png'



const AboutComponent  = () => {
    return (
<div id="content-container" className="container">
    <div className="content-module">
        <div className="left-side-block">
            <div className="block-content company-images">
                <img src={img1} alt='image'/>
            </div>
            <div className="block-content company-images">
                <img src={img2} alt='image'/>
            </div>
            <div className="block-content company-images">
                <img src={img3} alt='image'/>
            </div>
        </div>
        <div className="left-main-block">
            <h1 className="page-title">About Us</h1>
            <p>
                Aber Ahmed Equipment Est. is a reputed Trading and Technical Service Company located in Abu Dhabi, United Arab Emitaes. Abest is GL Certified Company managed by a team of Qualified Professional having two decatdes of experience in Oil, Gas, Marine and Industrial sectors of U.A.E. Abest is in business for over a decade, during this period we have gained the trust and goodwill of our various clients. Our Clients base continues to grow not just in U.A.E but in neighbouring Countries as well. Our range of Products and Services has also grown to meet different market demands. However, our core business continues to be in the fields of Process Analysers, Automation Control and Calibration/Testing. Abest success in this challenging market is the result of an unwavering focus on anticipating market trends, identifying and meeting our customer's requirements, providing them with value-added services and keeping up with advances in technology.
                <br/><br/>
                    
                <span className="inner-title">Supplier Of Oil/Gas & Marine Materials</span> <br/>
                Abest is a supplier Of Oil/Gas & Marine Materials including Navigation Aids systems, Weather Monitoring Systems, Workshop & Laboratory Equipment, Personal Protection Equipment, Gas Analysers, Metal Analysers, Explosion Proof Electrical Equipment, Electrical Safety Kits, Process Control Instruments, Pressure Gauge, Flow Meters, Test and Calibration Equipment.
                <br/><br/>
                    
                <span className="inner-title">Installation &amp; Commissioning</span> <br/>
                Installation & Commissioning Specialised in H2S, CO, Hydrocarbon, Navigation Aid systems and other Gas Detection and Warning systems, Process Control Instrumentation.
                <br/><br/>
                    
                <span className="inner-title">Servicing &amp; Repairing</span> <br/>
                Servicing & Repairing of all leading brands of Breathing Apparatus Oxygen Resuscitators, Portable and Fixed H2S, CO, Chlorine and Explosive Gas Detection and Warning Systems. We also undertake preventive and breakdown maintenance and certification of the above systems. Abest has service facilities in Abu Dhabi and Dubai to carry out these after sales Services.
                <br/><br/>
                    
                <span className="inner-title">Supply of Specialaist Manpower</span> <br/>
                Supply of Specialist Manpower in DCS, Process Instruments, Analysers, Fire & Gas systems, Power & Control Electrical. from U.K, India, and Pakistan. We undertake Preventive and break down maintenance contracts in onshore and off shore locations. Apart from the above we have successfully executed complete turn key Fire & Gas Installation on board oil tankers of different sizes in Dubai Dry Docks, Asry Dry Docks, Bahrain, Keppell Ship Yard Singapore for leading tanker owners such as Adnatco, Vela International, Andros Maritime Ltd, Bergehus Etc.
            </p>
            <div className="clear"></div>
        </div>
        <div className="clear"></div>
    </div>
</div>
    )
    
}

export default AboutComponent