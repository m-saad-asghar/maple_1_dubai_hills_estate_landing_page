'use client'
import { useState, useEffect } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
import React from 'react';
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BitrixForm from '@/components/BitrixForm';
import Image from 'next/image';
import toast from 'react-hot-toast';
import PhoneInput from "react-phone-input-2";
import { useRouter } from 'next/navigation';
import 'react-phone-input-2/lib/style.css';
import { useSearchParams } from 'next/navigation';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

}

export default function Banner() {
  const router = useRouter();
    const [isOpen, setOpen] = useState(false)
    const [keepUpdated, setKeepUpdated] = useState(true);
     const [disableBtn, setDisableBtn] = useState(false)
      const searchParams = useSearchParams();
  const [originValue, setOriginValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [phoneError, setPhoneError] = useState('')
    const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    // message: '',
  });

   useEffect(() => {
    const origin = searchParams.get('origin');
    const country = searchParams.get('country');

    if (origin) {
      if (origin.toLowerCase() === 'meta') {
        setOriginValue('Meta');
      } else if (origin.toLowerCase() === 'google') {
        setOriginValue('Google Ads');
      } else {
        setOriginValue('');
      }
    } else {
      setOriginValue('');
    }

    if (country) {
  const formattedCountry = country
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
  setCountryValue(formattedCountry);
} else {
      setCountryValue('');
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.phone) {
    setPhoneError("Phone number is required");
    return;
} else if (formData.phone.length < 9 || formData.phone.length > 15) {
  setPhoneError("Phone number must be between 9 and 15 characters");
  return;
}else{
  setPhoneError("");
}


 let phone = formData.phone.replace(/^(\d{1,3})0/, '$1');
 formData.phone = phone

  // const payload_email = {
  //   LANDING_PAGE: "Maple 1 Dubai Hills Estate EN Landing Page",
  //   ORIGIN: originValue,
  //   COUNTRY: countryValue,
  //   NAME: formData.name,
  //   PHONE_TEXT: formData.phone,
  //   EMAIL: formData.email,
  // };



  const payload = {
    fields: {
      TITLE: `Maple 1 Dubai Hills Estate EN Landing Page`,
      UF_CRM_1760777561731: originValue,
      NAME: formData.name,
      PHONE_TEXT: formData.phone,
      PHONE: [
        {
          VALUE: formData.phone,
          VALUE_TYPE: "WORK",
        },
      ],
      EMAIL: [
        {
          VALUE: formData.email,
          VALUE_TYPE: "WORK",
        },
      ],
      SOURCE_DESCRIPTION: formData.message,
      SOURCE_ID: "WEB",
      ASSIGNED_BY_ID: 25,
      UF_CRM_1754652292782: "Maple 1 Dubai Hills Estate EN Landing Page",
      UF_CRM_1761206533: countryValue,
    },
    params: {
      REGISTER_SONET_EVENT: "Y",
    },
  };

  try {
    setDisableBtn(true);
    const response = await fetch(
      "https://crm.shiroestate.ae/rest/25/btnspp9oeepo8jt6/crm.lead.add.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
   setDisableBtn(false);

    if (result.result) {
      router.push('/thank-you');
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      setDisableBtn(false);
      toast.error(
  "Something Went Wrong. Please Try Again.",
  {
    duration: 5000,
  }
);
    }
  } catch (error) {
    setDisableBtn(false);
    console.error("Error submitting lead:", error);
       toast.error(
  "Something Went Wrong. Please Try Again.",
  {
    duration: 5000,
  }
);
  }
};
  return (
    <>
    
    <section className="main-slider main-slider-one" id="home">
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none">                    
        <SwiperSlide className="swiper-slide">
          <div className="image-layer main_banner" 
          style={{backgroundImage: 'url(assets/img/slider/maple_edited_main_image.jpg)'}}
          >
            </div>
            <div className="container banner_container_main">
                <div className="main-slider-one__single">
                   <div className="container component_container">

                    <Link href="/" passHref className='logo_styling'>
  <Image
    src="/assets/icon/dubai_hills_estate.png"
    alt="dubai_hills_estate"
    height={55}
    width={300}
    style={{ height: "55px", width: "auto" }}
  />
</Link>

  <div className="row banner_container">
    <div className="col-lg-7 col-md-12">
      <div className="main-slider-one__content">
        <div className='banner_text_container'>
          <p className='heading_middle heading'>MAPLE 1, DUBAI HILLS ESTATE</p>
          <h1 className="heading_middle sub_heading">
  RARE BRAND-NEW
</h1>
<h1 className="heading_middle sub_heading">
  5-BEDROOM <span className="line-break">CORNER VILLA</span>
</h1>

        <p className='heading_middle content'>RARE DEAL – PRICE DROP</p>
        </div>

        <div className="btn-box">
          <div className="btn-one"></div>
          <div className="btn-two"></div>
        </div>

        {/* <div className="contact-info">
          <ul>
            <li>
              
            </li>

            <li>
              
            </li>
          </ul>
        </div> */}
      </div>
      {/* <div className='resp_usd'>
        <p className="down_styling">
  *USD 463,000 / EUR 398,000 / <span className="line-break">GBP 344,000</span>
</p>

      </div> */}
    </div>
    {/* <div className="col-lg-1 col-md-12"></div> */}
    <div className="col-lg-5 col-md-12">
      <div
        className="contact-form"
        style={{
          background: "#ffffff",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          paddingTop: 25,
          paddingBottom: 25
        }}
      >
        <h3
          className='form_heading'
        >
          Register your Interest
        </h3>

      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="keepUpdated" className='checkbox_text'>
        Full Name*
      </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          className="form-control input_styling"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="off"
  autoCorrect="off"
  spellCheck="false"
        />
      </div>

       <div className="mb-3">
        <label htmlFor="keepUpdated" className='checkbox_text'>
        Email Address*
      </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="form-control input_styling"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="off"
  autoCorrect="off"
  spellCheck="false"
        />
      </div>

      <div className="mb-3">
<label htmlFor="keepUpdated" className='checkbox_text'>
        Phone Number*
      </label>
        <PhoneInput
  name="phone"
  country={"ae"}
  value={formData.phone}
  onChange={(value) =>
    setFormData({
      ...formData,
      phone: value,
    })
  }
  countryCodeEditable={false}
  required
  inputStyle={{
    width: "100%",
    borderRadius: "0",
    border: "1px solid #000",
    height: "50px",
  }}
/>
<p className='error_msg'>{phoneError}</p>

        {/* <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          className="form-control input_styling"
          value={formData.phone}
          onChange={handleChange}
          required
        /> */}
      </div>

      <p className='form_text'>
        Please visit <a 
  href="/privacy-policy" 
  target="_blank" 
  rel="noopener noreferrer"
  className='privacy_policy'
>
  privacy policy
</a> to understand how Emaar handles your personal data.
      </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 24 }}>
      <input
        type="checkbox"
        id="keepUpdated"
        name="keepUpdated"
        checked={keepUpdated}
        onChange={(e) => setKeepUpdated(e.target.checked)}
        style={{ cursor: 'pointer' }}
        className="modern-checkbox"
      />
      <label htmlFor="keepUpdated" className='checkbox_text'>
        Keep me updated on news and offers
      </label>
    </div>



      {/* <div className="mb-3">
        <textarea
          name="message"
          rows="3"
          placeholder="Your Message"
          className="form-control"
          value={formData.message}
          onChange={handleChange}
          style={{
            borderRadius: '8px',
            border: '1px solid #ccc',
            resize: 'none',
          }}
          required
        ></textarea>
      </div> */}

      <button
      disabled={disableBtn}
        type="submit"
        className="btn w-100"
        style={{
          backgroundColor: '#9f8151',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          // borderRadius: '8px',
          fontWeight: '600',
          textTransform: "uppercase"
        }}
      >
       <label className='submit_form_btn'>Submit</label>
      </button>
    </form>
      </div>
    </div>
  </div>
</div>

                </div>
            </div>
        </SwiperSlide>
        {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" id="main-slider-one__pagination"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"  role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 3"></span></div> */}
      </Swiper>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
    </>
  );
};

