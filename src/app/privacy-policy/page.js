import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy - Besondres Deutch",
  description: "Privacy and personal data protection policy of the Besondres Deutch German language school.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#69140E]/5 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="avoid-emoji">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#69140E] dark:text-[#FFFFFF] text-center sm:text-left">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#69140E]/60 dark:text-[#FFFFFF]/60 text-center sm:text-left mt-4">
            Last updated: August 19, 2025
          </p>

          <h2 className="text-3xl font-semibold mt-12 text-[#69140E] dark:text-[#FFFFFF]">
            1. General Provisions
          </h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            This document describes the privacy policy (hereinafter – the Policy) for the
            website of the "Besondres Deutch" language school. We respect
            your privacy and strive to protect your personal data
            in accordance with the Law of Ukraine “On Personal Data Protection”.
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">
            2. Collection and Use of Personal Data
          </h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            <strong className="font-semibold text-[#69140E] dark:text-[#FFFFFF]">
              Personal data
            </strong>{' '}
            is any information that makes it possible to identify an individual.
            We collect the data you knowingly provide to us when filling out forms on
            the Site (name, phone number, email).
          </p>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            By filling out a form, you{' '}
            <strong className="font-semibold text-[#69140E] dark:text-[#FFFFFF]">
              consent to the processing
            </strong>{' '}
            of this data for the purpose of handling your application, contacting you and
            informing you about our services.
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">
            3. Cookies
          </h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            We use{' '}
            <strong className="font-semibold text-[#69140E] dark:text-[#FFFFFF]">
              cookies
            </strong>{' '}
            and analytics services (for example, Google Analytics) to collect
            anonymized statistics that help us improve the Site. This
            information is not personally linked to you.
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">
            4. Data Storage and Protection
          </h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            We store your data only for as long as necessary and
            take appropriate measures to protect it from unauthorized
            access.
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">
            5. Your Rights
          </h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            You have the right to access, correct and delete your data,
            and you may withdraw your consent to its processing. To exercise
            these rights, please contact us.
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">
            6. Disclosure to Third Parties
          </h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            We guarantee that we{' '}
            <strong className="font-semibold text-[#69140E] dark:text-[#FFFFFF]">
              do not share your personal data with third parties
            </strong>
            , except as required by the laws of Ukraine.
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">
            7. Changes and Consent
          </h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            We may update this Policy by publishing changes on this page.{' '}
            <strong className="font-semibold text-[#69140E] dark:text-[#FFFFFF]">
              By using the Site, you confirm your agreement with its terms.
            </strong>
          </p>

          <h2 className="text-3xl font-semibold mt-16 text-[#69140E] dark:text-[#FFFFFF]">
            8. Contact Information
          </h2>
          <p className="text-xl leading-loose text-[#69140E]/80 dark:text-[#FFFFFF]/80 mt-4">
            If you have any questions, you can contact us
            using the{' '}
            <Link href="/application" className="text-[#E85F5C] hover:underline">
              contact form
            </Link>{' '}
            on the website.
          </p>
        </div>
      </div>
    </div>
  );
}
