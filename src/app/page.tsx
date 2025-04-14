'use client';
import Image from "next/image";
import CardQualidade from "./components/Card_Qualidade/cardqualidade";
import Botao from "./components/Botao/botao";
import Link from "next/link";
import { ThemeProvider } from "./ThemeProvider/ThemeProvider";
import ThemeButton from "./ThemeButton/ThemeButton";
import CardMotivo from "./components/Card_Motivo/cardmotivo";





export default function Home() {
  return (
    <>
      <section className="w-full min-h-[600px] sm:min-h-[700px] flex flex-col lg:flex-row justify-center items-center bg-gradient-to-b from-[#FEF2DC] to-[#ffffff] p-4 sm:p-6 md:p-8 lg:p-12 gap-12">
        {/* Conteúdo de texto */}
        <div className="max-w-screen-lg w-full lg:w-[50%] flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="font-semibold text-[#2C2C25] text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4">
              Faça
              <div className="flex justify-center items-center w-[160px] sm:w-[200px] md:w-[250px] h-[60px] sm:h-[70px] md:h-[80px] bg-[#FE9D0E] rounded-full shadow-2xl rotate-[350deg] text-white text-base sm:text-4xl md:text-5xl lg:text-5xl">
                Comida
              </div>
            </h1>
            <span className="font-semibold text-[#2C2C25] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4">
              para Sua Família
            </span>
          </div>
          <div className="w-full px-2 sm:px-4">
            <p className="text-base sm:text-lg md:text-xl text-justify text-[#2C2C25] mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut commodi ducimus aut aperiam deleniti dolorum architecto! Magnam earum minima, error ea atque pariatur a, at, sapiente ducimus esse eos. Quibusdam?
            </p>
            <Link href={"/pages/Pratos"}><Botao titulo="Conheça mais" /></Link>
          </div>
        </div>

        {/* Imagem ao lado (ou abaixo em mobile) */}
        <div className="w-full lg:w-[50%] flex justify-center items-center relative mt-10 lg:mt-0">
          {/* Bloco laranja atrás */}
          <div className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-[#FE9D0E] rounded-3xl relative z-0 mt-10"></div>

          {/* Imagem na frente */}
          <Image
            src="/image/section1.png"
            width={1000}
            height={1000}
            alt="Moça comendo pão"
            className="absolute z-10 w-[250px] sm:w-[400px] md:w-[500px] lg:w-[800px] h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] -mt-15 sm:mt-0 md:-mt-15 lg:-mt-28 lg:mr-32"
          />
        </div>
      </section>


      <section className="w-full flex justify-center items-center flex-wrap gap-10">
        <CardQualidade title="Realize cada receita e se torne um profissional na cozinha" imagem="/image/icon-chef.png"/>
        <CardQualidade title="Faça as melhores comidas em companhia" imagem="/image/icon-companhia.png"/>
        <CardQualidade title="Reserve um tempo para a diversão na cozinha" imagem="/image/icon-time.png"/>
        <CardQualidade title="Aprecie as comidas mais deliciosas" imagem="/image/food.png"/>
        <CardQualidade title="Tenha um momento em família" imagem="/image/familia.png"/>
        <CardQualidade title="Escolha várias opções de comidas" imagem="/image/opcao.png"/>
       
      </section>
      
      <section className="w-full flex flex-col lg:flex-row justify-center items-center mt-10 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-12 py-12 gap-10 lg:gap-20">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={"/image/section2.webp"}
            width={1000}
            height={1000}
            alt="Moço comendo pão"
            className="w-full max-w-[600px] h-auto object-cover rounded-3xl"
          />
          {/* <ThemeProvider>
            <ThemeButton/>
          </ThemeProvider> */}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6 px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EB3939] mb-4 sm:mb-6 text-center lg:text-left">
            Por que nos acompanhar?
          </h2>

          <CardMotivo 
            titulo="Atualizações frequentes com novidades deliciosas" 
            descricao="Toda semana tem receita nova! Do café da manhã ao jantar especial, sempre há algo novo para experimentar e surpreender quem você ama." 
            imagem="/image/clock.png"
          />

          <CardMotivo 
            titulo="Receitas práticas e descomplicadas" 
            descricao="Nosso site traz receitas acessíveis para todos os níveis, com passo a passo claro e ingredientes fáceis de encontrar, para você cozinhar sem stress, mesmo na correria do dia a dia." 
            imagem="/image/prato.png"
          />

          <CardMotivo 
            titulo="Dicas exclusivas e truques de cozinha" 
            descricao="Mais do que receitas, oferecemos dicas de preparo, substituições inteligentes, economia de tempo e reaproveitamento de ingredientes — ideal para quem quer evoluir na cozinha." 
            imagem="/image/lampada.png"
          />
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center bg-gradient-to-t from-[#FEF2DC] to-[#ffffff] mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-12 py-12">
        <div className="w-full max-w-3xl flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EB3939] mb-6">
            Mão na massa
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#2C2C25] leading-relaxed">
            Chegou o momento de sair do “vou tentar um dia” e transformar a cozinha no seu novo lugar favorito! Não importa se você nunca fritou um ovo ou se já arrasa no fogão — o importante é dar o primeiro passo.
          </p>
        </div>
      </section>

      
    </>
  );
}


// <section className="w-full sm:h-[600px] md:h-[700px] flex justify-center items-center bg-gradient-to-b from-[#FEF2DC] to-[#ffffff]  p-4 sm:p-6 md:p-8 lg:p-12 mb-10 sm:mb-16 md:mb-20 ">
// <div className="max-w-screen-xl mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
//   <div className="max-w-screen-xl mx-auto flex flex-col justify-center">
//     <h1 className="font-semibold text-[#2C2C25] text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-wrap items-center gap-2 sm:gap-4 text-center sm:text-left">
//       Faça
//       <div className="flex justify-center items-center w-[250px] h-[80px] bg-[#FE9D0E] rounded-full shadow-2xl rotate-350 text-white">
//        Comida
//       </div>
//     </h1>
//     <br />
//     <span className="font-semibold text-[#2C2C25] text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-wrap items-center gap-2 sm:gap-4 text-center sm:text-left">para Sua Família</span>
//   </div>
//   <div className="w-[700]">
//     <p className="text-2xl text-justify text-[#2C2C25]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut commodi ducimus aut aperiam deleniti dolorum architecto! Magnam earum minima, error ea atque pariatur a, at, sapiente ducimus esse eos. Quibusdam?</p>
//     <Botao titulo="Conheça mais"/>
//   </div>
// </div>
// <div className="w-full h-[700] flex justify-center items-center p-12 relative">
//   <div className="w-[525px] h-[450px] bg-[#FE9D0E] mt-[152] ml-[160] rounded-3xl relative">
//     {/* Conteúdo adicional aqui */}
//   </div>
//   <Image
//     src={"/image/section1.png"}
//     width={1000}
//     height={1000}
//     alt="Moço comendo pão"
//     className="absolute z-10 w-[800px] h-[600]"
//   />
// </div>
// </section>


// <section className="w-full h-[600] flex justify-center items-center mt-30 p-12 ">
//         <div className="w-full flex justify-center items-center gap-30">
//         <div>
//             <Image
//               src={"/image/section2.webp"}
//               width={1000}
//               height={1000}
//               alt="Moço comendo pão"
//               className="w-full h-[500] object-cover rounded-3xl"
//             />
//             {/* <ThemeProvider>
//               <ThemeButton/>
//             </ThemeProvider> */}
//           </div>
//           <div className="p-10 gap-5 flex flex-col">
//             <h2 className="text-5xl font-bold text-[#EB3939] mb-10">Por que nos acompanhar?</h2>
//               <CardMotivo titulo="Atualizações frequentes com novidades deliciosas" descricao="Toda semana tem receita nova! Do café da manhã ao jantar especial, sempre há algo novo para experimentar e surpreender quem você ama." imagem="/image/clock.png"/>
//               <CardMotivo titulo="Receitas práticas e descomplicadas" descricao="Nosso site traz receitas acessíveis para todos os níveis, com passo a passo claro e ingredientes fáceis de encontrar, para você cozinhar sem stress, mesmo na correria do dia a dia." imagem="/image/prato.png"/>
//               <CardMotivo titulo="Dicas exclusivas e truques de cozinha" descricao="Mais do que receitas, oferecemos dicas de preparo, substituições inteligentes, economia de tempo e reaproveitamento de ingredientes — ideal para quem quer evoluir na cozinha." imagem="/image/lampada.png"/>

//           </div>
          
//         </div>
//       </section>


// <section className="w-full h-[300] flex flex-col justify-center items-center bg-gradient-to-t from-[#FEF2DC] to-[#ffffff] mt-20 p-12">
//         <div className="w-[700] flex justify-center items-center flex-col gap-2 text-center">
//           <h2 className="text-5xl font-bold text-[#EB3939] mb-10">Mão na massa</h2>
//           <p className="text-[18px]">Chegou o momento de sair do “vou tentar um dia” e transformar a cozinha no seu novo lugar favorito! Não importa se você nunca fritou um ovo ou se já arrasa no fogão — o importante é dar o primeiro passo.
//           </p>
//         </div>
//       </section>