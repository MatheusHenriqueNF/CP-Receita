import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <div className="flex w-full h-screen justify-center items-center ">
                <div className="flex flex-col justify-center items-center w-[600px] h-[300px] border-b-4 border-t-8  border-black rounded-2xl p-10 bg-white gap-5 shadow-2xl">
                    <div className="flex justify-center items-center ">
                        <div className="h-[150] flex justify-center items-center">
                            <h1 className="text-center text-4xl font-semibold text-black mb-6">Página não encontrada</h1>
                        </div>
                        <div className=" h-[150] flex justify-center items-center">
                            <p>Você pode tentar recarregar a página ou voltar ao menu inicial.</p>
                        </div>
                    </div>
                    <Link href="/"><button className="w-[200px] text-white bg-black cursor-pointer hover:bg-[#fff] hover:text-black transition duration-350">Voltar ao início</button></Link>
                </div>
            </div >
        </>
    );
}

export default NotFound;