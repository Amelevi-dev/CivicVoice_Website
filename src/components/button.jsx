export const Button =({text, variante, onClick})=>{
    const variantes = {
        primary: 'bg-accent text-white px-4 py-2 rounded',
        secondary: 'bg-secondary text-white px-4 py-2 rounded',
        thirdly: 'bg-transparent text-primary border border-primary px-4 py-2 rounded',
        fourthly: 'bg-transparent text-secondary border border-secondary px-4 py-2 rounded',
        mobilePrimary : 'bg-accent text-white px-2 py-1 rounded text-center text-sm',
        mobileSecondary : 'bg-secondary text-white px-2 py-1 rounded text-center text-sm',   
        mobileThirdly : 'bg-transparent text-accent border border-accent px-2 py-1 rounded text-center text-sm',
        mobileFourthly : 'bg-transparent text-secondary border border-secondary px-2 py-1 rounded text-center text-sm'

    }
    return(
        <button className={`${variantes[variante]}`} onClick={onClick}>
            {text}
        </button>
    )
}