import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 border rounded-lg py-12"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Impulsione sua marca{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              AGORA.{" "}
            </span>{" "}
            Vamos transformar sua{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              presença digital!{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Desperte o poder das redes sociais — fale conosco e decole online!
          </p>
        </div>
        <div className="space-y-4 md:space-y-0 md:space-x-4 text-center">
          <Button
            onClick={() => {
              const section = document.getElementById("pricing");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" }); // 👈 rolagem suave
              }
            }}
            className="w-full md:w-auto min-w-[200px] text-white font-bold px-8 py-3 text-center whitespace-nowrap overflow-hidden text-ellipsis"
          >
            VER PLANOS
          </Button>
        </div>
      </div>
    </section>
  );
};