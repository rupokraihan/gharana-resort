import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
  return (
    <div className="container mx-auto py-28">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to GHARANA RESORT! These terms and conditions outline the rules and regulations for
        the use of our website.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing this website, you agree to be bound by these terms and conditions. If you do
        not agree with any part of these terms, please do not use our website.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Use of the Website</h2>
      <p className="mb-4">
        You agree to use this website for lawful purposes and in a way that does not infringe on the
        rights of, restrict, or inhibit anyone else's use and enjoyment of the site.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
      <p className="mb-4">
        The content on this website, including text, images, and other materials, is protected by
        copyright and other intellectual property rights. You may not reproduce, modify, or
        distribute any part of this website without our prior written consent.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">
        GHARANA RESORT shall not be liable for any direct, indirect, incidental, consequential, or
        punitive damages arising out of your use of or inability to use the website.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Governing Law</h2>
      <p className="mb-4">
        These terms and conditions are governed by and construed in accordance with the laws of your
        jurisdiction.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our Terms and Conditions, please contact us at{' '}
        <Link to="/contact" className="text-blue-500 underline">
          gm@gharanaresort.com
        </Link>
        .
      </p>
    </div>
  );
};

export default TermsCondition;
