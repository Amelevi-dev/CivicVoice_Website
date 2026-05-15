
import logo from '../assets/images/logoUrne.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';


export const FOOTER = () => {
  return (
    <footer className="bg-black w-full text-white pt-4 flex flex-col items-center" id="footer">
      
      {/* 1. HEADER DU FOOTER (Logo et Nom) */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-white rounded-full p-2.5 w-14 h-14 flex items-center justify-center">
           {/* Remplace par ton image logo avec la petite urne */}
           <img src={logo} alt="Logo CivicVoice" className="w-8 object-contain" />
        </div>
        <div className="text-3xl font-bold tracking-wide">
          <span className="text-[#06426C]">Civic</span>
          <span className="text-[#FA6E3F]">Voice</span>
        </div>
      </div>

      {/* 2. LIENS DE NAVIGATION */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-3 text-sm md:text-base font-medium px-2">
        <a href="#" className="hover:text-[#FA6E3F] transition-colors duration-300">Accueil</a>
        <a href="#" className="hover:text-[#FA6E3F] transition-colors duration-300">A propos</a>
        <a href="#" className="hover:text-[#FA6E3F] transition-colors duration-300">Mission</a>
        <a href="#" className="hover:text-[#FA6E3F] transition-colors duration-300">Impact</a>
      </div>

      {/* 3. TEXTE DESCRIPTIF */}
      <div className="max-w-3xl text-center px-4 mb-6">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          CivicVoice est une plateforme de participation citoyenne qui permet à chacun de donner son avis sur des sujets publics, <br className="hidden md:block" />
          simplement et à tout moment. Notre objectif est de rendre la participation plus accessible et plus régulière.
        </p>
      </div>

      {/* 4. SECTION BASSE (Vagues bleues et Réseaux sociaux) */}
      {/* J'utilise la couleur #06426C pour le bleu, ajuste-la si besoin */}
      <div className="w-full flex items-end justify-between h-12 md:h-16 mt-auto">
        
        {/* Vague Gauche */}
        <div className="bg-[#06426C] h-full grow rounded-tr-[50px] md:rounded-tr-[100px]"></div>
        
        {/* Conteneur Central (Réseaux sociaux) */}
        <div className="shrink-0 px-4 md:px-8 flex space-x-4 pb-2 md:pb-3">
          <a href="#" className="text-white hover:text-[#FA6E3F] transition-colors duration-300">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-[#FA6E3F] transition-colors duration-300">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-[#FA6E3F] transition-colors duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-white hover:text-[#FA6E3F] transition-colors duration-300">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Vague Droite */}
        <div className="bg-[#06426C] h-full grow rounded-tl-[50px] md:rounded-tl-[100px]"></div>
        
      </div>
    </footer>
  );
}