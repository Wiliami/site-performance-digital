import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
// import image3 from "../assets/image4.svg";
// import { version } from "node:os";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "🚀 1. Atração",
    description:
      "(Topo do Funil - Awareness).",
    image: image1,
  },
  {
    title: "💡 2. Engajamento",
    description:
      "(Meio do Funil - Consideração).",
    image: image2,
  },
  {
    title: "💰 3. Conversão",
    description:
      "(Fundo do Funil - Decisão)",
    image: image2,
  },
];



export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Nossos{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          serviços
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
