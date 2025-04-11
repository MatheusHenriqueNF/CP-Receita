const Sobre = () => {
    return (
        <>
            <div className='flex flex-col items-center bg-gradient-to-b from-[#FEF2DC] to-[#ffffff]'>

                <div className='border-b-4 border-black rounded-2xl p-10 bg-white shadow-2xl max-w-4xl mx-auto my-16'>
                    <h1 className='text-center text-5xl font-semibold text-black mb-6'>
                        Sobre Nós
                    </h1>
                    <p className='text-center text-lg leading-relaxed text-gray-700'>
                        Na <span className='font-semibold text-red-500'>FAST FOR YOU</span>, nossa missão é trazer sabor, rapidez e praticidade para o seu dia a dia. 
                        Somos apaixonados por comida boa, feita com ingredientes selecionados e entregue com agilidade. 
                        Acreditamos que uma boa refeição não precisa demorar para ser especial.
                    </p>
                </div>

                <div className='border-b-4 border-black rounded-2xl p-10 bg-white shadow-2xl max-w-4xl mx-auto my-16'>
                    <h1 className='text-center text-5xl font-semibold text-black mb-6'>
                        Quem Somos
                    </h1>
                    <p className='text-center text-lg leading-relaxed text-gray-700'>
                        Somos a <span className='font-semibold text-red-500'>FAST FOR YOU</span>, uma empresa apaixonada por comida e praticidade. 
                        Trabalhamos todos os dias para levar até você refeições deliciosas com rapidez e qualidade, tornando o seu dia mais leve e saboroso.
                    </p>
                </div>

                <div className='border-b-4 border-black rounded-2xl p-10 bg-white shadow-2xl max-w-6xl mx-auto my-16'>
                    <h1 className='text-center text-5xl font-semibold text-black mb-12'>
                        Desenvolvedores
                    </h1>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                        {/* Card 1 */}
                        <div className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-md'>
                        <img
                            src='/image/cleyton.jpeg'
                            alt='Dev 1'
                            className='w-28 h-28 object-cover rounded-full mb-4'
                        />
                        <h2 className='text-xl font-bold text-black'>Cleyton Enrike</h2>
                        <p className='text-gray-600'>Front-End Developer</p>
                        </div>

                        {/* Card 2 */}
                        <div className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-md'>
                        <img
                            src='/image/matheus.png'
                            alt='Dev 2'
                            className='w-28 h-28 object-cover rounded-full mb-4'
                        />
                        <h2 className='text-xl font-bold text-black'>Matheus Henrique</h2>
                        <p className='text-gray-600'>Front-End Developer</p>
                        </div>

                        {/* Card 3 */}
                        <div className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-md'>
                        <img
                            src='/image/pedro.jpg'
                            alt='Dev 3'
                            className='w-28 h-28 object-cover rounded-full mb-4'
                        />
                        <h2 className='text-xl font-bold text-black'>Pedro Henrique</h2>
                        <p className='text-gray-600'>Front-End Developer</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Sobre;