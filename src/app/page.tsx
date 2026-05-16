"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import Input from '@/components/form/Input';
import { useState } from 'react';
import { Award, Star, Zap } from "lucide-react";

export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Team", id: "team" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="BRGD Sports Group"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{ variant: "gradient-bars"}}
      title="Empowering Champions Through Excellence"
      description="We turn projects into achievements, ideas into victories, and athletes into legends. Strategic sports management from the ground up."
      testimonials={[
        { name: "Marcus V.", handle: "@m.sports", testimonial: "BRGD changed how I approach my career. True professionals.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/fit-young-woman-sportswear-posing_23-2148759027.jpg" },
        { name: "Elena R.", handle: "@elena.athlete", testimonial: "The management here is unparalleled in Jacksonville.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/elderly-business-woman-office-isolated_1303-21365.jpg" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-teen-practicing-taekwondo_23-2150260456.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="35 Years Shaping Champions"
      description={[
        "BRGD Sports Group delivers strategic and innovative solutions across the key areas of high-performance sports. We combine 35 years of legacy with modern management techniques.",        "Our integrated approach focuses on Athlete Management, Club Development, Sports Marketing, and large-scale event organization."]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Athlete Management", description: "Identifying and developing talent with full career support.", imageSrc: "http://img.b2bpic.net/free-photo/two-men-having-conversation-dressing-room_329181-13228.jpg" },
        { title: "Club Management", description: "Performance-focused models for sustainable organizational growth.", imageSrc: "http://img.b2bpic.net/free-photo/athletic-man-texting-people-meet_482257-91400.jpg" },
      ]}
      title="Our Core Services"
      description="Integrated solutions for athletes, clubs, and sports brands."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "1", title: "Years Experience", value: "35+", icon: Award },
        { id: "2", title: "Champions Formed", value: "500+", icon: Star },
      ]}
      title="Our Impact"
      description="Numbers that define our commitment to excellence."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      members={[
        { id: "t1", name: "CEO BRGD", role: "Sports Management", description: "Leading BRGD for over 24 years.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do6sgbi6jl62TwwqVebatHryuV/uploaded-1778936632365-qq4r7nt7.png" },
      ]}
      title="Our Leadership"
      description="Passionate professionals driving the BRGD legacy."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        { id: "t-1", name: "Sarah Miller", role: "Parent", company: "Academy User", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?id=27507695" },
      ]}
      title="What Our Community Says"
      description="Hear from the athletes and families who trust our legacy."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Who can join?", content: "We have classes for all ages, from toddlers to advanced adults." },
      ]}
      title="Common Questions"
      description="Learn more about our programs and approach."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact" className="py-20">
    <div className="container mx-auto max-w-2xl bg-card p-10 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-8">Build Your Future</h2>
      <div className="space-y-4">
        <Input value={name} onChange={setName} placeholder="Full Name" />
        <Input value={email} onChange={setEmail} placeholder="Email Address" />
        <Input value={phone} onChange={setPhone} placeholder="Phone Number" />
        <select className="w-full p-3 bg-background border border-accent rounded-lg" onChange={(e) => console.log(e.target.value)}>
            <option>Service Interest</option>
            <option>Athlete Management</option>
            <option>Club Operations</option>
        </select>
        <textarea className="w-full p-3 bg-background border border-accent rounded-lg" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} />
        <button className="w-full py-4 bg-primary-cta text-white rounded-lg">Submit Inquiry</button>
      </div>
    </div>
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="BRGD Sports Group"
      columns={[
        {
          title: "Contact",          items: [
            { label: "Jacksonville, FL", href: "#" },
            { label: "hello@brgdsports.com", href: "mailto:hello@brgdsports.com" },
          ],
        }
      ]}
      copyrightText="© 2025 | Webild"
      className="bg-background-accent p-10"
    />
    <div className="flex justify-center p-5">
        <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Do6sgbi6jl62TwwqVebatHryuV/uploaded-1778936514950-gq4a8v98.png" alt="Quote" className="max-w-xs" />
    </div>
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}