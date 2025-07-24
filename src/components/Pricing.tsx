import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Serviços dedicados para o sucesso da sua empresa.",
    buttonText: "Iniciar",
    benefitList: [
      "1 membro da equipe",
      "2 GB de armazenamento",
      "Até 4 páginas",
      "Suporte da comunidade",
      "Edição de páginas HTML",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 700,
    description:
      "Serviços dedicados para o sucesso da sua empresa.",
    buttonText: "Iniciar teste grátis",
    benefitList: [
      "4 membros da equipe",
      "4 GB de armazenamento",
      "Até 6 páginas",
      "Prioridade no suporte",
      "Edição de páginas HTML",
    ],
  },
  {
    title: "Empresarial",
    popular: 0,
    price: 1000,
    description:
      "Serviços dedicados para o sucesso da sua empresa.",
    buttonText: "Contate-nos",
    benefitList: [
      "10 membros da equipe",
      "8 GB de armazenamento",
      "Até 10 páginas",
      "Prioridade no suporte",
      "Edição de páginas HTML"
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Conheça
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          nossos{" "}
        </span>
        planos
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Obtenha os serviços que mais se encaixam com o negócio da sua empresa.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Recomendado
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">R${pricing.price}</span>
                <span className="text-muted-foreground"> /mensal</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
