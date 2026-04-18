

export const IMPACTSECTION = ()=>{
    return(
        <section className="md:py-5 md:px-4" id="impact">
                <h1 className='text-4xl md:text-5xl font-semibold text-primary leading-[1.1] tracking-tight py-6 text-center' data-aos="fade-up">Impact</h1>

                <div className="cardContainer w-full flex flex-col items-center justify-center gap-3.5 md:flex-row md:justify-around h-auto ">

                    <div className="card w-[75%] md:w-[30%] h-75 md:h-100 border-2 border-secondary rounded-[15px] p-6 flex flex-col items-start justify-around" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-xl md:text-2xl font-bold"><span className="text-2xl md:text-3xl font-bold text-accent">79% </span>de Représentativité</h3>
                        <p className="text-sm md:text-lg leading-relaxed">
                            Offrir un pouvoir de décision réel à la majorité silencieuse
                           sur les projets de proximité comme les marchés ou la santé
                        </p>
                    </div>
                    <div className="card w-[75%]  md:w-[30%] h-75 md:h-100 border-2 border-secondary rounded-[15px] p-6 flex flex-col items-start justify-around" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-xl md:text-2xl font-bold"><span className="text-2xl md:text-3xl font-bold text-accent">100% </span>de Redevabilité</h3>
                        <p className="text-sm md:text-lg leading-relaxed">Graver chaque vote et engagement des élus de manière immuable grâce à la Blockchain pour garantir une transparence totale</p>
                    </div>
                    <div className="card w-[75%] md:w-[30%] h-75 md:h-100 border-2 border-secondary rounded-[15px] p-6 flex flex-col items-start justify-around" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-xl md:text-2xl font-bold"><span className="text-2xl md:text-3xl font-bold text-accent">70% </span>d'Inclusion Numérique</h3>
                        <p className="text-sm md:text-lg leading-relaxed">Rendre la démocratie accessible dans chaque village malien en utilisant l'infrastructure mobile déjà présente sur tout le territoire</p>
                    </div>
                    
                </div>
        </section>
    )
}