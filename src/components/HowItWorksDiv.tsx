type HowItWorksProps = {
    icon: JSX.Element;
    step: number;
    text: string;
}

export default function HowItWorksDiv({ icon, step, text }: HowItWorksProps) {
    return(
        <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-[var(--green)] text-6xl m-auto">{icon}</span>
            <h3 className="uppercase mb-2 mt-6 font-bold text-xl">Passo {step}</h3>
            <p>{text}</p>
        </div>
    )
}