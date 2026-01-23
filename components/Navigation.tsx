'use client';

import Link from 'next/link';

export default function Navigation() {
  const items = [
    { href: '#how-it-works', label: 'Process' },
    { href: '#features', label: 'Features' },
    { href: '#revenue', label: 'Revenue' },
    { href: '#ecosystem', label: 'Ecosystem' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0C0C0E]/80 backdrop-blur-md border-b border-white/5">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tight text-[#E8E8E8]">
          INTIMUBER
        </Link>
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {items.map((it) => (
            <li key={it.label}>
              <Link href={it.href} className="text-[#8A8A8A] hover:text-[#E8E8E8] transition-colors">
                {it.label}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              href="mailto:parnyuk.vladislav@gmail.com" 
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-white/90 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
