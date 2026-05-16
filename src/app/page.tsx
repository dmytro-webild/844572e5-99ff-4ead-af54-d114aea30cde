"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, Star, Zap } from "lucide-react";

export default function LandingPage() {
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
      background={{
        variant: "gradient-bars"}}
      title="Empowering Champions Through Excellence"
      description="We turn projects into achievements, ideas into victories, and athletes into legends. Strategic sports management from the ground up."
      testimonials={[
        {
          name: "Marcus V.",          handle: "@m.sports",          testimonial: "BRGD changed how I approach my career. True professionals.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fit-young-woman-sportswear-posing_23-2148759027.jpg"},
        {
          name: "Elena R.",          handle: "@elena.athlete",          testimonial: "The management here is unparalleled in Jacksonville.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-business-woman-office-isolated_1303-21365.jpg"},
        {
          name: "Carlos D.",          handle: "@carlos.coach",          testimonial: "Excellence and discipline in every detail.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/horizontal-shot-curly-haired-teenage-girl-dressed-jumper-rides-electric-scooter-through-city-holds-mobile-phone-hands-browses-internet-reads-travel-publication-socail-media-looks-away_273609-60625.jpg"},
        {
          name: "Sofia L.",          handle: "@sofia.bjj",          testimonial: "No shortcuts, just results. Best academy around.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-confident-african-american-sportsman-workout-city-stadium_574295-3119.jpg"},
        {
          name: "Pedro M.",          handle: "@pedro.pro",          testimonial: "The legacy they've built over 35 years is real.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-young-bearded-man_273609-16029.jpg"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-teen-practicing-taekwondo_23-2150260456.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/shaved-head-karate-fighter-sits-tatami-gym_613910-13403.jpg",          alt: "Shaved head karate fighter sits on the tatami"},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-hip-hop-performer-posing-one-hand_23-2148455956.jpg",          alt: "Hip hop performer"},
        {
          src: "http://img.b2bpic.net/free-photo/athletic-tattooed-man-white-blank-tank-t-shirt-stretching-his-legs-touching-them-floor-left-side-position_346278-1584.jpg",          alt: "Athletic man stretching"},
        {
          src: "http://img.b2bpic.net/free-photo/karate-fighters-tatami-fighting-championship_654080-1916.jpg",          alt: "Karate fighters on tatami"},
        {
          src: "http://img.b2bpic.net/free-photo/young-brutal-bearded-muscular-man-wear-red-shirt-shorts-cap-stadium_627829-7589.jpg",          alt: "Brutal bearded muscular man"},
      ]}
      avatarText="Join 500+ successful athletes"
      marqueeItems={[
        { type: "text", text: "Athlete Management" },
        { type: "text", text: "Club Operations" },
        { type: "text", text: "Strategic Branding" },
        { type: "text", text: "Pro Events" },
        { type: "text", text: "Elite Training" },
      ]}
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
        {
          title: "Athlete Management",          description: "Identifying and developing talent with full career support.",          imageSrc: "http://img.b2bpic.net/free-photo/two-men-having-conversation-dressing-room_329181-13228.jpg"},
        {
          title: "Club Management",          description: "Performance-focused models for sustainable organizational growth.",          imageSrc: "http://img.b2bpic.net/free-photo/athletic-man-texting-people-meet_482257-91400.jpg"},
        {
          title: "Sports Marketing",          description: "Creative positioning to generate brand visibility and value.",          imageSrc: "http://img.b2bpic.net/free-photo/training-supplies-near-tablet-with-picture_23-2147750794.jpg"},
        {
          title: "Event Organization",          description: "Delivering high-standard sporting events and experiences.",          imageSrc: "http://img.b2bpic.net/free-photo/male-field-hockey-coach-arena_23-2149668560.jpg"},
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
        { id: "3", title: "Events Delivered", value: "200+", icon: Zap },
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
        {
          id: "t1",          name: "CEO BRGD",          role: "Sports Management",          description: "Leading BRGD for over 24 years.",          imageSrc: "http://img.b2bpic.net/free-photo/successful-confident-businessman-glasses-speaking-beige-wall_176420-129.jpg"},
        {
          id: "t2",          name: "Lead Instructor",          role: "Jiu Jitsu Legacy",          description: "Shaping minds and bodies since day one.",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-men-practicing-tai-chi-together_23-2149960054.jpg"},
        {
          id: "t3",          name: "Marketing Team",          role: "Creative Lead",          description: "Generating visibility for the BRGD brand.",          imageSrc: "http://img.b2bpic.net/free-photo/black-white-minimal-portrait_23-2149152609.jpg"},
        {
          id: "t4",          name: "Operations Lead",          role: "Club Management",          description: "Optimizing efficiency across our centers.",          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-blond-female-dressed-white-shirt-red-eyeglasses_613910-3569.jpg"},
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
        {
          id: "t-1",          name: "Sarah Miller",          role: "Parent",          company: "Academy User",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/father-daughter-laughing-together_23-2147615922.jpg"},
        {
          id: "t-2",          name: "James Doe",          role: "Athlete",          company: "BRGD Group",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-sideways-portrait-woman-with-braid-hairstyle_23-2148322424.jpg"},
        {
          id: "t-3",          name: "Emma Wilson",          role: "Client",          company: "Sports Brand",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg"},
        {
          id: "t-4",          name: "Robert B.",          role: "Coach",          company: "Team BRGD",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-holding-football-goal-looking-away_23-2148203675.jpg"},
        {
          id: "t-5",          name: "Chloe S.",          role: "Adult Class",          company: "Jacksonville BJJ",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-confident-karate-player_107420-65029.jpg"},
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
        {
          id: "f1",          title: "Who can join?",          content: "We have classes for all ages, from toddlers to advanced adults."},
        {
          id: "f2",          title: "What is the mission?",          content: "To empower athletes and brands through discipline, loyalty, and truth."},
        {
          id: "f3",          title: "Where are you located?",          content: "We are based in Jacksonville, Florida."},
      ]}
      title="Common Questions"
      description="Learn more about our programs and approach."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      tag="Contact"
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      title="Be Part of the Legacy"
      description="Reach out today to start your journey."
      imageSrc="http://img.b2bpic.net/free-photo/abstract-chromatic-gradient_23-2151920632.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-82761.jpg"
      logoText="BRGD Sports Group"
      columns={[
        {
          title: "Programs",          items: [
            { label: "Adult Class", href: "#" },
            { label: "Baby Class", href: "#" },
            { label: "Women Class", href: "#" },
          ],
        },
        {
          title: "Company",          items: [
            { label: "About Us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#contact" },
          ],
        },
        {
          title: "Legal",          items: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms", href: "#" },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
