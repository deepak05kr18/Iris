import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./gallery.css"; 

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import your images
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

function Gallery() {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Gallery</h2>
        <p className="gallery-subtitle">Explore our visual journey</p>
        
        <Swiper
          ref={swiperRef}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ 
            el: '.gallery-pagination', 
            clickable: true,
            dynamicBullets: true
          }}
          navigation={{
            nextEl: '.gallery-button-next',
            prevEl: '.gallery-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="gallery-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
        >
          {[slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5, 
            slide_image_6, slide_image_7, slide_image_8, slide_image_9, slide_image_10, 
            slide_image_11].map((image, index) => (
            <SwiperSlide key={index} className="gallery-slide">
              <img src={image} alt={`Gallery item ${index + 1}`} />
            </SwiperSlide>
          ))}

          <div className="gallery-controls">
            <div className="gallery-pagination"></div>
          </div>
        </Swiper>

        {/* Edge arrows with click handlers */}
        <button className="edge-nav edge-nav-prev" onClick={goPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </button>
        <button className="edge-nav edge-nav-next" onClick={goNext}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Gallery;