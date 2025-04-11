'use client';
import CardProduto from "@/app/components/Card_Produto/cardproduto";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Produtos ={
    id:string;
    nome:string;
    imagem:string;
}

const Cardapio = () =>{

    const [produto, setProduto] = useState<Produtos[]>([]);

    const buscarProduto = async () => {
        try{
            const response = await fetch("/produtos.json");
            const data = await response.json();

            setProduto(data);
        }catch(error){
            console.error(error);
        }
    }
    buscarProduto();

    return(
        <>
            <section className="relative w-full">
                <Image
                  src={"/image/chef-cozinha.jpg"}
                  width={1200}
                  height={200}
                  alt="Moço comendo pão"
                  className="w-full h-screen object-cover"
                />
                {/* Filtro escuro */}
                <div className="absolute inset-0 bg-black/30"></div>
                {/* Texto sobre a imagem */}
                <div className="w-200 absolute inset-0 flex items-center z-10 pl-12">
                  <h1 className="text-6xl font-semibold text-white">Conheça as receitas do cardápio da <span className="text-red-500">Fast</span> 4 <span className="text-[#E50C1C]">You.</span></h1>
                </div>
            </section>
            <div className="w-full flex justify-center items-center gap-10 p-12">
                
                    
                        {produto.map((prod, index) => (
                            <Link key={index} href={`Produto_Cardapio/${prod.id}`}>
                            <CardProduto
                            
                            title={prod.nome}
                            imagem={prod.imagem}
                            desc="O clássico que nunca falha: carne, queijo e muito sabor!"
                        />
                            </Link>
                    
                    ))}
                
                
            </div>
        </>
    );
}

export default Cardapio;



            //     <CardProduto title="X-Burguer" imagem="/image/xburguer.jpg" desc="O clássico que nunca falha: carne, queijo e muito sabor!"/>
            //     <CardProduto title="X-Bacon" imagem="/image/xbacon.jpg" desc="O clássico que nunca falha: carne, queijo e muito sabor!"/>
            //     <CardProduto title="Petitgateau" imagem="/image/petitgateau.webp" desc="O clássico que nunca falha: carne, queijo e muito sabor!"/>
            // </div>
            // <div className="w-full  flex justify-center items-center  gap-10 p-12">
            //     <CardProduto title="Onionring" imagem="/image/onionring.jpg" desc="O clássico que nunca falha: carne, queijo e muito sabor!"/>
            //     <CardProduto title="Mousse de Limao" imagem="/image/Mousse-de-Limao.png" desc="O clássico que nunca falha: carne, queijo e muito sabor!"/>
            //     <CardProduto title="Batata" imagem="/image/batata.webp" desc="O clássico que nunca falha: carne, queijo e muito sabor!"/>
            // </div>