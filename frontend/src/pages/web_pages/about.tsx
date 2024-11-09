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
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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
      name: 'Comprehensive Nutritional Insights',
      description:
        'Provide detailed nutritional information for each menu item, including calories, proteins, fats, and carbohydrates, helping customers make informed dietary choices.',
      icon: 'mdiFoodAppleOutline',
    },
    {
      name: 'Efficient Order Management',
      description:
        'Streamline order processing with tools that allow receptionists to generate detailed receipts and manage customer orders with ease.',
      icon: 'mdiOrderBoolAscending',
    },
    {
      name: 'Secure Role-Based Access',
      description:
        'Ensure data security with a robust authentication system that provides role-based access for admins and receptionists, safeguarding sensitive information.',
      icon: 'mdiLockOutline',
    },
  ];

  const testimonials = [
    {
      text: 'Nutri-Tracker has transformed the way we manage our menu and customer orders. The nutritional insights are a game-changer for our health-conscious clientele.',
      company: 'GreenBite Bistro',
      user_name: 'Alex Johnson, Head Chef',
    },
    {
      text: 'The QR code integration is seamless and efficient. Our customers love the easy access to their order details and nutritional information.',
      company: 'FreshEats Cafe',
      user_name: 'Emily Carter, Manager',
    },
    {
      text: 'As a small business, Nutri-Tracker has been invaluable in helping us provide personalized service to our customers. Highly recommend!',
      company: 'Healthy Haven',
      user_name: 'Michael Lee, Owner',
    },
    {
      text: 'The role-based access ensures our data is secure, and the order management tools have streamlined our operations significantly.',
      company: 'NutriDelight Diner',
      user_name: 'Sarah Kim, Operations Manager',
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
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Nutri-Tracker - Our Mission and Vision`}</title>
        <meta
          name='description'
          content={`Learn more about Nutri-Tracker, our mission to revolutionize nutrition tracking for small restaurants, and how we empower businesses with innovative solutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'Nutri-Tracker'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Nutri-Tracker'}
          image={['Team brainstorming in office']}
          mainText={`Unveiling the Story of Nutri-Tracker`}
          subTitle={`Discover the journey and vision behind ${projectName}. Learn how we aim to transform nutrition tracking for small restaurants and micro-businesses with innovative solutions.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Journey`}
        />

        <AboutUsSection
          projectName={'Nutri-Tracker'}
          image={['Team discussing project goals']}
          mainText={`Our Mission and Vision at Nutri-Tracker`}
          subTitle={`At ${projectName}, we are committed to enhancing the dining experience by providing personalized nutrition tracking solutions. Our goal is to empower small restaurants and micro-businesses with the tools they need to offer detailed nutritional insights to their customers.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <FeaturesSection
          projectName={'Nutri-Tracker'}
          image={['Icons representing key features']}
          withBg={0}
          features={features_points}
          mainText={`Innovative Features of Nutri-Tracker`}
          subTitle={`Explore the powerful features of ${projectName} that make nutrition tracking seamless and efficient for small restaurants and micro-businesses.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS_DIVERSITY || ''}
        />

        <TestimonialsSection
          projectName={'Nutri-Tracker'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Users Say About Nutri-Tracker `}
        />

        <ContactFormSection
          projectName={'Nutri-Tracker'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person using a smartphone']}
          mainText={`Connect with Nutri-Tracker Today `}
          subTitle={`Have questions or need support? Reach out to us anytime, and our team will respond promptly to assist you with ${projectName}.`}
        />
      </main>
      <WebSiteFooter projectName={'Nutri-Tracker'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
