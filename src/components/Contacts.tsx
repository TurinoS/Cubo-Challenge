import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaGooglePlus } from "react-icons/fa6";
import ContactIcon from "./ContactIcon";

export default function Contacts() {
    return(
        <section className="flex justify-around border-t border-[var(--gray)] items-center p-1">
            <div className="text-[var(--gray)] leading-5">
                <p className="font-bold">CUBO</p>
                <p>Rua Casa do Ator, 919</p>
                <p>04546-003 - São Paulo - SP</p>
            </div>
            <div className="flex text-4xl gap-6 items-center">
                <ContactIcon icon={<BsFacebook />} color="text-blue-600" />
                <ContactIcon icon={<FaGooglePlus />} color="text-[var(--orange)]" />
                <ContactIcon icon={<AiFillTwitterCircle />} color="text-[var(--light-blue)]" />
                <ContactIcon icon={<BsYoutube />} color="text-red-600" />
            </div>
        </section>
    )
}