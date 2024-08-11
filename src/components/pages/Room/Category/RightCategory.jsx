// import React from 'react';
// import { Link } from 'react-router-dom';
// import ImageZoom from '../../../layouts/shared/ImageZoomHoverEffect';
// import icon1 from './assets/icon 1.png';
// import icon2 from './assets/icon 2.png';
// import icon3 from './assets/icon 3.png';
// import icon4 from './assets/icon 4.png';
// import icon5 from './assets/icon 5.png';
// import ImageSlider from '../ImageSlider';
// const RightCategory = ({ item }) => {
//     return (
//         <div>
//             <section className="">
//                 <div className="mx-auto">
//                     <div className="mb-10 flex flex-col-reverse md:flex-row" data-aos="fade" data-aos-duration="500">
//                         <div className="w-full md:w-1/2 md:h-[480px] h-[570px]  bg-[#CAD3EA] p-4 md:">
//                             <h2 className="text-[40px] font-bold mb-2">{item?.title}</h2>
//                             <p className="text-black mb-4 text-[22px]">{item?.description}</p>
//                             <ul className="list-disc pl-10">
//                                 <li className="mb-2 font-semibold">Room Capacity: {item?.capacity} Adult</li>
//                             </ul>

//                             <div className="flex mt-4 items-center">
//                                 <div className="flex flex-col items-center mb-4 mr-6">
//                                     <img src={icon1} alt="Icon 1" className="w-[28px] h-[28px]" />
//                                     <p className="text-center">Fridge</p>
//                                 </div>
//                                 <div className="flex flex-col items-center mb-4 mr-6">
//                                     <img src={icon2} alt="Icon 2" className="w-[28px] h-[28px]" />
//                                     <p className="text-center">TV</p>
//                                 </div>
//                                 <div className="flex flex-col items-center mb-4 mr-6">
//                                     <img src={icon3} alt="Icon 3" className="w-[28px] h-[28px]" />
//                                     <p className="text-center">Air conditoiner</p>
//                                 </div>
//                                 <div className="flex flex-col items-center mb-4 mr-6">
//                                     <img src={icon4} alt="Icon 4" className="w-[28px] h-[28px]" />
//                                     <p className="text-center">Locker</p>
//                                 </div>
//                                 <div className="flex flex-col items-center mb-4 mr-6">
//                                     <img src={icon5} alt="Icon 5" className="w-[28px] h-[28px]" />
//                                     <p className="text-center">Iron</p>
//                                 </div>
//                             </div>

//                             {/* <p className='text-xl text-black font-semibold pb-2'>
//                                 <span>Room Capacity:</span> <span>{item?.capacity}</span> Adult
//                             </p> */}
//                             <p className='text-3xl text-[#b88521] font-semibold'>
//                                 RS. <span>{item?.price}</span>/-
//                             </p>
//                             <div className='flex items-center justify-between pt-2'>
//                                 <div>
//                                     <p className='font-semibold text-black'>Room rates inclusive of tax</p>
//                                     <p className='text-black text-lg font-semibold'>
//                                         <span>Room info</span> - <span>Enquiry</span>
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <Link className='m-2' to="/booking-form">
//                                         <button className="bg-[#F6BA44] hover:bg-amber-300 text-white font-semibold px-4 py-2 rounded-2xl ml-auto">BOOK</button>
//                                     </Link>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="w-full md:w-1/2" data-aos="fade" data-aos-duration="500">
//                             <div width="100%" height="480px">
//                                 <ImageSlider images={item?.images}></ImageSlider>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default RightCategory;

import React from 'react';
import { Link } from 'react-router-dom';
import ImageZoom from '../../../layouts/shared/ImageZoomHoverEffect';
import ImageSlider from '../ImageSlider';
const RightCategory = ({ item }) => {
    return (
        <div>
            <section className="">
                <div className="mx-auto">
                    <div className="mb-10 flex flex-col-reverse md:flex-row" data-aos="fade" data-aos-duration="500">
                        <div className="w-full md:w-1/2 md:h-[480px] h-[570px]  bg-[#CAD3EA] p-4 md:">
                            <h2 className="text-[40px] font-bold mb-2">{item?.title}</h2>
                            <p className="text-black mb-4 text-[22px]">{item?.description}</p>
                            <ul className="list-disc pl-10">
                                <li className="mb-2 font-semibold">Room Capacity: {item?.capacity} Adult</li>
                            </ul>

                            <div className="flex mt-4 items-center">
                                {item.icons.map((icon, index) => (
                                    <div className="flex flex-col items-center mb-4 mr-6" key={index}>
                                        <img src={icon} alt={`Icon ${index + 1}`} className="w-[28px] h-[28px]" />
                                        <p className="text-center">{item.levels[index]}</p>
                                    </div>
                                ))}
                            </div>

                            {/* <p className='text-xl text-black font-semibold pb-2'>
                                <span>Room Capacity:</span> <span>{item?.capacity}</span> Adult
                            </p> */}
                            <p className='text-3xl text-[#b88521] font-semibold'>
                                RS. <span>{item?.price}</span>/-
                            </p>
                            <div className='flex items-center justify-between pt-2'>
                                <div>
                                    <p className='font-semibold text-black'>Room rates inclusive of tax</p>
                                    <p className='text-black text-lg font-semibold'>
                                    {item.info}
                                    </p>
                                </div>
                                <div>
                                    <Link className='m-2' to="/booking-form">
                                        <button className="bg-[#F6BA44] hover:bg-amber-300 text-white font-semibold px-4 py-2 rounded-2xl ml-auto">BOOK</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="w-full md:w-1/2" data-aos="fade" data-aos-duration="500">
                            <div width="100%" height="480px">
                                <ImageSlider images={item?.images}></ImageSlider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RightCategory;
