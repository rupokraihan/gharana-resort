/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable eol-last */
import React, { useState } from 'react';
import galleryImage01 from './assets/resortImg001.png';
import galleryImage02 from './assets/resortImg002.png';
import galleryImage03 from './assets/resortImg003.png';
import galleryImage04 from './assets/resortImg004.png';
import galleryImage05 from './assets/resortImg005.png';
import galleryImage06 from './assets/resortImg006.png';
import galleryImage07 from './assets/resortImg007.png';
import galleryImage08 from './assets/resortImg008.png';
import galleryImage09 from './assets/resortImg009.png';
import galleryImage10 from './assets/resortImg010.png';
import galleryImage11 from './assets/resortImg011.png';
import galleryImage12 from './assets/resortImg012.png';
import galleryImage13 from './assets/resortImg013.png';
import galleryImage14 from './assets/resortImg014.png';
import galleryImage15 from './assets/resortImg015.png';
import galleryImage16 from './assets/resortImg016.png';
import galleryImage17 from './assets/resortImg017.png';
import galleryImage18 from './assets/resortImg018.png';
import ImageGallery from '../../layouts/shared/ImageGallery';
import { Helmet } from 'react-helmet';
import HeaderTitle from '../../layouts/shared/HeaderTitle';
import ContactBanner from '../../layouts/shared/ContactBanner';

const Gallery = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    return (
        <div>
            <section className="pt-10">
                <Helmet>
                    <title>Gharana Resort | Gallery </title>
                    <meta
                        name="keywords"
                        content="resort west bengal, ajodhya hill resort west bengal tourism, lava resort west bengal, taki resort west bengal, amaya resort west bengal, sea resort west bengal, gharana resort"
                    />
                </Helmet>
                <div className="mb-16 container px-5 mx-auto">
                    <HeaderTitle title="Gallery" />
                    <div>
                        <ImageGallery img1={galleryImage01} img2={galleryImage02} img3={galleryImage03} img4={galleryImage04} img5={galleryImage05} img6={galleryImage06} img7={galleryImage07} img8={galleryImage08} img9={galleryImage09}/>
                    </div>
                    <div className='mt-2'>
                        <ImageGallery img1={galleryImage10} img2={galleryImage11} img3={galleryImage12} img4={galleryImage13} img5={galleryImage05} img6={galleryImage15} img7={galleryImage16} img8={galleryImage17} img9={galleryImage18}/>
                    </div>
                </div>
            </section>
            <ContactBanner/>
        </div>
    );
};

export default Gallery;
