import React from "react";

type BotaoProps = {
    titulo : string;
}

const Botao: React.FC<BotaoProps> = (
    {
        titulo = 'Tiutlo'
    }
) =>{
    return(
        <button className="w-[230] h-[50] bg-[#EB3939] cursor-pointer hover:bg-[#D32323] text-white font-bold py-2 px-4 rounded-full mt-10">
            {titulo}
        </button>
    )
}

export default Botao