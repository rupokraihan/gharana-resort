/* eslint-disable object-curly-newline */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageZoom from './ImageZoomHoverEffect';

const ImageGallery = ({ img1, img2, img3, img4, img5, img6, img7, img8, img9 }) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className=" px-10 md:px-6 mx-auto flex flex-wrap">
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5">
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-60 md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={img2}
                                        alt="gallery"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                            </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-60 md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={img1}
                                        alt="gallery"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                            </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-60 md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={img3}
                                        alt="gallery"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5">
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-60 md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={img4}
                                        alt="gallery"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                            </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-60 md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={img5}
                                        alt="gallery"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                            </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-60 md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={img6}
                                        alt="gallery"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-60 md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={img7}
                                        alt="gallery"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                            </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-60 md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={img8}
                                        alt="gallery"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                            </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-60 md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={img9}
                                        alt="gallery"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ImageGallery;