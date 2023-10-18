import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaGooglePlus } from "react-icons/fa6";

export default function Contacts() {
    return(
        <section className="flex justify-around border-t border-[var(--gray)] items-center p-1">
            <div className="text-[var(--gray)] leading-5">
                <p className="font-bold">CUBO</p>
                <p>Rua Casa do Ator, 919</p>
                <p>04546-003 - São Paulo - SP</p>
            </div>
            <div className="flex text-4xl gap-6 items-center">
                <BsFacebook />
                <FaGooglePlus />
                <AiFillTwitterCircle />
                <BsYoutube />
            </div>
        </section>
    )
}