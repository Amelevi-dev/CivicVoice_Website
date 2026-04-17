import { FaClipboard, FaClipboardList, FaFingerprint, FaPenToSquare, FaShield } from "react-icons/fa6"


export const FONCTIONNALITE = ()=>{
    return(
        <section className="md:py-5 md:px-4 flex flex-col items-center justify-center h-auto w-full">
                <h1 className='text-4xl md:text-5xl font-semibold text-primary leading-[1.1] tracking-tight py-6 text-center' data-aos="fade-right">Comment ça marche</h1>

                <div className="cardContainer w-full flex flex-col items-center justify-center gap-3 md:grid md:grid-cols-3 md:justify-center md:w-full mx-auto h-auto md:items-stretch ">

                    <div className="card w-[75%] md:w-100 h-full rounded-[15px] px-6 py-10 flex flex-col items-center justify-evenly gap-6" data-aos="fade-up" data-aos-delay="100">
                        <FaPenToSquare size={60} className="text-accent" />
                        <h3 className="text-xl md:text-xl font-bold text-center">La Consultation</h3>
                        <p className="text-sm md:text-lg leading-relaxed text-justify">
                            La mairie ou l'élu local publie une question concrète sur un projet en cours (aménagement, santé, sécurité). Chaque consultation est datée et ciblée géographiquement.
                        </p>
                    </div>
                    <div className="card w-[75%] md:w-100 h-full rounded-[15px] px-6 py-10 flex flex-col items-center justify-around gap-6" data-aos="fade-up" data-aos-delay="200">
                        <FaFingerprint size={60} className="text-accent" />
                        <h3 className="text-lg md:text-xl font-bold text-center">Le vote Sécurisé</h3>
                        <p className="text-sm md:text-lg leading-relaxed text-justify">Le citoyen reçoit une notification sur son téléphone. Grâce à son identité numérique unique, il exprime son avis (Pour / Contre / Abstention) en un clic. Le système garantit qu'il ne vote qu'une seule fois.</p>
                    </div>
                    <div className="card w-[75%] md:w-100 h-full rounded-[15px] px-6 py-10 flex flex-col items-center justify-around md:mx-auto gap-6" data-aos="fade-up" data-aos-delay="300">
                        <FaShield size={60} className="text-accent" />
                        <h3 className="text-lg md:text-xl font-bold text-center">L’Ancrage Blockchain</h3>
                        <p className="text-sm md:text-lg leading-relaxed text-justify">Chaque vote est instantanément enregistré dans un registre décentralisé. Les r-ésultats deviennent immuables : personne, pas même l'autorité, ne peut modifier les chiffres ou supprimer les avis exprimés.</p>
                    </div>
                    <div className="card w-[75%] md:w-100 h-full rounded-[15px] px-6 py-10 flex flex-col items-center justify-around md:col-start-2 gap-6" data-aos="fade-up" data-aos-delay="400">
                        <FaClipboardList size={60} className="text-accent" />
                        <h3 className="text-lg md:text-xl font-bold text-center">Le Suivi des Engagements</h3>
                        <p className="text-sm md:text-lg leading-relaxed text-justify">Une fois le vote clos, l'élu enregistre son plan d'action. Ce "contrat moral" devient un engagement public traçable, permettant aux citoyens de suivre l'avancement réel des promesses faites.</p>
                    </div>
                    
                </div>
        </section>
    )
}