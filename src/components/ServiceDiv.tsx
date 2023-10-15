type ServiceProps = {
    icon: JSX.Element;
    title: string;
    text: string;
}

export default function ServiceDiv({ icon, title, text }: ServiceProps) {
    return(
        <div className="grid grid-cols-5 w-1/2 py-4">
            <span className="text-[var(--light-blue)] text-6xl m-auto">{icon}</span>
            <div className="col-start-2 col-span-4">
                <h3 className="uppercase mb-2">{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}