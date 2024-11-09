import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'Nutri-Tracker';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const faqs = [
    {
      question: 'How does Nutri-Tracker generate QR codes?',
      answer:
        "Nutri-Tracker automatically generates a unique QR code for each receipt. This code links to the customer's order details and nutritional information, accessible via a simple scan.",
    },
    {
      question: 'Can I customize the nutritional data for menu items?',
      answer:
        'Yes, admins can input and update nutritional data for each menu item, ensuring customers receive accurate and personalized dietary information.',
    },
    {
      question: 'Is Nutri-Tracker suitable for multiple shops?',
      answer:
        'Absolutely! Nutri-Tracker is designed as a multitenant system, allowing multiple shops to use the platform independently, making it ideal for scaling your business.',
    },
    {
      question: 'What devices can customers use to access their order details?',
      answer:
        'Customers can access their order details and nutritional information on any device with a QR code scanner, including smartphones and tablets.',
    },
    {
      question: 'How secure is the login system for admins and receptionists?',
      answer:
        'Nutri-Tracker employs a secure, role-based authentication system with robust password management to ensure that only authorized users can access sensitive data.',
    },
    {
      question: 'Can I view order history in Nutri-Tracker?',
      answer:
        'Yes, both customers and receptionists can view order history. Customers can track their past orders, while receptionists can manage and review customer orders efficiently.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Nutri-Tracker - Get in Touch`}</title>
        <meta
          name='description'
          content={`Reach out to Nutri-Tracker for any inquiries or support. Our team is here to assist you with all your questions and needs.`}
        />
      </Head>
      <WebSiteHeader projectName={'Nutri-Tracker'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Nutri-Tracker'}
          image={['Customer service representative smiling']}
          mainText={`Connect with Nutri-Tracker Support Team`}
          subTitle={`We're here to help with any questions or support you need regarding ${projectName}. Reach out to us and we'll respond promptly to assist you.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Contact Us Now`}
        />

        <FaqSection
          projectName={'Nutri-Tracker'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About Nutri-Tracker `}
        />

        <ContactFormSection
          projectName={'Nutri-Tracker'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person writing an email']}
          mainText={`Reach Out to Nutri-Tracker `}
          subTitle={`Have questions or need assistance with ${projectName}? Fill out the form below, and our team will get back to you promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'Nutri-Tracker'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
