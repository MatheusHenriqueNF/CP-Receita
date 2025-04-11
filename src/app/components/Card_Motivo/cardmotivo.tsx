import Image from "next/image";
import React from "react";

type CardMotivoProps = {
    titulo: string;
    descricao: string;
    imagem: string;
}

const CardMotivo:React.FC<CardMotivoProps> = ({
    titulo = 'Título',
    descricao = 'Descrição',
    imagem = 'imagem'
}) => {
    return(
        <>
        
            <div className="w-full h-[120] bg-white rounded-2xl flex justify-center items-center pl-2 relative shadow-lg">
                <div className="w-[100] h-[100] flex justify-center items-center">
                    <Image src={imagem} width={50} height={50} alt=""/>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-left ml-10">
                    <h3 className="font-semibold text-2xl text-[#EA3529]">{titulo}</h3>
                    <p className="text-[18px]">{descricao}</p>
                </div>
            </div>
        
        </>
    )
}

export default CardMotivo;