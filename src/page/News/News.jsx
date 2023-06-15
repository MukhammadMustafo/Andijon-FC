import React from 'react'
import NewsBg from '../../assets/image/news-bg.png'
import './News.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
function News() {
    return (
        <div>
            <div className="">
                <img src={NewsBg} alt="" />
            </div>
            <div className="container">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStCxrpP8LWLUn4QC8mUlbdBleFvNeygtUQw&usqp=CAU" />
                        <h6>,v;lsd,v</h6>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9CkOVlXp-ProyA-1zJ73GhQhZ1ykawD3uywoq-fra_j-QRm-U02HTj-PAQY_E_ZBXUc&usqp=CAU" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIK2KPRABuRSujBUN5DyrXE4-z1EDpx2w_eQ&usqp=CAU" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxPVDAjbrvf9hs2nn6Onbo2ftgdKBrxZvUA&usqp=CAU" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIK2KPRABuRSujBUN5DyrXE4-z1EDpx2w_eQ&usqp=CAU" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default News