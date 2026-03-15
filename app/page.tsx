'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  Menu, X, Trophy, Mic2, Users, Calendar, MapPin, ArrowRight,
  Facebook, Instagram, Twitter, Youtube, Linkedin
} from 'lucide-react';
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '/Story' },
    { name: 'Events', href: '#events' },
    { name: 'Activities', href: '#activities' },
    { name: 'The Circle', href: '#team' },
    { name: 'Voices', href: '#testimonials' },
  ];

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] overflow-x-hidden">
      
      {/* ─── Navbar ──────────────────────────────────────────────── */}
        <Navbar/>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute right-180 top-100 h-[70%] w-[50%] hidden lg:block">
  <Image
    src="/images/hero1.png"
    alt="Hero background"
    fill
    priority
    className="object-contain"
  />
</div>
<div className="absolute left-201 top-100 h-[70%] w-[50%] hidden lg:block">
  <Image
    src="/images/hero2.png"
    alt="Hero background"
    fill
    priority
    className="object-contain"
  />
</div>
        <motion.div style={{ y: heroY }} className="relative z-10 max-w-6xl px-6 text-center">
          <div className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm tracking-wider text-emerald-700 mb-8">
            FAITH • FITNESS • FELLOWSHIP
          </div>

          <h1 className="text-[80px] sm:text-[100px] md:text-[120px] leading-[0.92] font-black tracking-[-0.06em] text-zinc-900 mb-6">
            THE FUTURE<br />STARTS HERE.
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-zinc-600 font-light mb-12">
            A Karachi-based movement empowering Muslim youth through sports, inspiring talks, and real community.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.a
              href="#events"
              whileHover={{ scale: 1.04 }}
              className="px-10 py-5 bg-emerald-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              Explore Events
            </motion.a>
            <Link href="/register">
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="px-10 py-5 border-2 border-zinc-900 text-zinc-900 text-lg font-semibold rounded-2xl hover:bg-zinc-900 hover:text-white transition-all"
            >
              Join the Circle
            </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating icons (illustrative touch) */}
       
        
      </section>

      {/* ─── Story ───────────────────────────────────────────────── */}
      <section id="story" className="py-32 max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-emerald-600 text-xs tracking-widest uppercase mb-4">Founded 2022 • Karachi</div>
            <h2 className="text-6xl md:text-7xl font-black leading-tight tracking-tighter mb-8">
              From 12 friends<br />to thousands united.
            </h2>
            <p className="text-xl text-zinc-600 max-w-xl">
              Youth Circle creates spaces where young Muslims grow in faith, fitness, leadership, and friendship — through weekly sports, powerful talks, community gatherings, and skill-building workshops.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              src="/images/12344.PNG"
              alt="Youth community gathering"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ─── Events ──────────────────────────────────────────────── */}
      <section id="events" className="bg-zinc-950 text-white py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <div className="text-emerald-400 text-xs tracking-widest uppercase">Upcoming</div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter">Events that matter</h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="pb-20"
          >
            {[
              {
                title: "Youth Circle Inaugration Ceremony",
                date: "14 Feb 2026",
                location: "Ghafooria Masjid, Garden East",
                img: "/images/event1.jpeg",
              },
              {
                title: "Youth, you are the turning point.",
                date: "8 March 2026",
                location: "Youth Circle Hall",
                img: "/images/event2.jpeg",
              },
              {
                title: "Chai Night",
                date: "6 March 2026",
                location: "Seaview Beach",
                img: "/images/event3.jpeg",
              },
              {
                title: "Ramadan Cricket League",
                date: "12 March 2026",
                location: "Ghafooria Masjid, Garden East",
                img: "/images/event4.avif",
              },
            ].map((event, i) => (
              <SwiperSlide key={i}>
                <div className="bg-zinc-900 rounded-3xl overflow-hidden group">
                  <div className="h-72 relative">
                    <img src={event.img} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="flex gap-6 text-sm text-emerald-400 mb-4">
                      <div><Calendar className="inline mr-1.5" size={16} /> {event.date}</div>
                      <div><MapPin className="inline mr-1.5" size={16} /> {event.location}</div>
                    </div>
                    <h3 className="text-3xl font-semibold mb-4">{event.title}</h3>
                    <Link href="/register">
                    <button className="mt-6 w-full py-4 bg-white text-black rounded-2xl font-semibold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      Register Now
                    </button></Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ─── Activities ──────────────────────────────────────────── */}
      <section id="activities" className="py-32 max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <div className="text-emerald-600 text-xs tracking-widest uppercase mb-4">What we do</div>
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter">Activities that transform</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Trophy, title: "Sports & Fitness", desc: "Leagues, training camps, fitness challenges" },
            { icon: Mic2, title: "Inspiring Talks", desc: "Weekly youth lectures & open-mic sessions" },
            { icon: Users, title: "Community Gatherings", desc: "Iftars, Eid events, beach clean-ups" },
            { icon: Calendar, title: "Leadership & Skills", desc: "Public speaking, Quran study, soft skills" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-3xl border border-zinc-100 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <item.icon className="w-12 h-12 text-emerald-600 mb-8" />
              <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
              <p className="text-zinc-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Team ────────────────────────────────────────────────── */}
      <section id="team" className="bg-emerald-50/50 py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
          <div className="mb-20">
            <div className="text-emerald-600 text-xs tracking-widest uppercase mb-4">The heart of the movement</div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter">Meet our core team</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { name: "Mufti Hamza Al Abbasi", role: "Founder", img: "/images/team1.png" },
              { name: "Ahmed Abdullah", role: "Programs Lead", img: "/images/team2.png" },
              { name: "Hasan Abdullah", role: "Manager", img: "/images/team3.png" },
              { name: "Saad Aarif", role: "Community Lead", img: "/images/team4.png" },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="mx-auto w-64 h-64 rounded-3xl overflow-hidden shadow-xl mb-6">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="font-semibold text-2xl">{member.name}</div>
                <div className="text-emerald-700">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ────────────────────────────────────────── */}
      <section id="testimonials" className="py-32 max-w-4xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6500 }}
          pagination={{ clickable: true }}
          className="text-center"
        >
          {[
            {
              quote: "Youth Circle gave me confidence, real friends, and a stronger connection to my faith.",
              name: "Zeeshan Ahmed",
              year: "Feb, 2026",
            },
            {
              quote: "The combination of sports, talks, and community completely changed my life.",
              name: "Omar Farooq",
              year: "March, 2026",
            },
          ].map((t, i) => (
            <SwiperSlide key={i}>
              <div className="px-4">
                <p className="text-3xl md:text-4xl leading-tight font-light italic mb-10">
                  “{t.quote}”
                </p>
                <div className="text-xl font-medium">{t.name}</div>
                <div className="text-emerald-600 text-sm mt-1">{t.year}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────── */}
          <Footer/>
    </div>
  );
}