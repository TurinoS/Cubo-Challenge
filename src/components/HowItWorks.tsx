import { IoEarthOutline, IoCartOutline } from 'react-icons/io5'
import { AiOutlineLike } from 'react-icons/ai'
import { BsTruck } from 'react-icons/bs'

import HowItWorksDiv from "./HowItWorksDiv";
import Link from 'next/link';

export default function HowItWorks() {
    return(
        <section className="flex flex-col p-16 items-center">
            <h2 className="uppercase text-3xl font-bold text-center">Como funciona?</h2>
            <div className="flex justify-between gap-6 py-10">
                <HowItWorksDiv icon={<IoEarthOutline />} step={1} text='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.' />
                <HowItWorksDiv icon={<IoCartOutline />} step={2} text='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.' />
                <HowItWorksDiv icon={<AiOutlineLike />} step={3} text='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.' />
                <HowItWorksDiv icon={<BsTruck />} step={4} text='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.' />
            </div>
            <Link href='#' className='px-8 py-2 bg-[var(--green)] text-[var(--white)] hover:scale-105'>Leia mais</Link>
        </section>
    )
}