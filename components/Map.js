'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function Map() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one map_cont service_padding" id="dubai-map" style={{paddingTop: 0}}>
            <div className="container banner_container_main_feature map_styling component_container">
              <div>
                                    <p className="small_heading">
                                        DETAILS

                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">Location MAP</h2>
                                </div>
                            
            </div>

           <div className="map_container">
      <iframe
        src="https://www.google.com/maps?q=25.0950278,55.2544167&hl=en&z=15&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        // loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

            <div className="btn_style_map">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("home");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            REGISTER INTEREST
          </button>
</div>

        </section>
       
        </>
    )
}
