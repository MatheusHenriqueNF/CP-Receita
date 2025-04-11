import React from "react"

type ConteudoProps = {
    categoria : string;
}

const CardCategoria : React.FC<ConteudoProps> = (
    {categoria = "Categoria"}
) =>{
    return(
        <>
        
            <div className="w-100 h-[100] rounded-2xl  bg-amber-400 flex items-center justify-center">
                <p className="text-white font-semibold">{categoria}</p>            
            </div>

        </>
    )
}

export default CardCategoria