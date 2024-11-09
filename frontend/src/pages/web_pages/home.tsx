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
  FeaturesDesigns,
  AboutUsDesigns,
  FaqDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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

  const features_points = [
    {
      name: 'QR Code Integration',
      description:
        'Easily generate and integrate QR codes on receipts, allowing customers to access detailed order and nutritional information with a simple scan.',
      icon: 'mdiQrcode',
    },
    {
      name: 'Nutritional Breakdown',
      description:
        'Provide your customers with comprehensive nutritional data for each menu item, including calories, proteins, fats, and carbohydrates, enhancing their dining experience.',
      icon: 'mdiNutrition',
    },
    {
      name: 'Order Management',
      description:
        'Streamline your order processing with efficient management tools, enabling receptionists to generate detailed receipts and manage customer orders effortlessly.',
      icon: 'mdiClipboardList',
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
        <title>{`Nutri-Tracker - Personalized Nutrition Tracking for Restaurants`}</title>
        <meta
          name='description'
          content={`Discover Nutri-Tracker, the ultimate solution for personalized nutrition tracking in small restaurants and micro-businesses. Explore our features and learn how we can help you provide detailed nutritional information to your customers.`}
        />
      </Head>
      <WebSiteHeader projectName={'Nutri-Tracker'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Nutri-Tracker'}
          image={['Healthy meal with QR code']}
          mainText={`Transform Your Dining Experience with Nutri-Tracker`}
          subTitle={`Welcome to Nutri-Tracker, the ultimate solution for personalized nutrition tracking in small restaurants and micro-businesses. Empower your customers with detailed nutritional insights and enhance their dining experience.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'Nutri-Tracker'}
          image={['Icons representing app features']}
          withBg={0}
          features={features_points}
          mainText={`Explore Nutri-Tracker's Powerful Features`}
          subTitle={`Discover how ${projectName} can enhance your restaurant's service with personalized nutrition tracking and seamless order management.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'Nutri-Tracker'}
          image={['Team collaborating on project']}
          mainText={`Discover the Vision Behind Nutri-Tracker`}
          subTitle={`At ${projectName}, we are dedicated to revolutionizing the dining experience for small restaurants and micro-businesses. Our mission is to provide personalized nutrition tracking, empowering customers with valuable insights into their dietary choices.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More`}
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
          image={['Person typing on laptop']}
          mainText={`Get in Touch with Nutri-Tracker `}
          subTitle={`Have questions or need assistance? Contact us anytime, and our team will respond promptly to help you make the most of ${projectName}.`}
        />
      </main>
      <WebSiteFooter projectName={'Nutri-Tracker'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
