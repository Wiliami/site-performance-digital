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
  price: number | string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Diagnóstico Gratuito",
    popular: 0,
    price: 0,
    description:
      "Análise realizada por especialistas para otimizar seu business!",
    buttonText: "Entrar em contato",
    benefitList: [
      "Feedbacks focalizados",
      "Melhorias imediatas",
      "Foco em campanhas criativas",
      "Nivelamento de nicho",
      "Identidade visual básica",
    ],
  },
  {
    title: "Plano Start",
    popular: 0,
    price: 1200,
    description:
      "Otimização ou criação do Google Meu Negócio (SEO local, fotos, descrição persuasiva, categorias e horários).",
    buttonText: "Escolher",
    benefitList: [
      "Até 8 postagens/mês (estáticas ou carrossel)",
      "2 stories semanais",
      "Meta Ads (Facebook/Instagram)",
      "Até 6 criativos/mês (estáticos)",
      "Identidade visual básica (logotipo simples + paleta de cores)",
      "Relatório mensal com métricas simples (alcance, cliques, leads)"
    ],
  },
  {
    title: "Plano Premium",
    popular: 1,
    price: 4000,
    description:
      "Objetivo: Crescimento acelerado com estratégia e gestão completas.",
    buttonText: "Escolher",
    benefitList: [
      "Criação de site profissional (design personalizado, SEO avançado, páginas de captura)",
      "15 postagens/mês (estáticos, carrossel, vídeos)",
      "1 vídeo profissional/mês",
      "Meta Ads, Google Ads, LinkedIn Ads (opcional)",
      "15 criativos/mês (estáticos + animados)",
      "Segmentação por público (frio, morno, quente) e remarketing"
    ],
  },
  {
    title: "Plano Empresarial",
    popular: 0,
    price: "A negociar",
    description:
      "Soluções completas para empresas que buscam liderança de mercado e acompanhamento estratégico.",
    buttonText: "Entrar em contato",
    benefitList: [
      "Auditoria de mídia paga",
      "Auditoria do setor comercial",
      "Plano estratégico de 12 meses totalmente personalizado",
      "Diagnóstico de conversão (CRO)",
      "Manual de Identidade Visual completo",
      "Manual de Comunicação",
      "Implementação de CRM com réguas de relacionamento",
      "Equipe dedicada e suporte prioritário",
      "Relatórios executivos avançados (foco em resultados e tomada de decisão)"
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                {typeof pricing.price === 'string' ? (
                  <span className="text-xl text-muted-foreground">{pricing.price}</span>
                ) : (
                  <>
                    <span className="text-3xl font-bold">R${pricing.price}</span>
                    <span className="text-muted-foreground"> /mensal</span>
                  </>
                )}
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              {pricing.buttonText === "Entrar em contato" ? (
                <Button 
                  className="w-full" 
                  onClick={() => window.open("https://wa.me/92982511393", "_blank")}
                >
                  {pricing.buttonText}
                </Button>
              ) : (
                <Button className="w-full">{pricing.buttonText}</Button>
              )}
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