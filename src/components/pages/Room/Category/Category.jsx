import React, { useEffect } from 'react';
import cottage from './../assets/Cottage.png';
import deluxe from './../assets/Deluxe.png';
import executive from './../assets/Executive.png';
import family from './../assets/Family.png';
import suite from './../assets/Suite.png';
import sdeluxe from './../assets/Super deluxe.png';
import LeftCategory from './LeftCategory.jsx';
import RightCategory from './RightCategory.jsx';
import RunningTitle from '../RunningTitle.jsx';

import e_1 from './../assets/Executive/ececutive_1.png';
import e_2 from './../assets/Executive/ececutive_2.png';
import e_3 from './../assets/Executive/ececutive_3.png';
import e_4 from './../assets/Executive/ececutive_4.png';

import c_1 from './../assets/Cottage/Cottage_1.png';
import c_2 from './../assets/Cottage/Cottage_2.png';
import c_3 from './../assets/Cottage/Cottage_3.png';
import c_4 from './../assets/Cottage/Cottage_4.png';

import d_1 from './../assets/Deluxe/Deluxe_1.png';
import d_2 from './../assets/Deluxe/Deluxe_2.png';
import d_3 from './../assets/Deluxe/Deluxe_3.png';
import d_4 from './../assets/Deluxe/Deluxe_4.png';

import sd_1 from './../assets/Super deluxe/sd_1.png';
import sd_2 from './../assets/Super deluxe/sd_2.png';
import sd_3 from './../assets/Super deluxe/sd_3.png';
import sd_4 from './../assets/Super deluxe/sd_4.png';

import su_1 from './../assets/Suite/Suite_1.png';
import su_2 from './../assets/Suite/Suite_2.png';
import su_3 from './../assets/Suite/Suite_3.png';
import su_4 from './../assets/Suite/Suite_4.png';

import f_1 from './../assets/Family/Family_1.png';
import f_2 from './../assets/Family/Family_2.png';
import f_3 from './../assets/Family/Family_3.png';
import f_4 from './../assets/Family/Family_4.png';

import Wifi from './assets/Wifi.png';
import TV from './assets/TV.png';
import Air_conditoiner from './assets/Air conditoiner.png';
import Restaurent from './assets/Restaurent.png';
import Free_Parking from './assets/Free Parking.png';
import Fridge from './assets/Fridge.png';


const Category = () => {
    const data = [
        {
            id: 1,
            url: '/booking-form',
            images: [e_1,e_2,e_3,e_4],
            title: 'Executive',
            capacity: 2,
            icons:[Wifi,TV,Air_conditoiner,Restaurent,Free_Parking],
            levels:["Wifi","TV","Air conditoiner","Restaurent","Free Parking"],
            info:'',
            price: 3000,
            description:
                'Executive rooms are the most budget-friendly category among all, come with all basic amenities and a french style window offering a spectacular view.',
        },
        {
            id: 2,
            url: '/booking-form',
            images: [c_1,c_2,c_3,c_4],
            title: 'Cottage',
            capacity: 2,
            icons:[Wifi,TV,Air_conditoiner,Restaurent,Free_Parking],
            levels:["Wifi","TV","Air conditoiner","Restaurent","Free Parking"],
            info:'',
            price: 4500,
            description:
                'Escape to our charming cottage rooms, where rustic charm meets modern comfort in a serene, nature-inspired retreat.',
        },
        {
            id: 3,
            url: '/booking-form',
            images: [d_1,d_2,d_3,d_4],
            title: 'Deluxe',
            capacity: 2,
            icons:[Wifi,TV,Air_conditoiner,Restaurent,Free_Parking],
            levels:["Wifi","TV","Air conditoiner","Restaurent","Free Parking"],
            info:'',
            price: 4000,
            description:
                'Experience cozy comfort in our deluxe rooms, where every detail is designed to make your stay a perfect blend of relaxation and affordability.',
        },
        {
            id: 4,
            url: '/booking-form',
            images: [sd_1,sd_2,sd_3,sd_4],
            title: 'Super deluxe',
            capacity: 2,
            icons:[Wifi,TV,Air_conditoiner,Restaurent,Free_Parking],
            levels:["Wifi","TV","Air conditoiner","Restaurent","Free Parking"],
            info:'',
            price: 4500,
            description:
                'Indulge in the epitome of luxury and comfort in our super deluxe rooms, where elegance meets relaxation for an unforgettable stay.',
        },
        {
            id: 5,
            url: '/booking-form',
            images: [su_1,su_2,su_3,su_4],
            title: 'Suite',
            capacity: 2,
            icons:[Wifi,TV,Air_conditoiner,Restaurent,Free_Parking, Fridge],
            levels:["Wifi","TV","Air conditoiner","Restaurent","Free Parking","Fridge"],
            info:'Room info • Enquery',
            price: 5000,
            description:
                'Unwind in style in our exquisite suite rooms, where spacious elegance and luxurious amenities combine to create an unforgettable experience of opulence and relaxation.',
        },
        {
            id: 6,
            url: '/booking-form',
            images: [f_1,f_2,f_3,f_4],
            title: "Family",
            capacity: 7,
            icons:[Wifi,TV,Air_conditoiner,Restaurent,Free_Parking],
            levels:["Wifi","TV","Air conditoiner","Restaurent","Free Parking"],
            info:'',
            price: 7499,
            description:
                'The Family room is designed for big groups of friends and family wanting to stay in the same room. It is well ventilated, can accommodate up to 9 people, and has two full-sized washrooms.',
        },
        

        /* 24*7 Photography */
]

    return (
        <div>
            <RightCategory item={data[0]}></RightCategory>
            <LeftCategory item={data[1]}></LeftCategory>
            <RightCategory item={data[2]}></RightCategory>
            <LeftCategory item={data[3]}></LeftCategory>
            <RightCategory item={data[4]}></RightCategory>
            <LeftCategory item={data[5]}></LeftCategory>
        </div>
    );
};

export default Category;



