import { IoPersonSharp } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { FaPhoneVolume } from 'react-icons/fa6';

export default function Register() {
    return(
        <section className="flex flex-col items-center bg-[var(--light-blue)] p-10 text-[var(--white)]">
            <h2 className="uppercase text-3xl font-bold ">Cadastre-se</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            
            <form className="flex gap-4 mt-6">
                <div className='flex items-center px-2 text-2xl bg-[var(--white)] text-[var(--dark-gray)]'>
                    <IoPersonSharp />
                    <input type="text" name="name" id="name" placeholder="Nome" className="p-2 text-base" />
                </div>
                <div className='flex items-center px-2 text-3xl bg-[var(--white)] text-[var(--dark-gray)]'>
                    <IoIosMail />
                    <input type="mail" name="email" id="email" placeholder="Email" className="p-2 text-base" />
                </div>
                <div className='flex items-center px-2 text-xl bg-[var(--white)] text-[var(--dark-gray)]'>
                    <FaPhoneVolume />
                    <input type="phone" name="phone" id="phone" placeholder="Telefone" className="p-2 text-base" />
                </div>

                <input type="button" value="Enviar" className="border border-[var(--white)] py-2 px-8 hover:text-[var(--light-blue)] hover:bg-[var(--white)] transition duration-500 cursor-pointer	" />
            </form>
        </section>
    )
}