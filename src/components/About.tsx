// import { Statistics } from "./Statistics";
import icon from "../assets/banner.png";
import { Button } from "./ui/button";



export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12"> {/*Card inteiro */}
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 ">
          <img
            src={icon}
            alt=""
            className="w-[300px] object-contain rounded-lg hover:w-[500px]" /> {/* Somente a foto */}
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl  font-bold">
                <b className="text-green-500 italic">Nossa Paixão: </b> Impulsionar o Seu Sucesso!
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Somos uma agência de marketing digital movida pela paixão de ver negócios prosperarem e alcançarem novos patamares. Acreditamos que cada empresa tem um potencial único, e nossa missão é desvendá-lo e amplificá-lo através de estratégias de marketing e mídia inovadoras e eficazes.
              </p>
            </div>

            <div>
              <ul className="text-xl text-muted-foreground mt-4 mb-12">
                <li> <b>Dedicação Total:</b> Sua empresa é nossa prioridade.</li> 
                <li> <b>Estratégias Inteligentes:</b> Focamos em soluções que trazem retorno.</li>
                <li> <b>Resultados Mensuráveis:</b> Acompanhamos e otimizamos cada passo.</li>
                <li> <b>Inovação Constante:</b> Estamos sempre atualizados com as últimas tendências.</li>
              </ul>
            </div>

            <div className="space-y-4 md:space-y-0 md:space-x-4 text-start">
            
            <Button
            onClick={() => {
              const section = document.getElementById("pricing");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
    }
  }
}
className="w-full md:w-1/2 text-white font-bold"> VER PLANOS </Button>
      
        </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};
