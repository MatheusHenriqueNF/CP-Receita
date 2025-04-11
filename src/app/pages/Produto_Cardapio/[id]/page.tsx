"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

type Produto = {

    nome: string;
    categoria: string;
    imagem: string;
    modoPreparo: string;
    tempo: string;
    ingredientes: string;
}

const Produto_Cardapio = () => {
    const [produto,setProduto] = useState<Produto | null>(null);
    const [erro,setErro] = useState<string | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const buscarProduto = async() => {  
        try {
            const response = await fetch("/produtos.json");

            if (!response.ok) {
                throw new Error("Erro ao buscar os produtos");
            }

            const data = await response.json();

            const produtoEncontrado = data.find((d: {nome : string; categoria : string; imagem : string; modoPreparo : string; tempoPreparo : string; ingrediente : string; id:string;}) => d.id === id);

            if(!produtoEncontrado) {
                throw new Error("Produto não encontrado");
            }

            setProduto(produtoEncontrado);
            setErro(null);

        } catch (error) {
            setErro(error instanceof Error ? error.message : "Erro desconhecido");
            }
        }
        if(id) {
            buscarProduto();
        }
    },[id])

    if(erro) {
        return <p>{erro}</p>
    }
    if(!produto) {
        return <p>Carregando...</p>
    }
    
    return (
        <>

            <h1>{produto.nome}</h1>
            <h2>{produto.categoria}</h2>
            <Image src={produto.imagem} alt={produto.nome} width={500} height={500} />
            <p>{produto.modoPreparo}</p>
            <p>{produto.tempo}</p>
            <p>{produto.ingredientes}</p>


        </>
    )
}

export default Produto_Cardapio;