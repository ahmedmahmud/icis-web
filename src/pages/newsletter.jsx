import { useState } from "react";

export default function Newsletter() {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const handleExpand = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  return (
    <div>
      <h1 className="my-40 text-4xl mb-8 text-center tracking-tight font-serif font-light fade-in-text">Newsletter</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {articles.map((article) => (
          <div
            key={article.id}
            onClick={() => handleExpand(article.id)}
            className={`cursor-pointer bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${expandedArticle === article.id ? "col-span-1 lg:col-span-3" : ""
              }`}
          >
            <img src={article.thumbnail} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{article.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{article.date} • {article.author}</p>
              <div className="text-gray-700 dark:text-gray-300 mt-4 space-y-4">
                {expandedArticle === article.id ? article.fullContent : article.excerpt}
              </div>
              {expandedArticle === article.id && (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents card from collapsing when button is clicked
                    handleExpand(null);
                  }}
                  className="text-indigo-500 dark:text-indigo-400 mt-4 inline-block"
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sample articles data
const articles = [
  {
    id: 1,
    title: "What is Financial Technology?",
    date: "November 1, 2024",
    author: "Kaavya Iver",
    excerpt: "From digital payments to cryptocurrencies, fintech is transforming the financial landscape...",
    thumbnail: "img/articles/rise_of_fintech.jpg",
    fullContent: (
      <>
        <p>
          What is financial technology? From digital payments to cryptocurrencies to automated loan approvals, fintech
          encompasses the use of technology to automate and streamline financial processes. Technology has been transforming
          various sectors for decades, but only recently has it disrupted the environment of the global financial system. Its
          rapid acceleration over the last decade has seen its adoption in everything from transferring a friend money for an
          Uber after a night out with PayPal to broadening access to financial services for under-provided populations. Fintech
          startups have applied software, analytics, and data to develop solutions that improve, challenge, and sometimes even
          replace standard legacy financial services.
        </p>
        
        <p>
          As of this month, Forbes has identified Ant Group as the largest Fintech company of 2024. Ant Group runs AliPay, which
          dominates the payments network in China. AliPay provides users with a digital wallet and payment app that enables them
          to scan QR codes to make payments with merchants, reducing the number of credit card and cash transactions. Despite
          recent regulatory issues, Ant Group has maintained over one billion users for AliPay and is currently valued at $78.5bn,
          making it the most valuable private fintech company in the world.
        </p>

        <p>
          Closely tailing Ant Group is US-based Stripe, valued at $50bn. Processing over 500 million API requests a day, with a
          daily peak of 13,000 requests per second, Stripe provides payment processing software that allows merchants to collect
          money from their customers. Stripe is used by BMW to power e-commerce and payments, Amazon to process cross-border
          payments, and several other large international firms such as Google and WhatsApp.
        </p>

        <p>
          Claiming bronze on Forbes’ October 2024 rankings is British Revolut. Leading the challenger bank space, Revolut provides
          mobile banking services, debit cards, international transfers, currency exchange, and recently incorporated an in-app
          investing platform for its users, valued at $33bn.
        </p>
        <p>
        With all this advanced technology, does it mean it’s always sunny in fintech? Focusing on the trends over the last 5 years, KPMG revealed that overall global funding into fintech across venture capital, private equity, and M&A has been rapidly increasing, with the fastest surge in funding between the third quarter of 2020 and the first quarter of 2021. The acceleration of investment into the emerging market during COVID can be attributed to the sharp transition into a world of digital payments catalysed by reduced in-person transactions during lockdowns. KPMG also highlighted that global funding into Fintech peaked at $115bn in the first quarter of 2022 but has steadily fallen since to below $60bn in the last quarter of 2023. The fall in investment can be explained by a decreased risk appetite from investors following geopolitical uncertainty and high interest rates. This trend continues into 2024 as concerns about the cost of capital and the security of returns have impeded the speed of fintech deals. Despite this, there has been a rise in the number of deals in the fintech market, with both Asian-Pacific and Americas regions seeing increases in the number of deals between the second half of 2023 and the first half of 2024. Regtech, the subsect of Fintech focusing on financial regulation technology, has seen continued increases, especially in the EMEA region. Furthermore, global M&A fintech investment totalled to $32.6bn in the first quarter of 2024—over half of the value of all M&A deals made in 2023. Therefore, whilst the market has faced turbulence over the last couple of years, it appears reasonable to assume that the drop in funding and excitement is because interest in fintech is stabilising rather than disappearing—that is unless you suddenly decide you’re bored of using Revolut. 
        </p>
        <p>

Overall, I think that it’s fair to say that fintech is symbolic of the advantages of embedding technology into our everyday lives. The financial system, like other systems central to the functioning of society, simply requires more regulatory attention when it collides with technology. The rise of fintech is certainly somewhat of a revolution and signifies a new age of finance that matches the pace of our increasingly digitalised lives. Following the rapid uptake of fintech during COVID, the market is stabilising, and we can expect to see its rise continue.
        </p>
      </>
    ),
  },
  {
    id:2,
    title: "The Consolidation of European Banks and Its Impact on Global Markets",
    date: "November 1, 2024",
    author: "Nikita Karri",
    excerpt: "With the current economic climate moving towards a less fragmented and more responsive financial landscape, a question arises about the future of European banks and a possible consolidation between them...",
    thumbnail: "img/articles/european_banks.jpg",
    fullContent: (
      <>
        <p>         
With the current economic climate moving towards a less fragmented and more responsive financial landscape, a question arises about the future of European banks and a possible consolidation between them. Earlier this year we saw the acquisition of Credit Suisse by UBS, and Nationwide’s acquisition of Virgin Money this October. This article looks into the driving forces and obstacles behind commercial and investment bank consolidation in Europe, and possible implications for consumers. As Hyder Jumabhoy (White & Case LLP) states, ‘We are more bullish on bank M&A than we have been in the last 5 years … European lenders which had shelved transformational deals will need to act quickly, albeit carefully’ (Jumabhoy & Ballard, 2024).  
        </p>
        
        <p>The fundamental drive for possible consolidation in the European banking sector is benefits from scale. Larger institutions tend to be more efficient than their smaller peers. This sort of efficiency may outweigh the increased risk a larger bank may take on. Considering that the role of a commercial bank is to match savers with excess savings to borrowers that seek loans means larger banks can match them more efficiently, leveraging upon their wider geographic reach.  
        </p>

        <p>
According to the ECB Banking Supervision there are longstanding issues such as low profitability and capacity in the European Banking Sector. The case of consolidation, be it cross-border or within the EU, would help ease the burden of a costly regulatory system for each bank. By achieving greater economies of scale, European banks could rival U.S. and Chinese counterparts in terms of lending capacity, profitability, and technology. In terms of investment banks, recently, we have also seen a trend toward faster settlement windows for securities, already adopted by markets like the U.S. and Canada which further underscores the need for European banks to consolidate and modernise (Asgari, 2024).  
 </p>

        <p>However, cross-border bank consolidation in Europe remains a contentious issue, mainly due to the region's fragmented regulatory landscape. Different countries have different tax regimes, labour laws, and financial regulations, which complicate mergers that span national borders. ‘Hurdles to deals include banking regulations and broader fragmentation of rules across Europe such as lack of tax and product harmonisation’ Nicolas Charnay, managing director, S&P Global Ratings illustrates. ‘This makes it hard to generate economies of scale and therefore find economic sense in cross-border deals.’ (Pianese, 2024). 
        </p>
        <p>It is important to note that the topic of consolidation and whether bigger banks may benefit consumers as much as they benefit the banks still falls under debate. It is also possible that as banks grow large, they become more complicated to run in practice due to the cultural and operational integration of the merged entities that need to be addressed. Some evidence (Huber, 2017) even suggests there are real costs to increases in bank size, and they may not be able to attract more deposits as would be hoped. As a result, we could witness increased costs for both consumers and enterprises. Perhaps without the political will to break down regulatory barriers and create a unified financial framework, cross-border mergers may continue to face obstacles, limiting the full potential of consolidation in Europe.  </p>
        <p>Reference List:  </p>
        <p>Jumabhoy, H. & Ballard, A. (2024) ‘Europe’s banks restructure, consolidate and partner their way into the digital future’, White & Case LLP, 26 September. Available at: <a href="https://www.whitecase.com/insight-our-thinking/financial-ma-september-2024-banks/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://www.whitecase.com/insight-our-thinking/financial-ma-september-2024-banks/</a> (Accessed: 25 October 2024). 
        </p>
        <p> 
Asgari, N. (2024) ‘Banks and fund managers call on EU to commit to shorter settlement plan’ Financial Times, 14 October. Available at: <a href="https://www.ft.com/content/aaecac93-b36d-4104-80a2-3e0d920b77e8/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">/www.ft.com/content/aaecac93-b36d-4104-80a2-3e0d920b77e8/</a> (Accessed: 25 October 2024). 
</p>
        <p>Pianese, B. (2024) ‘EU banking consolidation still a distant prospect, say analysts’ The Banker, 11 June. Available at: <a href="https://www.thebanker.com/EU-banking-consolidation-still-a-distant-prospect-say-analysts-1718091669/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">"https://www.thebanker.com/EU-banking-consolidation-still-a-distant-prospect-say-analysts-1718091669/"</a> (Accessed: 25 October 2024). 
        </p>
        <p> Huber, K. (2017) ‘Are Bigger Banks Better?’ October, 2017. Available at: <a href=" https://www.lse.ac.uk/iga/assets/documents/research-and-publications/huber-bank-size.pdf" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"> https://www.lse.ac.uk/iga/assets/documents/research-and-publications/huber-bank-size.pdf</a> (Accessed: 30 October 2024).</p>
      </>
    ),
  },
];

