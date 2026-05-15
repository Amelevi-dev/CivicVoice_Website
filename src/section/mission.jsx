import apk from '../assets/apk/civicvoice.apk';
import poing from '../assets/images/img4.jpg'
import { Button } from "../components/button"

export const MISSIONSECTION =()=>{
    const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = apk;
      link.download = 'civicvoice.apk';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (e) {
      // fallback: open in new tab
      window.open(apk, '_blank');
    }
  };
    return(
        <section className='md:flex items-center h-auto justify-between md:px-20 md:mt-5' id="mission">
            <div className="description max-w-150 pl-6 md:w-1/2 flex flex-col items-start justify-center " data-aos="fade-right">
                <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-[1.1] tracking-tight mb-8">Notre <br /> Mission </h1>
                <p className="text-black text-lg md:text-lg md:font-light w-80 font-light leading-relaxed mb-10 max-w-125 text-justify"><span className='text-primary font-bold'>Civic</span><span class='text-accent font-bold'>Voice</span> comble le fossé entre les citoyens et les élus au Mali. Nous transformons chaque smartphone en un outil de décision collective pour une gouvernance transparente et inclusive.</p>
                <div className="flex items-center gap-4">
                    <Button text="Télécharger maintenant" variante="mobileSecondary" onClick={handleDownload} />
                </div>
            </div>
            <div className="image w-full md:w-1/2 mt-10 md:mt-0 md:items-center justify-center flex" data-aos="fade-up">
                <img src={poing} alt="GroupePoing" className="w-full h-auto" />
            </div>
        </section>
    )
}