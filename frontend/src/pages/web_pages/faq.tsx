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
      question: 'What is Nutri-Tracker and how does it work?',
      answer:
        'Nutri-Tracker is a system designed for small restaurants to provide personalized nutrition tracking for customers. It uses QR codes on receipts to give customers access to detailed order and nutritional information.',
    },
    {
      question: 'How can I integrate QR codes into my receipts?',
      answer:
        "Nutri-Tracker automatically generates a unique QR code for each receipt. This code links to the customer's order details and nutritional information, accessible via a simple scan.",
    },
    {
      question: 'Can I manage multiple shops with Nutri-Tracker?',
      answer:
        'Yes, Nutri-Tracker is designed as a multitenant system, allowing you to manage multiple shops independently, making it ideal for scaling your business.',
    },
    {
      question: 'What kind of nutritional data can I provide?',
      answer:
        'You can input detailed nutritional data for each menu item, including calories, proteins, fats, and carbohydrates, ensuring customers receive accurate dietary information.',
    },
    {
      question: 'Is there a customer portal available?',
      answer:
        'Yes, Nutri-Tracker offers a responsive customer portal where customers can access their order history and nutritional information on any device.',
    },
    {
      question: 'How secure is Nutri-Tracker?',
      answer:
        'Nutri-Tracker employs a secure, role-based authentication system with robust password management to ensure that only authorized users can access sensitive data.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Nutri-Tracker FAQ - Your Questions Answered`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about Nutri-Tracker, including features, pricing, and support. Contact us for more information.`}
        />
      </Head>
      <WebSiteHeader projectName={'Nutri-Tracker'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Nutri-Tracker'}
          image={['Person reading a FAQ document']}
          mainText={`Find Answers with Nutri-Tracker FAQ`}
          subTitle={`Explore our frequently asked questions to learn more about ${projectName}. Get insights into features, pricing, and support options available for you.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'Nutri-Tracker'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Common Questions About Nutri-Tracker `}
        />

        <ContactFormSection
          projectName={'Nutri-Tracker'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person filling out a form']}
          mainText={`Get in Touch with Nutri-Tracker `}
          subTitle={`Have more questions or need assistance with ${projectName}? Fill out the form below, and our team will respond promptly to help you.`}
        />
      </main>
      <WebSiteFooter projectName={'Nutri-Tracker'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
