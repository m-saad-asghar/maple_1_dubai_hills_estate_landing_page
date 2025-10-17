'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { 
  FaRulerCombined,     // Plot Size
  FaWarehouse,         // BUA (Built-Up Area)
  FaVectorSquare,      // Corner
  FaHome,              // Type
  FaMapMarkedAlt,      // Single Row
  FaLock,              // Private Location
  FaChartLine,         // End
  FaKey,               // Vacant
  FaCouch,             // Unfurnished
  FaExpandArrowsAlt,   // Spacious
  FaCar                // Parking
} from "react-icons/fa";


export default function Features() {
    return (
        <>
        {/*Start Feauture One*/}
        <section className="feauture-one feature_wrap" id="why-invest-in-dubai">
            <div className="container banner_container_main_feature component_container">
              <div>
                <p className="small_heading">
                    STEP INTO A NEW LEVEL OF LUXURY LIVING
                </p>
              </div>
              <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                <h2 className="why_invest">EXCLUSIVE & RARE VILLA — GRAB THE <span className="line-break">PRICE DROP</span></h2>
              </div>

              <div className="text-box">
                <p className="about_paragraph">
                  <span className="about_paragraph_span">
                    Discover a rare 5-bedroom corner villa in Dubai Hills Estate, offering refined design, spacious interiors, and private outdoor living. 
                    Surrounded by parks and premium amenities, this exclusive home combines elegance, comfort, and value — now available at a newly reduced price.
                  </span>
                </p>
              </div>

              <div className="row feature_row">

                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="feauture-one__single" style={{marginBottom: 0}}>
                    <div className="feauture-one__single-text">
                      <div className="feauture-one__single-bottom">
                        <div className="icon-box">
                          <span className="icon-plane"><FaRulerCombined size={30}/></span>
                        </div>
                      </div>
                      <h2 className="investment_content"><a href="javascript:void(0);">Plot Size</a></h2>
                      <p className="investment_text"><span className="about_para_span">3,005.71 sq.ft.</span></p> 
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft">
                  <div className="feauture-one__single">
                    <div className="feauture-one__single-text">
                      <div className="feauture-one__single-bottom">
                        <div className="icon-box">
                          <span className="icon-plane"><FaWarehouse size={30}/></span>
                        </div>
                      </div>
                      <h2 className="investment_content"><a href="javascript:void(0);">BUA</a></h2>
                      <p className="investment_text"><span className="about_para_span">2,700 sq.ft.</span></p> 
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft">
                  <div className="feauture-one__single">
                    <div className="feauture-one__single-text">
                      <div className="feauture-one__single-bottom">
                        <div className="icon-box">
                          <span className="icon-plane"><FaVectorSquare size={30}/></span>
                        </div>
                      </div>
                      <h2 className="investment_content"><a href="javascript:void(0);">Corner</a></h2>
                      <p className="investment_text"><span className="about_para_span">Villa</span></p> 
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft">
                  <div className="feauture-one__single">
                    <div className="feauture-one__single-text">
                      <div className="feauture-one__single-bottom">
                        <div className="icon-box">
                          <span className="icon-plane"><FaHome size={30}/></span>
                        </div>
                      </div>
                      <h2 className="investment_content"><a href="javascript:void(0);">Type</a></h2>
                      <p className="investment_text"><span className="about_para_span">3E</span></p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft">
                  <div className="feauture-one__single" style={{paddingTop: 0}}>
                    <div className="feauture-one__single-text">
                      <div className="feauture-one__single-bottom">
                        <div className="icon-box">
                          <span className="icon-plane"><FaMapMarkedAlt size={30}/></span>
                        </div>
                      </div>
                      <h2 className="investment_content"><a href="javascript:void(0);">Single</a></h2>
                      <p className="investment_text"><span className="about_para_span">Row</span></p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft">
                  <div className="feauture-one__single" style={{paddingTop: 0}}>
                    <div className="feauture-one__single-text">
                      <div className="feauture-one__single-bottom">
                        <div className="icon-box">
                          <span className="icon-plane"><FaLock size={30}/></span>
                        </div>
                      </div>
                      <h2 className="investment_content"><a href="javascript:void(0);">Private</a></h2>
                      <p className="investment_text"><span className="about_para_span">Location</span></p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft">
                  <div className="feauture-one__single" style={{paddingTop: 0}}>
                    <div className="feauture-one__single-text">
                      <div className="feauture-one__single-bottom">
                        <div className="icon-box">
                          <span className="icon-plane"><FaChartLine size={30}/></span>
                        </div>
                      </div>
                      <h2 className="investment_content"><a href="javascript:void(0);">End</a></h2>
                      <p className="investment_text"><span className="about_para_span"></span></p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft">
                  <div className="feauture-one__single" style={{paddingTop: 0}}>
                    <div className="feauture-one__single-text">
                      <div className="feauture-one__single-bottom">
                        <div className="icon-box">
                          <span className="icon-plane"><FaKey size={30}/></span>
                        </div>
                      </div>
                      <h2 className="investment_content"><a href="javascript:void(0);">Vacant</a></h2>
                      <p className="investment_text"><span className="about_para_span"></span></p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft">
                  <div className="feauture-one__single" style={{paddingTop: 0}}>
                    <div className="feauture-one__single-text">
                      <div className="feauture-one__single-bottom">
                        <div className="icon-box">
                          <span className="icon-plane"><FaCouch size={30}/></span>
                        </div>
                      </div>
                      <h2 className="investment_content"><a href="javascript:void(0);">Unfurnished</a></h2>
                      <p className="investment_text"><span className="about_para_span"></span></p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft">
                  <div className="feauture-one__single" style={{paddingTop: 0}}>
                    <div className="feauture-one__single-text">
                      <div className="feauture-one__single-bottom">
                        <div className="icon-box">
                          <span className="icon-plane"><FaExpandArrowsAlt size={30}/></span>
                        </div>
                      </div>
                      <h2 className="investment_content"><a href="javascript:void(0);">Spacious</a></h2>
                      <p className="investment_text"><span className="about_para_span"></span></p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft">
                  <div className="feauture-one__single" style={{paddingTop: 0}}>
                    <div className="feauture-one__single-text">
                      <div className="feauture-one__single-bottom">
                        <div className="icon-box">
                          <span className="icon-plane"><FaCar size={30}/></span>
                        </div>
                      </div>
                      <h2 className="investment_content"><a href="javascript:void(0);">2 Parking</a></h2>
                      <p className="investment_text"><span className="about_para_span">Spaces</span></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="btn_style_invest">
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
