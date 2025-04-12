import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

const Header = () => {
    return (
        <>
            <header className='w-full sm:h-[100px] md:h-[113px] shadow-2xl bg-[#FEF2DC]  flex justify-between items-center p-12 '>
            <div className="sm:h-[100px] md:h-[113px] flex items-center justify-center gap-4">
                <Image 
                    src="/image/logo.png" 
                    alt="Logo" 
                    width={300}
                    height={300}
                    className="w-24 sm:w-28 md:w-32 lg:w-40 h-auto"
                />
            </div>

                <ul className='list-none flex justify-end items-center h-full font-semibold text-base sm:text-[14px] md:text-[16px] lg:text-[18px]'>
                    <li className='px-4 hover:text-[#EA3529] transition duration-300'>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className='px-4 hover:text-[#EA3529] transition duration-300'>
                        <Link href={'/pages/Pratos'}>Cardápio</Link>
                    </li>
                    <li className='px-4 hover:text-[#EA3529] transition duration-300'>
                        <Link href={'/pages/Sobre'}>Sobre Nós</Link>
                    </li> 
                    <li className="px-4">
                        <ThemeToggle /> 
                    </li>
                </ul>
               
            </header>
        </>
    );
}

export default Header;