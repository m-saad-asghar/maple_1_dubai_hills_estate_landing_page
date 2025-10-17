"use client";
import Link from "next/link"
import Image from "next/image";
export default function About() {
    return (
        <>
            <section className="about-one about_spacing" id="welcome-to-dubai-creek-harbour">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container banner_container_main_except component_container">
                    <div className="row">

                           <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div>
                                    <p className="small_heading">
                                        <span>WHERE SOPHITICATION MEETS SERENITY</span>
                                    </p>
                                </div>
                                <div className="sec-title">
                                    <h2 className="welcome_emaar_styling"><span className="welcome_emaar_styling_span">WELCOME TO DUBAI HILLS ESTATE</span></h2>
                                </div>

                                {/* <div className="text-box">
                                    <h3 className="about_subheading">"Our goal is to build sustainable, livable, and dynamic urban spaces for generations to come."</h3>
                                </div> */}

                                <div className="text-box">
<p className="about_paragraph">
    <span className="about_paragraph_span">Dubai Hills Estate is a serene sanctuary offering a peaceful retreat from the city’s energy, surrounded by lush greenery, expansive parks, and tree-lined boulevards. Thoughtfully master-planned with a focus on wellbeing, accessibility, and family living, it achieves the ideal balance between tranquillity and urban convenience.</span>
</p><br/>

<p className="about_paragraph">
    <span className="about_paragraph_span">With direct links to Al Khail Road and Sheikh Mohammed Bin Zayed Road, residents enjoy effortless access to Dubai’s major destinations, including Downtown Dubai, Dubai Marina, Dubai Creek Harbour, and Dubai International Airport.</span>
</p><br/>

<p className="about_paragraph">
    <span className="about_paragraph_span">Blending contemporary design with natural beauty, Dubai Hills Estate presents a refined collection of world-class amenities—from championship golf and scenic green spaces to exceptional dining and wellness experiences.</span>
</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInRight" data-wow-delay="0.1s">
                            <div className="about-one__img about_i">
                                <div className="inner">
                                    <Image
  src="/assets/img/about/about_us.jpg"
  alt="About Us"
  width={600} 
  height={350}
  style={{objectFit: "cover"}}
/>

                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
                
            </section>
        </>
    )
}
