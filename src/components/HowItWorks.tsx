import { Card, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description?: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Captação de Leads",
    description:
      "Desenvolvemos estratégias para atrair pessoas realmente interessadas no que você oferece, transformando desconhecidos em potenciais clientes para o seu negócio.",
  },
  {
    icon: <MapIcon />,
    title: "Processo de Vendas",
    description:
      "Construímos um funil de vendas eficiente que conduz cada lead de forma natural até a compra, aumentando suas conversões e reduzindo o tempo de decisão.",
  },
  {
    icon: <PlaneIcon />,
    title: "Onboarding",
    description:
      "Acompanhamos você desde o primeiro contato, explicando cada etapa de forma clara para que todo o processo seja simples, seguro e alinhado aos seus objetivos.",
  },
  {
    icon: <GiftIcon />,
    title: "Acompanhamento e Resultados",
    description:
      "Fazemos um monitoramento constante de todas as ações, ajustando estratégias e apresentando relatórios para garantir resultados reais e crescimento contínuo.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Como nossa agência{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          funciona{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Estamos focados na performance da sua empresa através do marketing digital.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <CardHeader className="text-center">
              <div className="grid gap-4 place-items-center">
                {icon}
                <CardTitle>{title}</CardTitle>
                {description && (
                  <p className="text-sm text-muted-foreground">{description}</p>
                )}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
