'use client';

import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin
} from 'lucide-react';

export default function Footer() {

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Events', href: '#events' },
    { name: 'Activities', href: '#activities' },
    { name: 'The Circle', href: '#team' },
    { name: 'Voices', href: '#testimonials' },
  ];

  return (
   <footer className="bg-zinc-950 text-white py-20">
           <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
             <div className="md:col-span-5">
               <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 relative rounded-2xl overflow-hidden shadow-md">
     <Image
       src="/images/AYC.png"   // Path inside the public folder
       alt="Youth Circle Logo"
       fill                     // Makes the image cover the parent div
       className="object-cover"
     />
   </div>
                 <span className="text-3xl font-black">Al-Shams Youth Circle</span>
               </div>
               <p className="text-zinc-400 max-w-md">
                 Empowering Muslim youth in Karachi through faith, fitness, and fellowship.
               </p>
             </div>
   
             <div className="md:col-span-3">
               <div className="text-sm uppercase tracking-wider text-emerald-500 mb-6">Navigation</div>
               <div className="space-y-3 text-zinc-300">
                 {navLinks.map((l) => (
                   <a key={l.name} href={l.href} className="block hover:text-white transition">
                     {l.name}
                   </a>
                 ))}
               </div>
             </div>
   
             <div className="md:col-span-4">
               <div className="text-sm uppercase tracking-wider text-emerald-500 mb-6">Connect</div>
              <div className="flex gap-6 text-3xl">
    <a href="https://facebook.com/alshamsyouthcircle" target="_blank" rel="noopener noreferrer">
      <Facebook className="hover:text-emerald-400 cursor-pointer transition" />
    </a>
    <a href="https://instagram.com/alshamsyouthcircle" target="_blank" rel="noopener noreferrer">
      <Instagram className="hover:text-emerald-400 cursor-pointer transition" />
    </a>
    <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
      <Twitter className="hover:text-emerald-400 cursor-pointer transition" />
    </a>
    <a href="https://youtube.com/@alshamsmedia" target="_blank" rel="noopener noreferrer">
      <Youtube className="hover:text-emerald-400 cursor-pointer transition" />
    </a>
    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
      <Linkedin className="hover:text-emerald-400 cursor-pointer transition" />
    </a>
  </div>
               <div className="mt-12 text-sm text-zinc-500">
                 © {new Date().getFullYear()} Youth Circle Karachi
               </div>
             </div>
           </div>
         </footer>)
}
