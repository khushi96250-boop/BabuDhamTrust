import React from "react";
import { Outlet, Link, useLocation } from "react-router";
import { BabudhamLogo } from "./components/BabudhamLogo";
import { Menu, X, Heart, MapPin, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Impact", href: "/impact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 selection:bg-[#A6192E]/20">
      {/* Top Bar */}
      <div className="bg-[#A6192E] text-white py-2 px-6 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@babudhamtrust.org</span>
          </div>
          <div>गरीबों की सेवा में सदैव तत्पर</div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <BabudhamLogo className="w-20 h-20 group-hover:scale-105 transition-transform" variant="full-color" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#A6192E] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Babu Dham Trust
              </h1>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold hidden sm:block">Empowering Communities</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#A6192E] ${location.pathname === item.href ? "text-[#A6192E]" : "text-slate-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-[#D4AF37] hover:bg-[#c4a132] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <Heart className="w-4 h-4" /> Donate Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-white md:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-slate-100">
              <span className="font-bold text-xl text-[#A6192E]" style={{ fontFamily: "'Playfair Display', serif" }}>Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500 bg-slate-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-xl font-medium p-4 rounded-xl ${location.pathname === item.href ? "bg-red-50 text-[#A6192E]" : "text-slate-800"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-8">
                <Link
                  to="/donate"
                  className="bg-[#D4AF37] text-white w-full px-6 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" /> Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <BabudhamLogo className="w-30 h-30" variant="white" />
              <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                BabuDham Trust
              </span>
            </Link>
            <p className="text-slate-400 mb-6">
              गरीबों की सेवा में सदैव तत्पर। <br /> Dedicated to social welfare, education, healthcare, and community development.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-[#D4AF37] transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Our Work</h3>
            <ul className="space-y-4">
              <li>Flood Relief Programme</li>
              <li>Siksham Program(Free Education for All)</li>
              <li>Blanket Distribution Program</li>
              <li>Social Assistance Programs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-[#D4AF37]" />
                <span>Head Office: Delhi, India<br />Branch: Bihar, India</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0 text-[#D4AF37]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 shrink-0 text-[#D4AF37]" />
                <span>babudhamt@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>© {new Date().getFullYear()} Babudham Trust. All rights reserved. Registered NGO.</p>
        </div>
      </footer>
    </div>
  );
}
