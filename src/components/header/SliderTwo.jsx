// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './slider.module.scss';

// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

// fav page
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Authentication/userSlice';
// import styles from './fav.module.scss';
import { useNavigate } from 'react-router-dom';
// end fav page

export default function SliderTwo() {
  // fav page
  // Access the user's favourites from the Redux store
  // const user = useSelector((state) => state.user.user);
  const favourites = [
    {
      id: 513,
      name: 'cheese burger',
      img: '/image4.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
    {
      id: 514,
      name: 'SEA FOOD RANCH PIZZA',
      img: '/image4.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
    {
      id: 515,
      name: 'cheese burger',
      img: '/image3.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
    {
      id: 516,
      name: 'cheese burger',
      img: '/image4.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
    {
      id: 517,
      name: 'cheese burger',
      img: '/image4.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
    {
      id: 518,
      name: 'cheese burger',
      img: '/image4.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // end fav page

  // fav page

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  // end fav page
  return (
    <>
      <div className='containerSliderTwo'>
        <div className='sliderTwo grid grid-cols-1 md:grid-cols-4 place-items-center items-center justify-items-center'>
          <div className={styles.secondSlider}>
            <div className={styles.mainSliderTitle}>
              <h3>
                OUR DAILY
                <span> OFFERS.</span>
              </h3>
            </div>
            <svg
              style={{ margin: '1.5rem 0 4rem 0' }}
              width='125'
              height='10'
              viewBox='0 0 125 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 5H120'
                stroke='#AE5737'
                strokeWidth='10'
                strokeLinecap='round'
              />
            </svg>

            <p>Lorem ipsum dolor sit amet, consec adipiscing.</p>
            <button>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_193_6130)'>
                  <path
                    d='M19 15V3C14.184 7.594 13.977 11.319 14 15H19ZM19 15V21H18V18M8 4V21M5 4V7C5 7.79565 5.31607 8.55871 5.87868 9.12132C6.44129 9.68393 7.20435 10 8 10C8.79565 10 9.55871 9.68393 10.1213 9.12132C10.6839 8.55871 11 7.79565 11 7V4'
                    stroke='#BB4042'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_193_6130'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              OUR MENU
            </button>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={70}
            centeredSlides={true}
            slidesPerview={true}
            autoplay={{
              delay: 5000, // Delay in ms
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className='mySwiper col-span-3'
            // spaceBetween={50}
            // pagination={{ clickable: true }}
            // slidesPerView={3}
            effect='coverflow'
            slideToClickedSlide={true}
            // coverflowEffect={{ slideShadows: false, rotate: 30 }}
            // slideActiveClass={1}
            // centerInsufficientSlides={true}
            centeredSlidesBounds={true}
            breakpoints={{
              300: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 70,
              },
            }}
          >
            {favourites.map((item) => (
              <>
                <SwiperSlide key={item.id}>
                  <div className={styles.favouriteItem}>
                    <div className='fav-item'>
                      <img
                        src={item.img}
                        alt={item.name}
                        className={styles.favouriteItemImage}
                      />
                      <div className='favourite-item-details'>
                        <h2 className={styles.favouriteItemName}>
                          {item.name}
                        </h2>

                        <span className={styles.cartPrice}>
                          {item.price.toFixed(2)}
                          <span className={styles.priceDiscount}>
                            {(item.price - item.discount).toFixed(2)}
                          </span>
                        </span>
                      </div>
                      <div className={styles.cartBtns}>
                        <button
                          className={styles.cartBtn}
                          onClick={() => handleAddToCart(item)}
                        >
                          ADD TO CART
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M4.32604 5.31668C4.16771 5.31668 4.00104 5.25001 3.88437 5.13335C3.64271 4.89168 3.64271 4.49168 3.88437 4.25001L6.90937 1.22501C7.15104 0.983346 7.55104 0.983346 7.79271 1.22501C8.03438 1.46668 8.03438 1.86668 7.79271 2.10835L4.76771 5.13335C4.64271 5.25001 4.48438 5.31668 4.32604 5.31668Z'
                              fill='#F46D3B'
                            />
                            <path
                              d='M15.6753 5.31668C15.5169 5.31668 15.3586 5.25835 15.2336 5.13335L12.2086 2.10835C11.9669 1.86668 11.9669 1.46668 12.2086 1.22501C12.4503 0.983346 12.8503 0.983346 13.0919 1.22501L16.1169 4.25001C16.3586 4.49168 16.3586 4.89168 16.1169 5.13335C16.0003 5.25001 15.8336 5.31668 15.6753 5.31668Z'
                              fill='#F46D3B'
                            />
                            <path
                              d='M16.843 8.83333C16.7846 8.83333 16.7263 8.83333 16.668 8.83333H16.4763H3.33464C2.7513 8.84167 2.08464 8.84167 1.6013 8.35833C1.21797 7.98333 1.04297 7.4 1.04297 6.54167C1.04297 4.25 2.71797 4.25 3.51797 4.25H16.4846C17.2846 4.25 18.9596 4.25 18.9596 6.54167C18.9596 7.40833 18.7846 7.98333 18.4013 8.35833C17.968 8.79167 17.3846 8.83333 16.843 8.83333ZM3.51797 7.58333H16.6763C17.0513 7.59167 17.4013 7.59167 17.518 7.475C17.5763 7.41667 17.7013 7.21667 17.7013 6.54167C17.7013 5.6 17.468 5.5 16.4763 5.5H3.51797C2.5263 5.5 2.29297 5.6 2.29297 6.54167C2.29297 7.21667 2.4263 7.41667 2.4763 7.475C2.59297 7.58333 2.9513 7.58333 3.31797 7.58333H3.51797Z'
                              fill='#F46D3B'
                            />
                            <path
                              d='M8.13281 15.25C7.79115 15.25 7.50781 14.9667 7.50781 14.625V11.6667C7.50781 11.325 7.79115 11.0417 8.13281 11.0417C8.47448 11.0417 8.75781 11.325 8.75781 11.6667V14.625C8.75781 14.975 8.47448 15.25 8.13281 15.25Z'
                              fill='#F46D3B'
                            />
                            <path
                              d='M11.9648 15.25C11.6232 15.25 11.3398 14.9667 11.3398 14.625V11.6667C11.3398 11.325 11.6232 11.0417 11.9648 11.0417C12.3065 11.0417 12.5898 11.325 12.5898 11.6667V14.625C12.5898 14.975 12.3065 15.25 11.9648 15.25Z'
                              fill='#F46D3B'
                            />
                            <path
                              d='M12.4102 18.9583H7.38524C4.40191 18.9583 3.73524 17.1833 3.47691 15.6417L2.30191 8.43334C2.24358 8.09168 2.47691 7.77501 2.81858 7.71668C3.16024 7.65834 3.47691 7.89168 3.53524 8.23334L4.71024 15.4333C4.95191 16.9083 5.45191 17.7083 7.38524 17.7083H12.4102C14.5519 17.7083 14.7936 16.9583 15.0686 15.5083L16.4686 8.21668C16.5352 7.87501 16.8602 7.65001 17.2019 7.72501C17.5436 7.79168 17.7602 8.11668 17.6936 8.45834L16.2936 15.75C15.9686 17.4417 15.4269 18.9583 12.4102 18.9583Z'
                              fill='#F46D3B'
                            />
                          </svg>
                        </button>
                        <button
                          className={styles.checkOutBtn}
                          onClick={() => navigate('/checkout')}
                        >
                          ORDER NOW
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M11.851 18.025C10.8677 18.025 9.47604 17.3333 8.37604 14.025L7.77604 12.225L5.97604 11.625C2.67604 10.525 1.98438 9.13333 1.98438 8.15C1.98438 7.175 2.67604 5.775 5.97604 4.66667L13.051 2.30833C14.8177 1.71666 16.2927 1.89166 17.201 2.79166C18.1094 3.69166 18.2844 5.175 17.6927 6.94167L15.3344 14.0167C14.226 17.3333 12.8344 18.025 11.851 18.025ZM6.36771 5.85833C4.05104 6.63333 3.22604 7.55 3.22604 8.15C3.22604 8.75 4.05104 9.66667 6.36771 10.4333L8.46771 11.1333C8.65104 11.1917 8.80104 11.3417 8.85938 11.525L9.55937 13.625C10.326 15.9417 11.251 16.7667 11.851 16.7667C12.451 16.7667 13.3677 15.9417 14.1427 13.625L16.501 6.55C16.926 5.26667 16.851 4.21667 16.3094 3.675C15.7677 3.13333 14.7177 3.06667 13.4427 3.49167L6.36771 5.85833Z'
                              fill='#F46D3B'
                            />
                            <path
                              d='M8.4237 12C8.26536 12 8.10703 11.9417 7.98203 11.8167C7.74036 11.575 7.74036 11.175 7.98203 10.9333L10.9654 7.94166C11.207 7.69999 11.607 7.69999 11.8487 7.94166C12.0904 8.18332 12.0904 8.58332 11.8487 8.82499L8.86536 11.8167C8.7487 11.9417 8.58203 12 8.4237 12Z'
                              fill='#F46D3B'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
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
