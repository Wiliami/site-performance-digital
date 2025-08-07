import { Button } from "./ui/button";
import Logo from "../assets/logo.png";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-1 place-items-center py-20 md:py-32 gap-10">
       <img 
        className="rounded-sm"
        src={Logo}
        width={250}
        height={300}
        alt="logo"
        />
      <p>☎️ (92) 3222-9598</p>
      <div className="text-center lg:text-center space-y-6">
       
        <main className="text-5xl md:text-6xl font-bold">
          <h2 className="inline">
            <span className="inline text-4xl text-white text-transparent bg-clip-text">
              Investiu no <b className="text-green-500">Marketing</b>, porém não gerou o retorno esperado?
            </span>{" "}
          </h2>
  
      
          <h4 className="block text-4xl">
          Seu negócio
            <span className="inline text-red-500">{" "}
              precisa de uma avaliação urgente!
            </span>
          </h4>
        </main>

        <p className="text-center text-xl text-muted-foreground md:w-10/1 mx-auto lg:mx-0">
          ✓ Encontre oportunidades no seu marketing digital.
        </p>

        <p className="text-center text-xl text-muted-foreground md:w-10/1 mx-auto lg:mx-0">
          ✓ Aumente suas vendas e seus resultados.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 text-center">
          <Button className="w-full md:w-1/2 text-white font-bold">QUERO  O DIAGNÓSTICO GRATUITO!</Button>          
        </div>
      </div>

    

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
