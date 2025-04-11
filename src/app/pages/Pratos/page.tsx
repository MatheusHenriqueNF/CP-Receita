'use client';
import Image from "next/image";
import Card_Filtro from "@/app/components/Card_Filtro/cardfiltro"
import { useEffect, useState } from "react";
import Link from "next/link";
import Receita from "@/app/components/Receita/receita";
import Botao from "@/app/components/Botao/botao";
import CardProduto from "@/app/components/Card_Produto/cardproduto";

type Categorias ={
    id:string;
    categoria:string;
    imagem:string;
    nome:string;
    descricao:string;
    tempo:string;
    ingredientes:string;
    modoPreparo:string;
    
}


const Pratos = () => {

    const [categorias, setCategoria] = useState<Categorias[]>([]);
    const [todosProdutos, setTodosProdutos] = useState<Categorias[]>([]);
    const [pratos, setPratos] = useState<Categorias[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
    const [pratoSelecionado, setPratoSelecionado] = useState<Categorias | null>(null);

    useEffect(() => {
        const buscarCategoria = async () => {
            try {
                const response = await fetch("/data/receitas.json");
                const data = await response.json();

                setTodosProdutos(data);

                const categoriasUnicas = data.filter(
                    (item: Categorias, index: number, self: Categorias[]) =>
                        index === self.findIndex((t) => t.categoria === item.categoria)
                );

                setCategoria(categoriasUnicas);
            } catch (error) {
                console.error(error);
            }
        };

        buscarCategoria();
    }
    , []);

    useEffect(() => {
        if (categoriaSelecionada) {
            const filtrados = todosProdutos.filter(
                (item) => item.categoria === categoriaSelecionada
            );
            setPratos(filtrados);
        } else {
            setPratos([]);
        }
    }, [categoriaSelecionada, todosProdutos]);
    

    return (
        <>
            <section className="w-full h-[700] flex justify-center items-center bg-gradient-to-b from-[#FEF2DC] to-[#ffffff]  p-12 mb-20">
            <div className="w-full flex flex-col gap-20">
            <div className="w-full flex flex-col justify-center ">
                <h1 className="font-semibold text-[#2C2C25] text-6xl flex items-center gap-4">
                Mão na
                <div className="flex justify-center items-center w-[250px] h-[80px] bg-[#FE9D0E] rounded-full shadow-2xl rotate-350 text-white">
                Massa
                </div>
                </h1>
                <br />
                <span className="font-semibold text-[#2C2C25] text-6xl flex items-center">para Cozinhar</span>
            </div>
            <div className="w-[700]">
                <p className="text-2xl text-justify text-[#2C2C25]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut commodi ducimus aut aperiam deleniti dolorum architecto! Magnam earum minima, error ea atque pariatur a, at, sapiente ducimus esse eos. Quibusdam?</p>
                <Botao titulo="Conheça mais"/>
            </div>
            </div>
            <div className="w-full h-[700] flex justify-center items-center p-12 relative">
            <div className="w-[525px] h-[450px] bg-[#FE9D0E] mt-[152] ml-[160] rounded-3xl relative">
                {/* Conteúdo adicional aqui */}
            </div>
            <Image
                src={"/image/section3.png"}
                width={1000}
                height={1000}
                alt="Moço comendo pão"
                className="absolute z-10 w-[800px] h-[600]"
            />
            </div>
            </section>

            {/* categoria dos pratos */}
            <section className="w-full flex  flex-col justify-center items-center gap-10 flex-wrap">

                <h1 className="text-4xl font-semibold text-[#FE9D0E]">Categorias</h1>
                <div className="flex justify-center items-center gap-10 flex-wrap">
                    {categorias.map((prod, index) => (
                       
                        <Card_Filtro key={index} categoria={prod.categoria}  onClick={() => setCategoriaSelecionada(prod.categoria)} />
                        
                    ))}
                </div>
            </section>

            {/* trazer apenas os pratos que correspondem a categoria selecionada */}
            <section className="w-full flex justify-center items-center gap-10 flex-wrap p-12">
                {pratos.map((prod, index) => (
                     
                     <div key={index} onClick={() => setPratoSelecionado(prod)}>
                     <CardProduto
                         title={prod.nome}
                         imagem={prod.imagem}
                         desc={prod.tempo}
                     />
                 </div>
                    
                ))}
            </section>
                    
            {pratoSelecionado && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full relative overflow-auto max-h-[90vh] p-6">
                    
                    {/* Botão para fechar o modal */}
                    <button
                        onClick={() => setPratoSelecionado(null)}
                        className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl font-bold"
                    >
                        &times;
                    </button>

                    {/* Conteúdo da receita */}
                    <Receita
                        titulo={pratoSelecionado.nome}
                        imagem={pratoSelecionado.imagem}
                        tempo={pratoSelecionado.tempo || "Tempo não informado"}
                        ingredientes={pratoSelecionado.ingredientes || "Ingredientes não informados"}
                        modoPreparo={pratoSelecionado.modoPreparo || "Modo de preparo não informado"}
                    />
                    </div>
                </div>
            )}
        </>
    );
};

export default Pratos;