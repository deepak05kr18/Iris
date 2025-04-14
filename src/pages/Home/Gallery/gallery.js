import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./gallery.css"; 

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../../../components/Images/Team/Resize image project-1.png';
import slide_image_2 from '../../../components/Images/Team/converted_image_4.webp';
import slide_image_3 from '../../../components/Images/Team/Resize image project-3.png';
import slide_image_4 from '../../../components/Images/Team/Resize image project-4.png';
import slide_image_5 from '../../../components/Images/Team/converted_image_2.webp';
import slide_image_6 from '../../../components/Images/Team/Resize image project-6.png';
import slide_image_7 from '../../../components/Images/Team/Resize image project-7.png';
import slide_image_8 from '../../../components/Images/Team/Resize image project-8.png';
import slide_image_9 from '../../../components/Images/Team/Resize image project-9.png';
import slide_image_10 from '../../../components/Images/Team/Resize image project-10.png';
import slide_image_11 from '../../../components/Images/Team/converted_image_3.webp';


function App() {
  return (
    <div className="container">
      <h1 className="heading"> Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3} /* Show 5 slides */
        spaceBetween={0} /* Add small gap between slides */
        coverflowEffect={{
          rotate: 0,
          stretch: 50, /* Adjust spacing between slides */
          depth: 150, /* Adjust 3D depth */
          modifier: 1, /* Smooth overlap */
          slideShadows: false, /* Disable shadows */
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
