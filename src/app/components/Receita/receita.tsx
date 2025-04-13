import Image from "next/image";
import React from "react";
import Botao from "../Botao/botao";


type ReceitaProps = {
    imagem: string;
    titulo: string;
    tempo: string;
    ingredientes: string;
    modoPreparo: string;
}

const Receita:React.FC<ReceitaProps> = (
    {
        imagem="Imagem",
        titulo='Tituloe', 
        tempo='Tempo',
        ingredientes='Ingredientes', 
        modoPreparo='Modo de Preparo'
    }
) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-8 sm:gap-10">
            <h1 className="text-[#EA3529] text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
                Ingredientes da Receita
            </h1>

            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
                
                {/* Imagem da receita */}
                <div className="w-full max-w-md flex justify-center">
                <Image
                    src={imagem}
                    width={800}
                    height={800}
                    alt=""
                    className="object-cover w-full h-auto rounded-3xl shadow-lg"
                />
                </div>

                {/* Barrinha lateral (sol no fundo amarelo) */}
                <div className="hidden lg:flex w-16 h-80 bg-[#FE9D0E] rounded-full mr-35 flex-col justify-center items-center shadow-2xl absolute z-20">
                <i className="fas fa-sun text-3xl sm:text-4xl text-white"></i>
                <hr className="mt-3 border-2 w-12 border-white rounded-full" />
                </div>

                {/* Texto da receita */}
                <div className="w-full max-w-xl shadow-2xl bg-white px-6 py-8 rounded-3xl z-10">
                <h2 className="text-2xl sm:text-3xl font-semibold">{titulo}</h2>
                <div className="mt-3 mb-3 text-[#EA3529] text-lg sm:text-xl">
                    <i className="fas fa-clock"></i> {tempo}
                </div>
                <h3 className="text-lg font-semibold">Ingredientes</h3>
                <p className="text-base sm:text-lg mb-5">{ingredientes}</p>
                
                <h3 className="text-lg font-semibold">Modo de preparo</h3>
                <p className="text-base sm:text-lg">{modoPreparo}</p>
                </div>
            </div>
        </div>



    );
}

export default Receita;


// <div className="w-full h-184 flex flex-col justify-center items-center gap-10 flex-wrap">
// <h1 className="text-[#EA3529] text-5xl font-semibold">Ingredientes da Receita</h1>
// <div className="w-full flex justify-center items-center ">
// <div className="w-full h-[600]  flex justify-center items-center relative">
//     <Image src={imagem} width={800} height={800} alt="" className="object-cover w-[800] rounded-4xl"/>
// </div>
// <div className="w-16 h-110 bg-[#FE9D0E] rounded-full mr-7 flex flex-col justify-center items-center shadow-2xl absolute z-20">
//     <i className="fas fa-sun text-4xl text-white"></i>
//     <hr className="mt-3 border-2 w-[53] border-white rounded-full"/>
// </div>
// <div className="w-full h-[600] shadow-2xl pl-10 pr-2 py-10 relative z-10 rounded-4xl">
//     <h2 className="text-3xl font-semibold">{titulo}</h2>
//     <div className="mt-3 mb-3"><i className="fas fa-clock text-xl text-[#EA3529]"> {tempo}</i></div>
//     <h3 className="text-1xl font-semibold">Ingredientes</h3>
//     <p className="text-[18px] mb-5">{ingredientes}</p>
    
//     <h3 className="text-1xl font-semibold">Modo de preparo</h3>
//     <p className="text-[18px]">{modoPreparo}</p>
// </div>

// </div>

// </div>