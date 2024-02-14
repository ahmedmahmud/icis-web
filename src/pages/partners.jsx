import React from "react";
import PartnerCard from "@/components/ui/partner-card";

const sponsors = {
  goldSponsors: [
    {
      name: "The D. E. Shaw group",
      description: [
        "The D. E. Shaw group is a multinational hedge fund utilising advanced mathematics and sophisticated algorithms to produce market-beating returns.",
        "The firm manages $55 billion and invests across alternative investments and long-oriented investments.",
      ],
      website: "https://www.deshaw.com/",
      image: "img/partners/deshaw.png",
    },
    {
      name: "Fidelity International",
      description: [
        "Fidelity International is a global asset manager which offers industry-leading investment management services across the asset class spectrum.",
        "The firm has over $4 trillion in AUM.",
      ],
      website: "https://www.fidelity.co.uk/",
      image: "img/partners/Fidelity.png",
    },
  ],
  silverSponsors: [
    {
      name: "Money Maze",
      description: [
        "Established in 2020 by two finance industry veterans, the Money Maze Podcast features some of the biggest names in investment management, finance & business.",
        "Through direct, entertaining and insightful interviews with masters of the real-life money maze, it aims to help listeners learn about the different approaches to allocating capital and better navigate the pitfalls that line the path to prosperity.",
        "Whether you're a current or aspiring investor, entrepreneur, professional or student exploring career options, we hope you gain some helpful insights and enjoy the show.",
      ],
      buttons: [
        {
          text: "Spotify",
          link: "https://open.spotify.com/show/0uT0iw8BkDIvFH12Z3GJKR",
        },
        {
          text: "Apple Podcasts",
          link: "https://podcasts.apple.com/gb/podcast/the-money-maze-podcast/id1504477769",
        },
        {
          text: "Introduction Video",
          link: "https://www.youtube.com/watch?v=9SStZiLZ-KQ&ab_channel=MoneyMazePodcast",
        },
      ],
      image: "img/partners/MoneyMaze.png",
    },
  ],
  otherSponsors: [
    {
      name: "Temasek",
      description: [
        "Incorporated in 1974, Temasek is an investment company headquartered in Singapore.",
        "As an active investor and engaged owner, Temasek aims to deliver sustainable value over the long term through its investment themes of Transforming Economies; Growing Middle Income Populations; Deepening Comparative Advantages; and Emerging Champions.",
        "As at 31 March 2021, it owns a portfolio of $206 billion.",
      ],
      website: "https://www.temasek.com.sg/en/index",
      image: "img/partners/Temasek_logo_dark.png",
    },
    {
      name: "EY-Parthenon",
      description: [
        "EY-Parthenon is a global strategy consultancy.",
        "We challenge assumptions to design and deliver strategies that help improve profitability and long-term value.",
        "We have more than 9,000 professionals around the globe, working across three areas of focus:",
        "1. Corporate & growth strategy: We help our clients answer their most complex strategic questions by providing in-depth market, competitor, customer, and investment insights.",
        "2. Transaction strategy & execution: We help our clients realize their full potential through fast-tracked, better-informed decisions across the whole investment lifecycle.",
        "3. Turnaround & restructuring strategy: Whether a business is in crisis or is simply facing an operational challenge, this team is experienced in helping identify and prioritize the most critical issues, stabilize the business, establish a leadership and stakeholder consensus around the solution and deliver tangible results quickly.",
      ],
      website: "https://www.ey.com/en_uk/careers/parthenon/join",
      image: "img/partners/EY-Parthenon_Logo.png",
    },
  ],
  partners: [
    {
      name: "ChineseAlpha",
      description: [
        "ChineseAlpha is an equity research platform that demystifies listed Chinese companies by providing in-depth, quality research.",
        "Its goal is to become the ultimate reference for research and coverage of Chinese equity markets with the purpose of allowing global investors to make accurate and informed investment decisions.",
      ],
      website: "",
      image: "img/partners/CA_logo.svg",
    },
  ],
};

export default function Partners() {
  return (
    <div className="grid w-full min-h-[600px] items-center justify-center py-12 gap-4 md:py-24 lg:gap-10">
      <div className="container grid max-w-5xl items-start gap-4 px-4 md:grid-cols-2 md:px-6 lg:gap-8">
        <div className="space-y-2 md:space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Partners
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Description of the partners.
          </p>
        </div>
      </div>
      <div className="container max-w-5xl grid items-start gap-6 px-4 md:px-6 lg:gap-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-gold">
              Gold
            </h3>
          </div>
          {sponsors.goldSponsors.map((sponsor, index) => (
            <PartnerCard key={index} sponsor={sponsor} />
          ))}
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-silver">
              Silver
            </h3>
          </div>
          {sponsors.silverSponsors.map((sponsor, index) => (
            <PartnerCard key={index} sponsor={sponsor} />
          ))}
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-bronze">
              Other
            </h3>
          </div>
          {sponsors.otherSponsors.map((sponsor, index) => (
            <PartnerCard key={index} sponsor={sponsor} />
          ))}
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-bronze">
              Partners
            </h3>
          </div>
          {sponsors.partners.map((sponsor, index) => (
            <PartnerCard key={index} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </div>
  );
}
