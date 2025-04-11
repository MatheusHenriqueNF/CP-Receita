
import React from 'react';
import Image from 'next/image';

type CardFiltroProps = {
    categoria: string;
    onClick?: () => void;
}

const Card_Filtro :React.FC<CardFiltroProps>= ({ categoria="Categoria", onClick }) => {
    return (
        <div
            className="w-40 h-40 text-gray-800 bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 hover:bg-[#EA3529] hover:text-white"
            onClick={onClick}
        >
            <h2 className="text-xl font-semibold ">{categoria}</h2>
        </div>
    );
}

export default Card_Filtro;