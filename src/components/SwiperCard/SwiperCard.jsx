// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { FaLocationDot } from "react-icons/fa6";

const SwiperCard = () => {
    return (
        <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide className='flex gap-1 items-center justify-center pb-3'>
                    <div>
                    <FaLocationDot className='text-xl' />
                    </div>
                    <div>
                        Bangladesh
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex gap-1 items-center justify-center pb-3'>
                    <div>
                    <FaLocationDot className='text-xl' />
                    </div>
                    <div>
                    Thailand
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex gap-1 items-center justify-center pb-3'>
                    <div>
                    <FaLocationDot className='text-xl' />
                    </div>
                    <div>
                    Indonesia
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex gap-1 items-center justify-center pb-3'>
                    <div>
                    <FaLocationDot className='text-xl' />
                    </div>
                    <div>
                    Malaysia
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperCard;