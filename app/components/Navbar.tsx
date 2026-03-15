'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
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

  return (
   <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
    ${isScrolled ? 'bg-white/90 backdrop-blur-2xl shadow-lg py-4' : 'bg-white/90 md:bg-transparent py-8'}
  `}
>
           <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between">
             <div className="flex items-center gap-4">
               <div className="w-20 h-20 relative rounded-2xl overflow-hidden shadow-md">
     <Image
       src="/images/AYC.png"   // Path inside the public folder
       alt="Youth Circle Logo"
       fill                     // Makes the image cover the parent div
       className="object-cover"
     />
   </div>
               <div>
                 <Link href="/" className="font-bold text-2xl tracking-tight hover:text-emerald-900 transition">
                  Al-Shams Youth Circle
                </Link>
                 <div className="text-xs text-emerald-800 -mt-1 ">Empowering Youth with Faith & Knowledge</div>
               </div>
             </div>
       
             <div className="hidden md:flex items-center gap-10 text-sm font-medium">
               {navLinks.map((link) => (
                 <a
                   key={link.name}
                   href={link.href}
                   className="hover:text-emerald-600 transition-colors"
                 >
                   {link.name}
                 </a>
               ))}
             <Link href="/register">
  <button className="ml-4 px-7 py-3 bg-zinc-900 text-white rounded-2xl text-sm font-semibold flex items-center gap-2 hover:bg-black transition-all group">
    Join Now
    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
  </button>
</Link>
             </div>
   
             <button className="md:hidden text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X /> : <Menu />}
             </button>
           </div>
   
           {/* Mobile menu */}
           {isMenuOpen && (
             <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="md:hidden bg-white/95 backdrop-blur-xl border-t px-6 py-8"
             >
               <div className="flex flex-col gap-6 text-lg font-medium">
                 {navLinks.map((link) => (
                   <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
                     {link.name}
                   </a>
                 ))}
                 <button className="mt-4 w-full py-4 bg-zinc-900 text-white rounded-2xl">
                   Join the Circle
                 </button>
               </div>
             </motion.div>
           )}
         </nav>
   
  );
}
