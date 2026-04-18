import { Button } from "../components/button"
import phones from '../assets/images/phones.png'

export const HOMESECTION = ()=>{
    return(
        <section className=" md:flex items-center h-auto justify-between md:px-20" id="home">
            <div className="description max-w-150 pl-6 md:w-1/2 flex flex-col items-start justify-center " data-aos="fade-right" >
                <h1 className="text-4xl md:text-6xl font-semibold text-black leading-[1.1] tracking-tight mb-8">Faites <br /> entendre <br /> votre <span className="text-accent">voix</span></h1>
                <p className="text-black text-lg md:text-lg md:font-light w-96 font-light leading-relaxed mb-10 max-w-125">CivicVoice est une plateforme citoyenne qui permet aux populations de s’exprimer, voter et participer activement aux décisions publiques.</p>
                <div className="flex items-center gap-4">
                    <Button text="Rejoignez-nous maintenant" variante="mobilePrimary" />
                    <Button text="En savoir plus" variante="mobileThirdly" />
                </div>
            </div>
            <div className="image w-full md:w-1/2 mt-10 md:mt-0 justify-center flex" data-aos="fade-up">
                <img src={phones} alt="Phones" className="w-full h-auto" />
            </div>
        </section>
    )
}