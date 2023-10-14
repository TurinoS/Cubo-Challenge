import Image from "next/image";
import logo from '../../public/logo.png';
import Link from "next/link";

export default function Header() {
    return(
        <header className="flex justify-between items-center px-24">
            <Link href= '/'><Image src={logo} alt="Cubo coworking" width={120} /></Link>
            <nav>
                <ul className="flex gap-2 text-sm ">
                    <li className="navLink py-1"><Link className="px-4" href='/'>HOME</Link></li>
                    <li className="navLink py-1"><Link className="px-4" href='/'>HOME 1</Link></li>
                    <li className="navLink py-1"><Link className="px-4" href='/'>HOME 2</Link></li>
                    <li className="navLink py-1"><Link className="px-4" href='/'>HOME 3</Link></li>
                </ul>
            </nav>
        </header>
    )
}