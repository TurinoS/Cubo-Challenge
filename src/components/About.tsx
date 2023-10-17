import Image from "next/image";
import aboutImage from "../../public/about-image.png";
import Circle from "./Circle";

type AboutProps = {
    percentual: number,
    hour: number,
    cost: number,
}

export default function About({ percentual, hour, cost }: AboutProps) {
    const progressBarStyle = {
        background: `linear-gradient(to right, var(--blue) ${percentual}%, var(--white) ${percentual}%)`,
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '4px solid var(--blue)',
    };

    return(
        <section className="flex">
            <Image src={aboutImage} alt="Sobre nós" width={1000} style={{ width: '50%' }} />
            <div className="flex flex-col gap-4 w-1/2 bg-[var(--yellow)] py-12 pl-8 pr-60 text-[var(--white)]">
                <h2 className="text-4xl font-bold uppercase">Sobre nós</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
                    ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et,
                    sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
                </p>
                <div className="flex justify-between mt-6">
                    <Circle progress={75} /> 
                    <Circle progress={66} /> 
                    <Circle progress={50} /> 
                </div>
            </div>
        </section>
    )
}
