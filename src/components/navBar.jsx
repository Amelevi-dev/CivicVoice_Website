import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo2.png';
import { Button } from './button';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

export const NAVBAR = () => {
  const [isOpen, setIsOpen] = useState(false);



  // Empêche le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className=" fixed top-0 left-0 w-full bg-white shadow z-50">
      {/* --- HEADER DESKTOP & TOP BAR --- */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center h-16">
          <img src={logo} alt="logo CivicVoice" className="h-28" />

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="hover:text-[#FA6E3F] duration-300 transition">Accueil</a>
            <a href="#about" className="hover:text-[#FA6E3F] duration-300 transition">A propos</a>
            <a href="#mission" className="hover:text-[#FA6E3F] duration-300 transition">Mission & Impact</a>
            <Button text="Rejoindre" variante="primary" onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })} />
          </div>

          {/* Bouton Hamburger Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="p-2">
              <HiMenu size={28} className="text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* --- MENU MOBILE --- */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}></div>

        {/* 2. BOUTON FERMER (Croix noire en haut à droite de l'écran) */}
        <div className={`absolute top-8 right-6 transition-transform duration-500 delay-100 ${isOpen ? 'scale-100' : 'scale-0'}`}>
          <button 
            onClick={() => setIsOpen(false)}
            className="bg-black rounded-full p-1.5 shadow-lg flex items-center justify-center">
            <HiX size={20} className="text-white" />
          </button>
        </div>

       
        <div 
          className={`absolute top-0 left-0 w-[65%] max-w-75 h-full bg-accent shadow-2xl flex flex-col py-10 transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          
          <div className="px-6 mb-12">
            <img src={logo2} alt="logo" className="h-20 object-contain" />
          </div>

          {/* Liens */}
          <div className="flex flex-col space-y-8 px-6">
            <a href="#home" className="text-white text-lg font-medium hover:opacity-80 transition">Accueil</a>
            <a href="#about" className="text-white text-lg font-medium hover:opacity-80 transition">A propos</a>
            <a href="#mission" className="text-white text-lg font-medium hover:opacity-80 transition">Mission & Impact</a>
          </div>

          
          <div className="mt-auto px-6 pb-6 flex space-x-5">
            <a href="#"><FaFacebook className="text-white hover:opacity-80 transition" size={20} /></a>
            <a href="#"><FaTwitter className="text-white hover:opacity-80 transition" size={20} /></a>
            <a href="#"><FaLinkedin className="text-white hover:opacity-80 transition" size={20} /></a>
            <a href="#"><FaInstagram className="text-white hover:opacity-80 transition" size={20} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};