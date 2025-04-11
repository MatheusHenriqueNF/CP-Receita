import React from 'react';
import Image from 'next/image';

type CardProdutoProps = {
    title: string;
    imagem : string;
    desc: string;
}

const CardProduto : React.FC<CardProdutoProps> = (
    {
        title = 'Titilo',
        imagem = '/image/section2.webp',
        desc = 'Descrição do produto'
    }
) => {
  return (
    <div className="w-100 h-120 rounded-2xl  bg-white flex flex-col justify-center items-center gap-5 p-5 hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl">
      <div className='w-full h-[300] flex items-center justify-center'>
        <Image src={imagem} width={300} height={300} alt='icon do card'/>
      </div>
      <div className='w-full  gap-3 flex flex-col'>
        <h2 className='text-2xl font-semibold'>{title}</h2>
      
        <p>{desc}</p>
        <span className='text-[#EB3939]'>Mão na massa</span>
      </div>
    </div>
  );
}
export default CardProduto;