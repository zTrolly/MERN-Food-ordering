import landingPhonesImg from '../assets/landing.png';
import downloadBtns from '../assets/appDownload.png';

function HomePage() {
  return ( 
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex-col gap-5 text-center -mt-16">
          <h1 className="text-5xl font-bold text-orange-600 tracking-tight mb-2">O que deseja hoje?</h1>
          <span className="text-xl">Matando sua fome em alguns clicks!</span>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingPhonesImg}/>
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='font-bold text-3xl tracking-tighter'>
            Receba uma comida gostosa em casa ou no trabalho
          </span>
          <span>
            Faça o download do nosso aplicativo e tenha acesso a várias opções de restaurantes e lanchonetes
          </span>
          <img src={downloadBtns}/>
        </div>

      </div>
    </div>
   );
}

export default HomePage;