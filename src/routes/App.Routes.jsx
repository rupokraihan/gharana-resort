/* eslint-disable key-spacing */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable function-paren-newline */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable semi */

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/pages/Home/Home';
import Room from '../components/pages/Room/Room';
import Contact from '../components/pages/Contact/Contact';
import BookingForm from '../components/pages/BookingForm/BookingForm';
import QueryFormClient from '../components/pages/QueryForm/QueryFormClient';
import Event from '../components/pages/Event/Event';
import Gallery from '../components/pages/Gallery/Gallery';
import Restaurant from '../components/pages/Restaurant/Restaurant';
import Packages from '../components/pages/Packages/Packages';
import Menu from '../components/pages/Restaurant/Menu/Menu';
import PrivacyPolicy from '../components/pages/Policy/Privacypolicy';
import TermsCondition from '../components/pages/Policy/TermsCondition';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/room',
                element: <Room />
            },
            {
                path: 'restaurant',
                element: <Restaurant />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'packages',
                element: <Packages />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/booking-form',
                element: <BookingForm />
            },
            {
                path: '/query-form',
                element: <QueryFormClient />
            },
            {
                path: '/event',
                element: <Event />
            },
            {
                path: '/gallery',
                element:<Gallery/>
            },
            {
                path: '/privacy-policy',
                element:<PrivacyPolicy/>
            },
            {
                path: '/terms-and-condition',
                element:<TermsCondition/>
            },
        ]
    }
]);