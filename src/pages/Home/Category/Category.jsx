import React from 'react';
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css/navigation';

import img1 from "../../../images/category/category-polt.png"
import img2 from "../../../images/category/category-polt2.png"
import img3 from "../../../images/category/category-polt3.png"
import img4 from "../../../images/category/category-polt4.png"
import 'swiper/css';
import CardCategory from "../../../Component/CardCategory";
const Category = () => {
    return (

        <section className="category">
            <div className="container">
                <h2 className="category__title">
                    Категории
                </h2>
                    <Swiper style={{width:"100%"}}
                        spaceBetween={15}
                        modules={[Navigation]}
                        slidesPerView={4}
                        navigation = {true}
                    >
                        <SwiperSlide>
                            <CardCategory img={img1} text={"Куртки"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardCategory img={img2} text={"Пальто"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardCategory img={img3} text={"Шубы"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardCategory img={img4} text={"Парки"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardCategory img={img4} text={"Парки"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardCategory img={img4} text={"Парки"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardCategory img={img4} text={"Парки"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardCategory img={img4} text={"Парки"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardCategory img={img4} text={"Парки"}/>
                        </SwiperSlide>

                    </Swiper>
            </div>
        </section>
    );
};

export default Category;