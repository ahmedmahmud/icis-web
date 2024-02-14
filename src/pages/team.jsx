import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const team = [
  {
    name: "Lasen Wanni Arachchige",
    role: "President",
    image: "img/team/Lasen.jpg",
  },
  {
    name: "Krish Nigam",
    role: "Secretary",
    image: "img/team/Krish.jpg",
  },
  {
    name: "Meera",
    role: "Co - Treasurer",
    image: "img/team/Meera.jpg",
  },
  {
    name: "Mukund Verma",
    role: "Co - Treasurer",
    image: "img/team/Mukund.jpg",
  },
  {
    name: "Namia Raby",
    role: "Co - Head of Sell-Side Corporate Relations",
    image: "img/team/Namia.jpg",
  },
  {
    name: "Cameron Briginshaw",
    role: "Co-Head of Portfolio Management & Buyside Corporate Relations",
    image: "img/team/Cameron.jpg",
  },
  {
    name: "Theo Sze",
    role: "Co-Head of Portfolio Management & Buyside Corporate Relations",
    image: "img/team/Theo.jpeg",
  },
  {
    name: "Adam Snelling",
    role: "SEC Lead Lecturer",
    image: "img/team/Adam.jpg",
  },
  {
    name: "Jamie Shing Him Ho",
    role: "Head of Macro Team",
    image: "img/team/Jamie.png",
  },
  {
    name: "Mihnea Bucur",
    role: "Head of Diversity & Inclusivity",
    image: "img/team/Mihnea.jpeg",
  },
  {
    name: "Jaiditya Khemani",
    role: "Co - Head of Technology Development",
    image: "img/team/Jaiditya.jpg",
  },
  {
    name: "Ahmed Mahmud",
    role: "Co - Head of Technology Development",
    image: "img/team/Ahmed.jpeg",
  },
];

const Team = () => {
  return (
    <div className="flex flex-col items-center mt-24 px-16">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Our Committee
      </h1>
      <p className="text-xl text-muted-foreground">
        The committee members are here to help you enjoy your experience.
      </p>
      {/* make a responsive grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {team.map((member) => (
          <Card key={member.name}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
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
  );
};

export default Team;
