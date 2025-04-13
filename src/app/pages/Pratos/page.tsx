'use client';
import Image from "next/image";
import Card_Filtro from "@/app/components/Card_Filtro/cardfiltro"
import { useEffect, useState } from "react";
import Link from "next/link";
import Receita from "@/app/components/Receita/receita";
import Botao from "@/app/components/Botao/botao";
import CardProduto from "@/app/components/Card_Produto/cardproduto";


// Tipo que define a estrutura dos dados de cada receita

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

    // Estado para armazenar as categorias únicas
    const [categorias, setCategoria] = useState<Categorias[]>([]);

    // Estado com todos os produtos carregados do JSON
    const [todosProdutos, setTodosProdutos] = useState<Categorias[]>([]);

    // Estado com os pratos filtrados pela categoria selecionada
    const [pratos, setPratos] = useState<Categorias[]>([]);

    // Categoria selecionada no filtro
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);

    // Prato selecionado para exibir o modal com detalhes
    const [pratoSelecionado, setPratoSelecionado] = useState<Categorias | null>(null);

    // Carrega os dados do arquivo receitas.json ao montar o componente
    useEffect(() => {
        const buscarCategoria = async () => {
            try {
                const response = await fetch("/data/receitas.json");
                const data = await response.json();

                // Salva todos os produtos
                setTodosProdutos(data);

                // Filtra as categorias únicas a partir do array de receitas
                const categoriasUnicas = data.filter(
                    (item: Categorias, index: number, self: Categorias[]) =>
                        index === self.findIndex((t) => t.categoria === item.categoria)
                );

                // Atualiza o estado com categorias únicas
                setCategoria(categoriasUnicas);
            } catch (error) {
                console.error(error);
            }
        };

        buscarCategoria();
    }
    , []);

    // Atualiza a lista de pratos com base na categoria selecionada
    useEffect(() => {
        if (categoriaSelecionada) {
            const filtrados = todosProdutos.filter(
                (item) => item.categoria === categoriaSelecionada
            );
            // Mostra apenas os pratos da categoria escolhida
            setPratos(filtrados);
        } else {
            // Se nenhuma categoria estiver selecionada, zera os pratos exibidos
            setPratos([]);
        }
    }, [categoriaSelecionada, todosProdutos]);
    

    return (
        <>
            <section className="w-full flex flex-col lg:flex-row justify-center items-center bg-gradient-to-b from-[#FEF2DC] to-[#ffffff] px-4 sm:px-6 md:px-12 py-12 mb-10 sm:mb-16 md:mb-20 gap-10 lg:gap-20">
                <div className="w-full lg:w-[50%] flex flex-col gap-10 max-w-2xl">
                    <div className="flex flex-col justify-center text-center lg:text-left gap-4">
                    <h1 className="font-semibold text-[#2C2C25] text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4">
                        Mão na
                        <div className="flex justify-center items-center w-[160px] sm:w-[200px] md:w-[250px] h-[60px] sm:h-[70px] md:h-[80px] bg-[#FE9D0E] rounded-full shadow-2xl rotate-[350deg] text-white text-base sm:text-4xl md:text-5xl lg:text-5xl">
                        Massa
                        </div>
                    </h1>
                    <span className="font-semibold text-[#2C2C25] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        para Cozinhar
                    </span>
                    </div>

                    <div className="w-full">
                    <p className="text-base sm:text-lg md:text-xl text-[#2C2C25] text-justify leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut commodi ducimus aut aperiam deleniti dolorum architecto! Magnam earum minima, error ea atque pariatur a, at, sapiente ducimus esse eos. Quibusdam?
                    </p>
                    <Link href={"/pages/Pratos"}><Botao titulo="Conheça mais" /></Link>
                    </div>
                </div>

                <div className="w-full lg:w-[50%] flex justify-center items-center relative px-4 sm:px-6">
                    <div className="hidden sm:block w-[300px] sm:w-[400px] md:w-[525px] h-[250px] sm:h-[350px] md:h-[450px] bg-[#FE9D0E] mt-12 sm:mt-[100px] ml-4 sm:ml-[60px] rounded-3xl relative z-0" />
                    <Image
                    src={"/image/section3.png"}
                    width={1000}
                    height={1000}
                    alt="Moço comendo pão"
                    className="absolute z-10 w-[250px] sm:w-[450px] md:w-[600px] lg:w-[800px] h-[250px] sm:h-[450px] md:h-[600px] lg:h-[600px] -mt-15 sm:mt-0 md:-mt-12 lg:-mt-12 lg:mr-0"
                    />
                </div>
            </section>


            {/* Seção de exibição das categorias dos pratos */}
            <section className="w-full flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-12 py-12">
                <h1 className="text-3xl sm:text-4xl font-semibold text-[#FE9D0E] text-center">Categorias</h1>

                <div className="w-full max-w-6xl flex justify-center items-center gap-4 sm:gap-6 md:gap-10 flex-wrap">
                    {categorias.map((prod, index) => (
                    <Card_Filtro
                        key={index}
                        categoria={prod.categoria}
                        onClick={() => setCategoriaSelecionada(prod.categoria)} // Define categoria ao clicar
                    />
                    ))}
                </div>
            </section>


            {/* Seção traz apenas os pratos que correspondem a categoria selecionada */}
            <section className="w-full flex justify-center items-center flex-wrap gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-12 py-8">
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

            {/* Pop-up que mostra detalhes do prato (receita) selecionado */}
            {pratoSelecionado && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-50 flex items-center justify-center p-2 sm:p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl md:max-w-5xl lg:max-w-6xl relative overflow-y-auto max-h-[90vh] p-4 sm:p-6">
                    
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


// <section className="w-full h-[700] flex justify-center items-center bg-gradient-to-b from-[#FEF2DC] to-[#ffffff]  p-12 mb-20">
//                 <div className="w-full flex flex-col gap-20">
//                     <div className="w-full flex flex-col justify-center ">
//                         <h1 className="font-semibold text-[#2C2C25] text-6xl flex items-center gap-4">
//                             Mão na
//                             <div className="flex justify-center items-center w-[250px] h-[80px] bg-[#FE9D0E] rounded-full shadow-2xl rotate-350 text-white">
//                                 Massa
//                             </div>
//                         </h1>
//                         <br />
//                         <span className="font-semibold text-[#2C2C25] text-6xl flex items-center">para Cozinhar</span>
//                     </div>
//                     <div className="w-[700]">
//                         <p className="text-2xl text-justify text-[#2C2C25]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut commodi ducimus aut aperiam deleniti dolorum architecto! Magnam earum minima, error ea atque pariatur a, at, sapiente ducimus esse eos. Quibusdam?</p>
//                         <Botao titulo="Conheça mais"/>
//                     </div>
//                 </div>
//                 <div className="w-full h-[700] flex justify-center items-center p-12 relative">
//                     <div className="w-[525px] h-[450px] bg-[#FE9D0E] mt-[152] ml-[160] rounded-3xl relative">
//                         {/* Conteúdo adicional aqui */}
//                     </div>
//                     <Image
//                         src={"/image/section3.png"}
//                         width={1000}
//                         height={1000}
//                         alt="Moço comendo pão"
//                         className="absolute z-10 w-[800px] h-[600]"
//                     />
//                 </div>
//             </section>


// <section className="w-full flex  flex-col justify-center items-center gap-10 flex-wrap">

// <h1 className="text-4xl font-semibold text-[#FE9D0E]">Categorias</h1>
// <div className="flex justify-center items-center gap-10 flex-wrap">
//     {categorias.map((prod, index) => (
       
//         <Card_Filtro key={index} categoria={prod.categoria}  onClick={() => setCategoriaSelecionada(prod.categoria)} />
        
//     ))}
// </div>
// </section>


// <section className="w-full flex justify-center items-center gap-10 flex-wrap p-12">
// {pratos.map((prod, index) => (
     
//      <div key={index} onClick={() => setPratoSelecionado(prod)}>
//      <CardProduto
//          title={prod.nome}
//          imagem={prod.imagem}
//          desc={prod.tempo}
//      />
//  </div>
    
// ))}
// </section>


// {pratoSelecionado && (
//     <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full relative overflow-auto max-h-[90vh] p-6">
        
//         {/* Botão para fechar o modal */}
//         <button
//             onClick={() => setPratoSelecionado(null)}
//             className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl font-bold"
//         >
//             &times;
//         </button>

//         {/* Conteúdo da receita */}
//         <Receita
//             titulo={pratoSelecionado.nome}
//             imagem={pratoSelecionado.imagem}
//             tempo={pratoSelecionado.tempo || "Tempo não informado"}
//             ingredientes={pratoSelecionado.ingredientes || "Ingredientes não informados"}
//             modoPreparo={pratoSelecionado.modoPreparo || "Modo de preparo não informado"}
//         />
//         </div>
//     </div>
// )}