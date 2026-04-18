import img1 from '../assets/images/img8.jpg'
import img2 from '../assets/images/megaphone.jpg'
import img3 from '../assets/images/img7.png'
export const ABOUTSECTION = ()=>{
    return(
         <section className="text-white min-h-screen px-6 mb-5 md:px-16 py-3 relative overflow-hidden" data-aos="fade-up" id="about">
            <p className='text-black text-sm md:text-lg  leading-relaxed md:w-2/3 text-justify'>
              Aujourd’hui, la participation citoyenne est 
              souvent limitée aux périodes électorales. Entre ces moments,
               les citoyens ont peu d’occasions de s’exprimer sur les 
               décisions qui les concernent directement.
            </p>

      {/* CONTENEUR PRINCIPAL */}
      <div className="max-w-7xl mx-auto relative">

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:block relative h-125">

          {/* Image mégaphone (gauche) */}
          <img
            src={img2}
            alt="Megaphone"
            className="absolute left-0 top-8 w-80 rounded-lg blur-[1px]"
          />

          {/* Image principale (centre) */}
          <img
            src={img1}
            alt="Main Image"
            className="absolute left-[30%] top-14 w-120 rounded-lg shadow-lg"
          />

          {/* Drapeau + poing (droite) */}
          <img
            src={img3}
            alt="Fist and Flag"
            className="absolute right-0 top-0 w-72"
          />

          {/* TEXTE */}
            <div className="absolute bottom-0 flex flex-row-reverse items-center justify-between">
            <h2 className="text-4xl  md:text-5xl font-bold text-orange-400 leading-tight">
              Redonner la parole <br /> aux citoyens
            </h2>
            <p className="text-black text-lg leading-relaxed md:w-1/2 text-justify">
              CivicVoice a été créé pour combler ce manque, 
              en proposant un espace simple et accessible 
              où chacun peut donner son avis, suivre les 
              sujets publics et rester impliqué dans la vie collective.
            </p>
          </div>
        </div>


        {/* MOBILE LAYOUT */}
        <div className="flex flex-col gap-6 md:hidden">
          {/* Image principale */}
          <img
            src={img1}
            alt="Main Image"
            className="w-full rounded-lg"
          />

          {/* Ligne avec mégaphone + drapeau */}
          <div className="flex justify-center items-center gap-x-4">
            <img
              src={img2}
              alt="Megaphone"
              className="w-56 rounded-lg blur-[1px]"
            />
            <img
              src={img3}
              alt="Fist and Flag"
              className="w-32 mt-8"
            />
          </div>

          {/* TEXTE */}
          <h2 className="text-2xl font-bold text-orange-400 text-left leading-snug">
            Redonner la parole <br /> aux citoyens
          </h2>
          
          <p className="text-black text-sm leading-relaxed text-justify">
            CivicVoice a été créé pour combler ce manque, 
            en proposant un espace simple et accessible 
            où chacun peut donner son avis, suivre les 
            sujets publics et rester impliqué dans la vie collective.
          </p>
        </div>

      </div>
    </section>
    )
}