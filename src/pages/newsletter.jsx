import { useState } from "react";

export default function Newsletter() {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const handleExpand = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  return (
    <div>
      <h1 className="my-40 text-4xl mb-8 text-center tracking-tight font-serif font-light fade-in-text">Articles</h1>

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
    title: "The Rise of Fintech",
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
  {
    id: 3,
    title: "Artificial Intelligence in Finance - Boon or Bane?",
    date: "November 3, 2024",
    author: "Rushil Bhandari",
    excerpt: "Finance has persistently been an industry that is at the forefront of transformative change, and...",
    thumbnail: "img/articles/AI.jpg",
    fullContent: (
      <>
        <p>  
          Finance has persistently been an industry that is at the forefront of transformative change, and with the growth of Artificial Intelligence (AI) technology, its presence within the sector cannot be ignored.  
        </p>
        
        <p>
          Artificial Intelligence provides an incredible opportunity to process, execute, and analyse large sets of information at incredibly fast speeds. Its functionality spans a wide range of services and solves various issues within fraud detection, risk management, and global markets sectors to name a few.  
        </p>
  
        <p>
          The global AI financial market in 2019 was valued at $8.3 billion, and by 2027 the sector is expected to grow up to $130 billion. There is no surprise that this tremendous growth has attracted significant investment as financial institutions such as J.P. Morgan lead capabilities within AI research and Capital One within AI patents<sup>[1]</sup>.  
        </p>
  
        <p>
          Machine Learning principles have played a particularly strong role within the AI integration, as these models are exceptionally skilled in analysing complex data sets to identify patterns and anomalies. Currently, they have been successfully deployed for anti-money laundering and know-your-customer (KYC) system checks. The models are exceptionally good at highlighting suspicious activities and ensure regulatory and compliance issues are addressed immediately with greater accuracy<sup>[2]</sup>.  
        </p>
  
        <p>
          Global Markets is another key focus for AI deployment, as analysing historical data, real-time information, and economic indicators are key tools for portfolio construction and management. These models aim to provide a prediction for navigating complex macroeconomic conditions and volatile markets to potentially create value-add opportunities and also provide risk management. Automation within Quantitative Trading has been a key strategy for many firms, as High-Frequency Trading enabled by AI allows for a high execution speed and quick capture of mispriced assets.  
        </p>
  
        <p>
          Whilst these AI advancements have brought tremendous benefits, it is important to consider the issue of bias within AI. Artificial intelligence systems operate as ‘black boxes’ where it is important to contextualise the determined outcomes. The bias within AI models can create a feedback loop, which can cause disadvantage to certain categories and skew results. An example of this would be bias in mortgage approvals or underwriting opportunities due to socioeconomic background or race<sup>[3]</sup>.  
        </p>
  
        <p>
          Finally, for the future, financial institutions have accelerated their attention on implementing ‘fairness-aware machine learning techniques’ and abiding by comprehensive regulatory framework such as the EU AI Act. This ensures to reap the benefit that AI provides within the world of finance whilst making sure these processes are transparent and the people using them are held accountable<sup>[2]</sup>.  
        </p>
  
        <p>Reference List:</p>
        <p><sup>[1]</sup>"AI in Finance – Navigating the New Frontier" Part 1 | LinkedIn</p>
        <p><sup>[2]</sup>AI in Finance: Revolutionizing the Future of Financial Management | DataCamp</p>
        <p><sup>[3]</sup>Tackling bias in artificial intelligence (and in humans) | McKinsey</p>
      </>
    ),
  },

  {
    id: 4,
    title: "Invest Now, Profit Later: The Power of Early Investing",
    date: "November 17th, 2024",
    author: "Daniel Tompkins",
    excerpt: " We’ve all heard the phrase ‘time in the market is better than timing the market’, but what does this actually mean? Consider the S&P 500. If you invested $1,000 in the S&P in 1980, today this would be worth $66,264. However...",
    thumbnail: "img/articles/investnow.jpg",
    fullContent: (
      <>
<p> We’ve all heard the phrase ‘time in the market is better than timing the market’, but what does this actually mean? Consider the S&P 500. If you invested $1,000 in the S&P in 1980, today this would be worth $66,264. However, if you waited 10 years and invested in 1990, you would have $25,548 today, meaning delaying the investment by 10 years takes almost two-thirds of your potential profit off the table. When investing, maximising the time your money is in the market is paramount. In this article, we will explore the reasons you should start investing now and what you can do to get started. </p>

<p> There are two key benefits to beginning your investing journey as soon as possible. The first is the time your money can compound over. Allowing your returns to grow and multiply over time is the easiest way to guarantee long-term wealth. To see for yourself, try an online compound interest calculator. Using an initial investment of $5,000 and an annual rate of return of 8% (S&P 500 adjusted for inflation) yields around $55,000 after 30 years, assuming no additional investment. If you added $1,000 to your investment account each month, this $55,000 becomes a cool $1.5 million. In addition to allowing your money to multiply, investing early for the long term allows you to ride out any short-term market volatility. Young investors who start early can afford to ride out dips in the market and still see a return over time. The later you start, the less time you allow for your portfolio to recover from bearish market cycles, which ultimately will lead to lower returns. Investing also brings value beyond increasing your net worth; it teaches you vital lessons about financial literacy that are equally valuable. Investing teaches you about risk management, planning for financial goals, and how markets work. </p>

<p> There are a few common misconceptions about investing that are important to address, one being the idea that you need large amounts of capital to get started. This is far from the case. Investing platforms today offer fractional shares, so instead of buying one share of Tesla for $328, you can buy 0.3 shares for about $100. This allows you to invest as much or as little as you would like in a flexible manner. Another common misconception is the idea that investing your money is risky. Due to inflation, it’s arguably riskier to hold cash as it’s guaranteed to lose value over time. Investing in stable assets such as indices like the S&P 500, blue-chip stocks, or gold are all relatively safe. </p>

<p> To conclude, investing a small amount over time can set you up for future financial stability, but the key is to start early. The longer your money is in the market, the more your returns will compound and the greater your final pot will be. Trading212 is a great beginner platform to get started, with many index funds to choose from. Good luck! </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Demystifying Quantitative Finance",
    date: "November 17th, 2024",
    author: "Christian Piazza",
    excerpt: "  Quantitative finance, or \"quant finance,\" has become an increasingly important part of today’s financial world, and the individuals and institutions who employ it have often managed to stay ahead of the curve and turn in more profits...",
    thumbnail: "img/articles/demystifying quant finance.jpg",
    fullContent: (
      <>

<p> Quantitative finance, or "quant finance," has become an increasingly important part of today’s financial world, and the individuals and institutions who employ it have often managed to stay ahead of the curve and turn in more profits. But what exactly is quantitative finance, and why has it become so vital? Simply put, quantitative finance is the application of statistical methods to solve financial problems such as managing investments, assessing risks, and finding imbalances in the markets, all while relying on data and empirical analysis. Though it may sound daunting, quant finance is grounded in practical applications that bring scientific rigour to finance. </p>

<p> But what is the difference between a quantitative and qualitative approach to financial problems? To answer this, imagine you’re trying to assess the value of a company. A qualitative approach might involve looking at the company’s products, performing a SWOT analysis, or evaluating its management structure—all in an effort to assess how profitable a company will be, and hence how its stock might perform in the long run. These insights, while valuable, are based on subjective judgment. By contrast, a quantitative analyst will rely on numerical data, completely detached from the company’s inner workings, to drive decisions. For example, it may be possible to identify a group of high-performing companies whose stock data exhibits very subtle but highly consistent annual trends and therefore use this knowledge to anticipate the movement of a stock and buy accordingly. It may also be possible to find new stocks that exhibit similar behaviour, and when investing in new stocks, they might choose companies whose stock data aligns with the performance of previously successful ones (McWhinney, 2024). Quant traders often set themselves apart from regular traders by using computers and large data sets to make a high volume of small but well-informed decisions, giving them an edge. </p>

<p> The people behind these methods are known as “quants,” a colloquial term for those who specialise in applying quantitative methods to solve complex financial problems. To excel in this field, quants need three core skills. First, they require a strong mathematical foundation, as mathematics forms the backbone of the models they use. Second, they need to understand financial markets, providing the context in which their models are applied. Finally, they need proficiency in computer science, as programming and data processing are essential for turning their models into actionable strategies. Most quants have advanced degrees—often a master’s or Ph.D.—in fields like mathematics, statistics, computer science, or economics (Yates, 2024). Their skills make them highly sought after by investment banks, hedge funds, and asset management firms looking to gain an edge in a data-driven market. </p>

<p> Quantitative finance skills can be applied across various domains in finance. For example, in equity trading, quants develop algorithms that analyse market data and execute trades at speeds far faster than human traders can manage. In derivative pricing, they build models that determine the value of complex instruments like options, considering factors such as volatility, interest rates, and time decay. Quantitative methods also play a crucial role in portfolio management, where they enable precise asset allocation and risk management, helping portfolio managers construct portfolios that optimise returns while carefully controlling for risk. In risk management, quant methods allow financial institutions to assess potential losses and make proactive adjustments to protect against market downturns. These applications of quant finance bring sophistication and data-driven insights that have transformed traditional financial strategies into more systematic and efficient processes (Qiao, 2024). </p>

<p> Despite its strengths, quantitative finance has its limitations. One drawback is that it can sometimes overlook qualitative factors, which, though harder to measure, are essential for a complete understanding of market dynamics. For instance, purely data-driven models may fail to account for unprecedented events like the 2008 financial crisis or sudden geopolitical events that disrupt commodity prices (McWhinney, 2024). Moreover, quant strategies can lose effectiveness as they become widely adopted. Profit in quantitative finance often comes from spotting market inefficiencies, and when these strategies become popular, the inefficiencies they exploit diminish, making returns harder to achieve. This phenomenon means that quants must continually innovate to stay ahead, adapting their models to evolving market conditions. </p>

<p> In conclusion, quantitative finance is a discipline that combines mathematical, financial, and technological expertise to bring rigorous data analysis to investment strategies, risk management, and financial decision-making. Whether your goal is to become a quant or to simply apply these methods to investment analysis, understanding quantitative finance can open doors to a dynamic and evolving part of the financial world. For students intrigued by the field, gaining a foundation in mathematics, statistics, and programming can provide a strong entry point. </p>

<p>References:</p>

<p>Corporate Finance Institute. (n.d.). What is quantitative finance? Corporate Finance Institute. Retrieved November 12, 2024, from https://corporatefinanceinstitute.com/resources/data-science/quantitative-finance/#:~ =of%20each%20course.-,What%20is%20Quantitative%20Finance?,CFI's%20Financial%20Analyst%20Training%20Courses </p>

<p>McWhinney, J. (2024, October 18). A simple overview of quantitative analysis. Investopedia. Retrieved November 12, 2024, from https://www.investopedia.com/articles/investing/041114/simple-overview-quantitative-analysis.asp </p>

<p>Yates, T. (2024, June 3). Quants: The rocket scientists of Wall Street. Investopedia. Retrieved November 12, 2024, from https://www.investopedia.com/articles/financialcareers/08/quants-quantitative-analyst.asp </p>

<p>Qiao, Y. (2024, July 10). Quantitative finance. Wall Street Oasis. Retrieved November 12, 2024, from https://www.wallstreetoasis.com/resources/skills/finance/quantitative-finance</p>
      </>
    ),
  },
  {
    id: 6,
    title: "The rise of decentralised finance: crypto",
    date: "November 17th, 2024",
    author: "Joanna Qiao",
    excerpt: "  Back in 2018, Warren Buffet called Bitcoin “probably rat poison squared.” Yet, just three years later, his company invested $500 million...",
    thumbnail: "img/articles/crypto.jpg",
    fullContent: (
      <>


<p> Back in 2018, Warren Buffet called Bitcoin “probably rat poison squared.” Yet, just three years later, his company invested $500 million in Nubank, a digital bank offering cryptocurrency products (Nadelle, 2024). This surprising turnaround could be part of a bigger trend: the rise of decentralised finance, also known as DeFi, which is changing how money is managed. </p>

<p> DeFi is replacing players in the financial system such as banks and other intermediaries. For centuries, banks have been at the heart of our financial lives, but their services come with a cut from each transaction. This began to change in 2008, when an anonymous person or group under the pseudonym Satoshi Nakamoto published a paper titled “Bitcoin: A Peer-to-Peer Electronic Cash System”. They introduced a new kind of currency that didn’t need banks. Instead, it relied on a peer-to-peer network that enabled direct transactions. </p>

<p> As explained by Rafael Cosman, CEO and co-founder of TrustToken, “DeFi takes the work done by banks and puts it in the hands of regular people” (Napoletano, 2023). To illustrate this concept with a simple example: imagine that you have money sitting in a savings account, earning 0.5% interest rate. In the meantime, your bank might lend that same money to others at a 3% interest rate, keeping the 2.5% difference to themselves. With DeFi, you basically use digital platforms to lend directly to others. This way, you gain direct control over your finances and earn the full 3% interest yourself. </p>

<p> Blockchain and cryptocurrency are the core technologies powering DeFi. Blockchain is a distributed network of computers that records all transaction activities on a DeFi platform in encrypted code, under one system. This is a decentralised system, meaning there is no middleman carrying out transactions. Instead, they are recorded by participants using the same blockchain through a complex mathematical process. The system is intricate, but the overall goal is clear: it offers a public system that makes financial transactions between individuals more secure and transparent than the private system used by banks. </p>

<p> Transactions in DeFi are handled using cryptocurrencies. Two dominate the market so far: Bitcoin (BTC) and Ethereum (ETH). Bitcoin is seen as the “digital gold,” a long-term value storage. Ethereum is more volatile and adaptable to a greater variety of uses, including financial transactions, digital wallets, and NFTs (non-fungible tokens), which are used to commodify typically non-tradable assets. </p>

<p> One interesting case of cryptocurrency adoption is El Salvador. In 2021, it became the first country to make Bitcoin an official currency. This decision aimed to make financial services more accessible for people without bank accounts. Although the decision sparked global debate, it shows the potential for cryptocurrency to improve financial inclusion worldwide. </p>

<p> So, how should beginners approach investing in crypto? Start by setting up a crypto wallet and trade a small amount of digital assets to familiarise with the current landscape. Remember that the market is volatile and still lacks full regulation, so it’s advised to be cautious in the beginning and know that it is possible to lose everything. DeFi still has a long road ahead with its promise and potential, and it’s up to everyone to decide how they want to make the most out of this transformative technology. </p>

<p>References:</p>

<p>Nadelle, D. (2024, April 23). Warren Buffett predicts ‘Bad ending’ for Bitcoin — Is it a doomed investment? Nasdaq. https://www.nasdaq.com/articles/warren-buffett-predicts-bad-ending-bitcoin-it-doomed-investment </p>

<p>Napoletano, E. (2023, April 28). What Is DeFi? Understanding Decentralized Finance. Forbes Advisor. https://www.forbes.com/advisor/investing/cryptocurrency/defi-decentralized-finance/ </p>
      </>
    ),
  },
  
];

