import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "gatsby";
// Import Swiper styles
import 'swiper/css';

class LogoCarusel extends React.Component {
  render () {
    return (
        <>
          <div className="brand-logo-slider-area section-space--ptb_60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-logo-slider__container-area">
                                <div className="swiper-container brand-logo-slider__container">
                                    <Swiper 
                                    slidesPerView={5} 
                                    className="swiper-wrapper brand-logo-slider__one">
                                        <SwiperSlide className="swiper-slide brand-logo brand-logo--slider">
                                            <Link to="#">
                                                <div className="brand-logo__image">
                                                    <img src="/assets/images/brand/aws-gray.png" className="img-fluid"
                                                        alt=""/>
                                                </div>
                                                <div className="brand-logo__image-hover">
                                                    <img src="/assets/images/brand/aws.png" className="img-fluid" alt=""/>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide brand-logo brand-logo--slider">
                                            <Link to="#">
                                                <div className="brand-logo__image">
                                                    <img src="/assets/images/brand/azure-gray.png" className="img-fluid"
                                                        alt=""/>
                                                </div>
                                                <div className="brand-logo__image-hover">
                                                    <img src="/assets/images/brand/azure.png" className="img-fluid" alt=""/>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide brand-logo brand-logo--slider">
                                            <Link to="#">
                                                <div className="brand-logo__image">
                                                    <img src="/assets/images/brand/csharp-gray.png" className="img-fluid"
                                                        alt=""/>
                                                </div>
                                                <div className="brand-logo__image-hover">
                                                    <img src="/assets/images/brand/csharp.png" className="img-fluid" alt=""/>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide brand-logo brand-logo--slider">
                                            <Link to="#">
                                                <div className="brand-logo__image">
                                                    <img src="/assets/images/brand/dotnet-gray.png" className="img-fluid"
                                                        alt=""/>
                                                </div>
                                                <div className="brand-logo__image-hover">
                                                    <img src="/assets/images/brand/dotnet.png" className="img-fluid" alt=""/>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide brand-logo brand-logo--slider">
                                            <Link to="#">
                                                <div className="brand-logo__image">
                                                    <img src="/assets/images/brand/js-gray.png" className="img-fluid" alt=""/>
                                                </div>
                                                <div className="brand-logo__image-hover">
                                                    <img src="/assets/images/brand/js.png" className="img-fluid" alt=""/>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide brand-logo brand-logo--slider">
                                            <Link to="#">
                                                <div className="brand-logo__image">
                                                    <img src="/assets/images/brand/mysql-gray.png" className="img-fluid"
                                                        alt=""/>
                                                </div>
                                                <div className="brand-logo__image-hover">
                                                    <img src="/assets/images/brand/mysql.png" className="img-fluid" alt=""/>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide brand-logo brand-logo--slider">
                                            <Link to="#">
                                                <div className="brand-logo__image">
                                                    <img src="/assets/images/brand/react-gray.png" className="img-fluid"
                                                        alt=""/>
                                                </div>
                                                <div className="brand-logo__image-hover">
                                                    <img src="/assets/images/brand/react.png" className="img-fluid" alt=""/>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
};



export default LogoCarusel;