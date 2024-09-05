// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiperStyle.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import styles from './MySwiperSlider.module.scss';

const food = [
  {
    desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
    img: '/sliderImg1.png',
    title: (
      <h3>
        just <span>GRILL IT</span>
      </h3>
    ),
  },
  {
    desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
    img: '/sliderImg1.png',

    title: (
      <h3>
        just <span>GRILL IT</span>
      </h3>
    ),
  },
  {
    desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
    img: '/sliderImg1.png',

    title: (
      <h3>
        just <span>GRILL IT</span>
      </h3>
    ),
  },
  {
    desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
    img: '/sliderImg1.png',

    title: (
      <h3>
        just <span>GRILL IT</span>
      </h3>
    ),
  },
];
export default function MySwiperSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = food;

  useEffect(() => {
    // if (activeIndex === slides.length - 1) return;

    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeIndex, slides.length]);

  return (
    <>
      <div className={styles.mainSwiperSlider}>
        <div className='container main-swiper-slider'>
          <Swiper
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className='mySwiper'
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000, // Delay in ms
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            effect='fade' // Transition effect
            speed={800} // Transition speed in ms
          >
            {slides.map((slide, index) => (
              <>
                <SwiperSlide
                  key={index}
                  className='grid grid-cols-1 md:grid-cols-2 place-items-center items-center justify-items-center'
                >
                  <div className='flex flex-column place-self-center main-slider-title	place-items-start	'>
                    <div className={styles.mainSliderTitle}>{slide.title}</div>
                    <p>{slide.desc}</p>
                  </div>
                  <div>
                    <img src={slide.img} alt={slide.title} />
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
