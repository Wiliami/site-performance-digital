import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Captação de Leads",
  },
  {
    icon: <MapIcon />,
    title: "Processo de Vendas",
  },
  {
    icon: <PlaneIcon />,
    title: "Onboarding",
  },
  {
    icon: <GiftIcon />,
    title: "Acompanhamento e Resultados",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Como nossa agência{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        funciona{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Estamos focados na performance da sua empresa através do marketing digital.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            {/* <CardContent></CardContent> */}
          </Card>
        ))}
      </div>
    </section>
  );
};
