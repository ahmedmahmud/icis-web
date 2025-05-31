import React from "react";
import PartnerCard from "@/components/ui/partner-card";

const sponsors = {
  goldSponsors: [
    {
      name: "Fidelity International",
      description: [
        "We are proud to announce that our main sponsor for the 24-25 academic year is Fidelity International",
        "Fidelity Investments is a leading financial services company offering investment management, retirement planning, brokerage services, and wealth management solutions. Founded in 1946, Fidelity serves millions of individual investors and institutions, providing innovative tools and resources to help clients achieve their financial goals.",
      ],
      website: "https://www.fidelity.co.uk/",
      image: "img/partners/Fidelity.png",
    },
  ],

  otherSponsors: [
    {
      name: "Deutsche Bank",
      description: [
        "Deutsche Bank is a leading global financial services provider, offering a wide range of banking services including investment banking, corporate finance, asset management, and retail banking. Headquartered in Germany, the bank serves clients worldwide with expertise in capital markets, risk management, and advisory services, supporting businesses, governments, and institutions across diverse sectors.",
      ],
      website: "https://www.db.com/index?language_id=1&kid=sl.redirect-en.shortcut",
      image: "img/partners/deutsche bank.png",
    },
    {
      name: "Trading View",
      description: [
        "TradingView is a renowned platform for traders and investors, adored and frequented by countless individuals across the globe. It presents cutting-edge charting instruments and a realm where market enthusiasts can interact, visualize data, and ready themselves for BTCUSD trading and other assets.",
      ],
      website: "https://www.tradingview.com/",
      image: "img/partners/TV.png",
    },
    {
      name: "Castleton Commodities International",
      description: [
        "Castleton Commodities International (CCI) is a global energy and commodities trading firm that specializes in the trading, storage, and transportation of physical commodities such as natural gas, power, oil, and refined products. Founded in 1997, CCI also engages in infrastructure asset investments and optimization, providing strategic insight into global markets. With a presence across key energy hubs worldwide, CCI combines its expertise in commodity trading, logistics, and asset management to offer integrated solutions for clients in the energy and industrial sectors.",
      ],
      buttons: [
        {
          text: "Learn more",
          link: "https://www.cci.com/",
        },
      ],
      image: "img/partners/CCI_Logo.jpg",
    },
    {
      name: "Lazard",
      description: [
        "Lazard is a global financial advisory and asset management firm, specializing in mergers and acquisitions, restructuring, capital raising, and strategic advisory services. With a history dating back to 1848, Lazard serves clients worldwide, providing expert financial guidance to corporations, governments, and institutions.",
      ],
      website: "https://www.lazard.com/",
      image: "img/partners/Lazard-Ltd-Logo.png",
    },
    {
      name: "Evercore",
      description: [
        "Evercore is a global independent investment banking advisory firm, specializing in mergers and acquisitions, restructuring, capital raising, and strategic advisory. Founded in 1995, Evercore advises corporations, institutions, and governments, providing expert financial solutions and leadership in high-stakes transactions.",
      ],
      website: "https://www.evercore.com/",
      image: "img/partners/Evercore.png",
    },
    {
      name: "JPMorgan Chase & Co",
      description: [
        "J.P. Morgan is a global financial services firm offering investment banking, asset management, wealth management, and commercial banking. As a leader in capital markets and advisory services, J.P. Morgan serves corporations, governments, and institutions, providing innovative financial solutions worldwide.",
      ],
      website: "https://www.jpmorganchase.com/",
      image: "img/partners/JP-Morgan-Chase-Logo.png",
    },
    {
      name: "Bloomberg",
      description: [
"Bloomberg is a global financial information and media company that provides real-time data, analytics, news, and insights to financial professionals and institutions. Known for its Bloomberg Terminal, the company delivers key market data, trading tools, and news coverage to help clients make informed financial decisions."      ],
      website: "https://www.bloomberg.com/",
      image: "img/partners/bloomberg.png",
    },
    {
      name: "Scotia Bank",
      description: [
      "Scotiabank is a leading Canadian multinational bank providing a wide range of financial services, including personal, commercial, corporate, and investment banking. With a strong presence across the Americas, Scotiabank serves millions of customers, offering innovative banking solutions and expertise in global markets."],
        website: "https://www.scotiabank.com/global/en/global-site.html",
      image: "img/partners/Scotiabank-Logo.png",
    },
    {
      name: "Point72",
      description: [
      "Point72 is a global asset management firm specializing in investment strategies across various asset classes, including equities, fixed income, and alternative investments. Founded by Steven A. Cohen in 2014, the firm focuses on leveraging data-driven insights and advanced technology to generate superior returns for its investors."],
        website: "https://point72.com/",
      image: "img/partners/Point72.png",
    },
  ],
 
};

const Subtitle = (props) => (
  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-silver">
    {props.children}
  </h3>
);

export default function Partners() {
  return (
    <div className="grid w-full justify-center px-4 py-24 space-y-4 lg:space-y-10">
      <div className="max-w-5xl space-y-10 lg:space-y-10 md:px-6">
        <div className="space-y-1 md:space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Partners
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Helping fuel our vision for the future
          </p>
        </div>
        <div className="space-y-4">
          <Subtitle className="text-gold">Our Gold Sponsor</Subtitle>
          {sponsors.goldSponsors.map((sponsor) => (
            <PartnerCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>
        <div className="space-y-4">
          <Subtitle className="text-bronze">Our Other Sponsors:</Subtitle>
          {sponsors.otherSponsors.map((sponsor) => (
            <PartnerCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </div>
  );
}
