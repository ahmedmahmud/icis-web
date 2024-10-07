import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  FramerLogoIcon,
} from "@radix-ui/react-icons";

const team = [

  {
    name: "Krish Nigam",
    role: "Secretary",
    image: "img/team/Krish.jpg",
    link: "https://www.linkedin.com/feed/",
  },
  {
    name: "Meera",
    role: "Co - Treasurer",
    image: "img/team/Meera.jpg",
    link: "https://www.linkedin.com/feed/",
  },
  {
    name: "Mukund Verma",
    role: "Co - Treasurer",
    image: "img/team/Mukund.jpg",
    link: "https://www.linkedin.com/feed/",
  },
  {
    name: "Namia Raby",
    role: "Co - Head of Sell-Side Corporate Relations",
    image: "img/team/Namia.jpg",
    link: "https://www.linkedin.com/feed/",
  },
  {
    name: "Cameron Briginshaw",
    role: "Co-Head of Portfolio Management & Buyside Corporate Relations",
    image: "img/team/Cameron.jpg",
    link: "https://www.linkedin.com/feed/",
  },
  {
    name: "Theo Sze",
    role: "Co-Head of Portfolio Management & Buyside Corporate Relations",
    image: "img/team/Theo.jpeg",
    link: "https://www.linkedin.com/feed/",
  },
  {
    name: "Adam Snelling",
    role: "SEC Lead Lecturer",
    image: "img/team/Adam.jpg",
    link: "https://www.linkedin.com/feed/",

  },
  {
    name: "Jamie Shing Him Ho",
    role: "Head of Macro Team",
    image: "img/team/Jamie.png",
    link: "https://www.linkedin.com/feed/",

  },
  {
    name: "Mihnea Bucur",
    role: "Head of Diversity & Inclusivity",
    image: "img/team/Mihnea.jpeg",
    link: "https://www.linkedin.com/feed/",

  },
  {
    name: "Jaiditya Khemani",
    role: "Co - Head of Technology Development",
    image: "img/team/Jaiditya.jpg",
    link: "https://www.linkedin.com/feed/",
  },
  {
    name: "Ahmed Mahmud",
    role: "Co - Head of Technology Development",
    image: "img/team/Ahmed.jpeg",
    link: "https://www.linkedin.com/feed/",
  },
];

const Team = () => {
  return (
    <>
      {/* President's Message Section */}
      <div className="flex flex-col items-start mt-16 px-16">
  <h2 className="text-4xl font-bold mb-4 my-20">President's Message</h2>
  <h2 className="text-xl font-bold mb-4 my-5">Rebecca Fayad</h2>

  <div className="flex flex-col md:flex-row gap-8">
    <img
      src="img/team/Lasen.jpg"
      alt="President"
      className="w-full md:w-1/3 h-auto object-cover rounded-md"
    />
    <div className="max-w-lg flex-1">
      <p className="text-lg">
        
      </p>
    </div>
  </div>
</div>
Something something something 

      {/* Committee Section */}
      <div className="flex flex-col items-center mt-24 px-16">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Our Committee
        </h1>
        <p className="text-xl text-muted-foreground">
          The committee members are here to help you enjoy your experience.
        </p>
        {/* Make a responsive grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {team.map((member) => (
            <Card key={member.name}>
              <CardHeader className="flex items-center space-x-4">
                {/* LinkedIn Button */}
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-transparent backdrop-blur p-0"
                  >
                    <LinkedInLogoIcon className="h-5 w-5 text-blue-600" />
                  </Button>
                </a>
                {/* Text Content */}
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-square object-cover rounded-md"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

    
export default Team;
