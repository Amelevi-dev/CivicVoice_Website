
import './App.css'
import { FOOTER } from './components/Footer'
import { NAVBAR } from './components/navBar'
import { ABOUTSECTION } from './section/AboutSection'
import { FONCTIONNALITE } from './section/fonctionnalite'
import { HOMESECTION } from './section/homeSection'
import { IMPACTSECTION } from './section/impactSection'
import { MISSIONSECTION } from './section/mission'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Durée de l'animation en millisecondes
      once: true,     // Animation jouée une seule fois
    });
  }, []);


  return (
    <>
      <NAVBAR/>
      <div className="app-navbar-offset">
        <HOMESECTION/>
        <ABOUTSECTION/>
        <MISSIONSECTION/>
        <IMPACTSECTION/>
        <FONCTIONNALITE/>
        <FOOTER/>
      </div>
    </>
  )
}

export default App
