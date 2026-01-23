 'use client';

 import Link from 'next/link';
 import { motion } from 'framer-motion';

 export default function Navigation() {
   const items = [
     { href: '#how-it-works', label: 'How It Works' },
     { href: '#features', label: 'Features' },
     { href: '#revenue', label: 'Revenue' },
     { href: '#ecosystem', label: 'Ecosystem' },
     { href: '#start', label: 'Start' },
   ];

   return (
     <header className="fixed top-0 left-0 w-full z-50 bg-white/5 border-b border-white/10 backdrop-filter backdrop-blur-md">
       <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
         <div className="flex items-center space-x-3">
           <div className="text-2xl font-black gradient-text">INTIMUBER</div>
         </div>
         <ul className="hidden md:flex items-center space-x-6 text-white/80">
           {items.map((it) => (
             <li key={it.label}>
               <Link href={it.href} className="hover:text-white transition-colors">
                 {it.label}
               </Link>
             </li>
           ))}
         </ul>
       </nav>
     </header>
   );
 }
