/* eslint-disable eol-last */
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-28">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to GHARANA RESORT! This Privacy Policy describes how we collect, use, and protect
        your personal information when you use our website.
      </p>

      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, and other relevant
        details when you book a room or interact with our website.
      </p>

      <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        The information we collect is used to provide and improve our services. We may also use it
        to communicate with you and customize your experience with GHARANA RESORT.
      </p>

      <h2 className="text-xl font-semibold mb-2">Data Security</h2>
      <p className="mb-4">
        We take appropriate measures to protect your personal information from unauthorized access
        and disclosure. However, no online transmission or storage can be completely secure.
      </p>

      <h2 className="text-xl font-semibold mb-2">Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. We are not responsible for the
        privacy practices or content of these third-party sites.
      </p>

      <h2 className="text-xl font-semibold mb-2">Changes to Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. Any changes will be reflected on this
        page, and we encourage you to review this policy periodically.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our Privacy Policy, please contact us at
        <Link to="/contact" className="text-blue-500 underline">
          gm@gharanaresort.com
        </Link>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
