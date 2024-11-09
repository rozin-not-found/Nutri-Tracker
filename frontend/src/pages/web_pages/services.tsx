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
  FeaturesDesigns,
  PricingDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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
      name: 'Seamless QR Code Integration',
      description:
        'Generate and integrate QR codes on receipts effortlessly, allowing customers to access detailed order and nutritional information with a simple scan.',
      icon: 'mdiQrcodeScan',
    },
    {
      name: 'Detailed Nutritional Analysis',
      description:
        'Provide comprehensive nutritional data for each menu item, including calories, proteins, fats, and carbohydrates, helping customers make informed dietary choices.',
      icon: 'mdiFoodApple',
    },
    {
      name: 'Efficient Order Management',
      description:
        'Streamline your order processing with tools that enable receptionists to generate detailed receipts and manage customer orders efficiently.',
      icon: 'mdiClipboardText',
    },
    {
      name: 'Role-Based Access Control',
      description:
        'Ensure data security with a robust authentication system that provides role-based access for admins and receptionists, safeguarding sensitive information.',
      icon: 'mdiShieldAccount',
    },
    {
      name: 'Multi-Shop Management',
      description:
        'Manage multiple shops independently with our multitenant system, perfect for scaling your business and maintaining organized operations.',
      icon: 'mdiStore',
    },
    {
      name: 'Responsive Customer Portal',
      description:
        'Offer a mobile-friendly portal for customers to access their order history and nutritional information, enhancing their dining experience.',
      icon: 'mdiCellphoneLink',
    },
  ];

  const pricing_features = {
    standard: {
      features: [
        'QR Code Integration',
        'Nutritional Analysis',
        'Order Management',
      ],
      limited_features: ['Single Shop Management', 'Basic Customer Portal'],
    },
    premium: {
      features: [
        'QR Code Integration',
        'Nutritional Analysis',
        'Order Management',
        'Role-Based Access Control',
      ],
      also_included: ['Multi-Shop Management', 'Advanced Customer Portal'],
    },
    business: {
      features: [
        'QR Code Integration',
        'Nutritional Analysis',
        'Order Management',
        'Role-Based Access Control',
        'Multi-Shop Management',
        'Responsive Customer Portal',
      ],
    },
  };

  const description = {
    standard:
      'Ideal for individual restaurant owners looking to enhance their service with basic nutrition tracking and order management features.',
    premium:
      'Perfect for small startups or agencies that require advanced features like multi-shop management and enhanced customer portals.',
    business:
      'Designed for enterprises needing comprehensive solutions with full access to all features, ensuring seamless operations across multiple locations.',
  };

  const testimonials = [
    {
      text: 'Nutri-Tracker has been a game-changer for our restaurant. The QR code integration is seamless, and our customers love the easy access to nutritional information.',
      company: 'Bistro Bliss',
      user_name: 'Anna Thompson, Owner',
    },
    {
      text: 'The multi-shop management feature is perfect for our growing chain. Nutri-Tracker keeps everything organized and efficient, from orders to nutritional data.',
      company: 'Healthy Haven',
      user_name: 'James Carter, Operations Manager',
    },
    {
      text: 'Our customers appreciate the detailed nutritional breakdowns, and it has set us apart from other local eateries. Nutri-Tracker is a must-have!',
      company: 'Vitality Vibes',
      user_name: 'David Brown, Co-Founder',
    },
    {
      text: "Nutri-Tracker's features are intuitive and easy to use. It has made our menu management and customer service more efficient than ever.",
      company: 'PurePlate Restaurant',
      user_name: 'Jessica White, General Manager',
    },
    {
      text: 'The role-based access ensures our data is secure, and the order management tools have streamlined our operations significantly.',
      company: 'NutriDelight Diner',
      user_name: 'Sarah Kim, Operations Manager',
    },
    {
      text: 'As a small business, Nutri-Tracker has been invaluable in helping us provide personalized service to our customers. Highly recommend!',
      company: 'GreenBite Bistro',
      user_name: 'Michael Lee, Owner',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Nutri-Tracker Services - Enhance Your Restaurant Experience`}</title>
        <meta
          name='description'
          content={`Explore the comprehensive services offered by Nutri-Tracker, designed to enhance nutrition tracking and order management for small restaurants and micro-businesses.`}
        />
      </Head>
      <WebSiteHeader projectName={'Nutri-Tracker'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Nutri-Tracker'}
          image={['Restaurant staff using tablet']}
          mainText={`Elevate Your Dining Experience with Nutri-Tracker`}
          subTitle={`Discover the innovative services offered by ${projectName} to enhance nutrition tracking and streamline order management for your restaurant. Empower your business with our cutting-edge solutions.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'Nutri-Tracker'}
          image={['Icons showcasing app features']}
          withBg={1}
          features={features_points}
          mainText={`Discover Nutri-Tracker's Key Features`}
          subTitle={`Explore the powerful features of ${projectName} that enhance nutrition tracking and streamline operations for your restaurant.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <PricingSection
          projectName={'Nutri-Tracker'}
          withBg={0}
          features={pricing_features}
          description={description}
        />

        <TestimonialsSection
          projectName={'Nutri-Tracker'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied Nutri-Tracker Users `}
        />

        <ContactFormSection
          projectName={'Nutri-Tracker'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on laptop']}
          mainText={`Reach Out to Nutri-Tracker `}
          subTitle={`Have questions or need more information about ${projectName}? Contact us anytime, and our team will respond promptly to assist you.`}
        />
      </main>
      <WebSiteFooter projectName={'Nutri-Tracker'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
