import Link from "next/link";

const Footer = () => {
    return (
        <>
        <footer className='w-full bg-[#FEF2DC] text-[#2C2C25] font-light p-4 flex flex-col items-center justify-center'>
            <h2 className='text-lg mb-4'>&copy; Todos os direitos reservados.</h2>

            <div className='flex gap-6 text-lg text-center'>
                <p><Link href='https://www.linkedin.com/in/cleyton-enrike-de-oliveira99/' target='_blank'><span className='font-semibold'>560485</span> Cleyton Enrike de Oliveira</Link></p>
                <p><Link href='https://www.linkedin.com/in/matheus-henrique-freitas/' target='_blank'><span className='font-semibold'>560442</span> Matheus Henrique Nascimento</Link></p>
                <p><Link href='https://www.linkedin.com/in/pedro-henrique-sena/' target='_blank'><span className='font-semibold'>561178</span> Pedro Henrique Sena</Link></p>
            </div>
        </footer>
        </>
    )
}

export default Footer;