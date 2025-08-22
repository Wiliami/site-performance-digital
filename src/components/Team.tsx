import john from "./assets/john.jpeg";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  // CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  image: string | any;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    image: "https://0.gravatar.com/avatar/7d390d9e32b7fe3474183d3fb8ecb1b4c2811cb99429e24b1874551aef20a10f?size=256&d=initials",
    name: "Erick Raphael",
    position: "Head marketing",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  
  {
    image: "https://avatars.githubusercontent.com/u/67030481?v=4",
    name: "Wiliamis Oliveira",
    position: "Back-end Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    image: "https://avatars.githubusercontent.com/u/90149109?v=4",
    name: "Braz Junior",
    position: "Front-end Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },

  {
    image: "https://2.gravatar.com/avatar/437dadf011284df43d90e2528a45bd211d51b51ec0414ef8ea094d021281fe08?size=256&d=initials",
    name: "Jhonatan Almeida",
    position: "Creative Marketing",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Conheça nosso {" "}
        </span>
        time
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Equipe dedicada em alavancar o seu negócio utilizando estratégias de marketing e mídia.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ image, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={image}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              {/* <CardContent className="text-center pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </CardContent> */}

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
