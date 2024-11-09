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
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

const team = [
  {
    name: "Ruben Berstecher",
    role: "Head of Diversity and Inclusivity",
    image: "img/team/Ruben Berstecher.jpg",
    link: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFRMlqB6BLOXQAAAZJwwPmgU7ndXbkFJvgfi2HD3u16UjaXIWkdSgntUKdvkis5wWbmAtMrEQ69f8aXJoG8aaTOQtyRCHUGMvg9R4lk4iKa2Cpcii24qSqQURfWlZAwWfXNylM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frpbd%2F",
  },
  {
    name: "Dmitriy Trofimenko",
    role: "Treasurer",
    image: "img/team/Dmitriy Trofimenko.jpg",
    link: "https://www.linkedin.com/in/dmitriy-trofimenko-/",
  },
  {
    name: "Keith Poon",
    role: "Head of Editorial",
    image: "img/team/Keith Poon.png",
    link: "https://www.linkedin.com/in/keith-poon-730390227/",
  },
  {
    name: "Elyse Wu",
    role: "Head of Sell-Side Corporate Realtions",
    image: "img/team/Elyse Wu.jpg",
    link: "https://www.linkedin.com/in/elyse-zhi-qing-wu-05651b1ba/",
  },
  {
    name: "Alqavi Hasan",
    role: "Head of Marketing",
    image: "img/team/Alqavi Hasan.jpg",
    link: "https://www.linkedin.com/in/alqavi",
  },
  {
    name: "Felix Schneider",
    role: "Head of Events",
    image: "img/team/Felix Schneider.jpg",
    link: "https://www.linkedin.com/in/felix-schneider00",
  },
  {
    name: "Diane de Nonneville",
    role: "Head of Technology Development",
    image: "img/team/Diane de Nonneville.png",
    link: "https://www.linkedin.com/in/diane-de-nonneville",
  },
  {
    name: "Lim Chee Yuan",
    role: "Head of Secretary",
    image: "img/team/Lim Chee Yuan.jpg",
    link: "https://www.linkedin.com/in/limcheeyuan/",
  },
  {
    name: "Nicholas Finnemore",
    role: "Portfolio Manager",
    image: "img/team/Nicholas Finnemore.png",
    link: "https://uk.linkedin.com/in/nicholas-finnemore-353a671ba",
  },
  {
    name: "Sophie Hoo",
    role: "Co-Head of Buy-Side Relations",
    image: "img/team/Sophie Hoo.jpg",
    link: "https://www.linkedin.com/in/sophiehoo",
  },
  {
    name: "Dinil Wanni Arachchige",
    role: "Head of Portfolio Management",
    image: "img/team/Dinil.jpg",
    link: "https://uk.linkedin.com/in/dinil-wanni-arachchige-4221a7201",
  },
  {
    name: "Benjamin Tan",
    role: "Co-Head SEC Lecturer",
    image: "img/team/Benjamin Tan.jpg",
    link: "https://www.linkedin.com/in/benjamin-tan-09418b219/",
  },
];

const Team = () => {
  return (
    <>
<div className="flex flex-col md:flex-row items-start mt-24 px-16 py-20 gap-8">
  <div className="w-full md:w-1/3">
    <h2 className="text-4xl font-bold mb-4">President's Message</h2>

    {/* President's name with LinkedIn icon as a button */}
    <div className="flex items-center gap-2 mb-4">
      <a
        href="https://www.linkedin.com/in/rebecca-fayad"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="bg-transparent backdrop-blur p-0"
        >
          <LinkedInLogoIcon className="h-5 w-5 text-blue-600" />
        </Button>
      </a>
      <h2 className="text-xl font-bold">Rebecca Fayad</h2>
    </div>

    <img
      src="img/team/Rebecca Fayad.jpg"
      alt="President"
      className="w-full h-auto object-cover rounded-md"
    />
  </div>

  {/* Align text with image and add spacing between paragraphs */}
  <div className="flex-1 self-start space-y-6">
    <p className="text-xl leading-relaxed">
      Welcome to the Imperial Investment Society, the #1 Business and Finance society in the UK 
      (TopGrad 23 Ranking)! Whether you're a finance professional or just beginning your journey, 
      our society offers a vibrant platform where ambition meets opportunity.
    </p>
    <p className="leading-relaxed">
      Our mission is to bridge the gap between academic theory and real-world financial practice. 
      We provide our members with unmatched access to workshops, networking events, and industry 
      professionals from top firms, equipping you with the tools to break into the industry. From 
      portfolio management to career advice, we cover all aspects of finance and the application 
      process, ensuring you acquire the skills and insights needed to excel—whether your goal is 
      in finance or another field.
    </p>
    <p className="leading-relaxed">
      As the largest student society at Imperial, we take pride in fostering a diverse and inclusive 
      environment. Our community thrives on collaboration, curiosity, and a shared passion for 
      learning, consistently connecting with like-minded businesses and societies.
    </p>
    <p className="leading-relaxed">
      Join us this year as we continue to build our reputation, nurture emerging talent, and explore 
      the exciting opportunities within the financial world. Whether you aim to deepen your 
      understanding through our courses, such as the Securities Education Certificate (SEC), gain 
      hands-on experience as an analyst in our Fund, Queen’s Tower Capital, or simply network at our 
      events and learn from our weekly sessions, the Imperial Investment Society is here to support 
      and guide you at every step.
    </p>
    <p className="leading-relaxed">
      We look forward to welcoming you to our society and working together to make this year our most 
      successful yet! Your success is our commitment, and we are here to equip you with everything you 
      need to secure your dream position.
    </p>
    <p className="leading-relaxed">To your success and beyond,</p>

    <blockquote className="italic border-l-4 pl-4 border-gray-300">
      Rebecca Fayad,
    </blockquote>
    <blockquote className="italic border-l-4 pl-4 border-gray-300">
      President, Imperial Investment Society
    </blockquote>
  </div>
</div>



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
