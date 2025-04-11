import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <>
            <header className='w-full h-[113px] shadow-2xl bg-[#FEF2DC] flex justify-between items-center p-12'>
                <div className='h-[113px] flex items-center justify-center gap-4'>
                    <Image src={"/image/logo.png"} alt="" width={200} height={200} />
                </div>
                <ul className='list-none flex justify-end items-center h-full font-semibold'>
                    <li className='px-4 hover:text-[#EA3529] transition duration-300'>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className='px-4 hover:text-[#EA3529] transition duration-300'>
                        <Link href={'/pages/Pratos'}>Cardápio</Link>
                    </li>
                    <li className='px-4 hover:text-[#EA3529] transition duration-300'>
                        <Link href={'/pages/Sobre'}>Sobre Nós</Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;