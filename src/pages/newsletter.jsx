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
    date: "November 1st, 2024",
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
    date: "November 1st, 2024",
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
    date: "November 3rd, 2024",
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
  {
    id: 7,
    title: "Golden Exists - The Future of PE, VC, and HF",
    date: "December 1st, 2024",
    author: "Mohamed Jama",
    excerpt: "In finance, the term \"golden exit\" refers to the dream career leap: moving from demanding roles like investment banking to more strategic...",
    thumbnail: "img/articles/golden exits.jpg",
    fullContent: (
      <>


<p> In finance, the term "golden exit" refers to the dream career leap: moving from demanding roles like investment banking to more strategic, impactful, and lucrative positions. For many aspiring professionals, the destinations of choice are Private Equity (PE), Venture Capital (VC), or Hedge Funds (HF). These sectors, celebrated for their prestige and influence, are evolving in ways that could shape the career trajectories of the next generation of financiers. </p>

<p> Private Equity has always been synonymous with high-impact investing. For finance professionals, it offers the chance to transition from advisory roles to directly shaping companies' futures. Yet, PE is entering a phase of transformation. With $3.2 trillion in unsold assets by 2023, the industry faces mounting pressure to deliver returns (Bain & Company, 2024). This liquidity crunch has sparked innovation in how firms approach investments and exits. Secondary markets, where PE firms sell stakes to other investors, are growing in importance, providing flexibility in otherwise stagnant portfolios (Morgan Stanley, 2021). </p>

<p> Moreover, the industry's embrace of Environmental, Social, and Governance (ESG) principles is not just a trend—it’s a survival strategy. Investors increasingly demand accountability, pushing firms to prioritise sustainability alongside profits (Accenture, 2021). Emerging technologies like artificial intelligence and machine learning are also revolutionising deal sourcing and portfolio management, offering investment bankers eyeing PE an opportunity to be at the forefront of innovation (Deloitte, 2024). </p>

<p> Venture Capital appeals to those who dream of fostering innovation—of backing the next big idea. However, VC has not been immune to headwinds. The industry saw global deal values drop nearly 35% in 2023, driven by macroeconomic uncertainty and tighter liquidity (Pensions & Investments, 2024). Despite these challenges, VC is reinventing itself. Startups are increasingly using alternative exit strategies such as mergers, acquisitions, and secondary sales, reducing dependence on the traditional IPO route (PitchDrive, 2024). Additionally, the rise of Special Purpose Acquisition Companies (SPACs) provides a quicker, less volatile pathway to public markets, reshaping liquidity opportunities for VC-backed companies (a16z, 2021). </p>

<p> For aspiring venture capitalists, the sector’s global expansion is an exciting prospect. Cross-border deals and international collaborations are opening doors to startups in untapped markets (MAGNiTT, 2023). Platforms like equity crowdfunding are further democratising access, enabling a more diverse pool of entrepreneurs and investors to enter the ecosystem (Laporte & Lester, 2023). </p>

<p> Hedge Funds, with their reputation for sophisticated trading strategies, remain a beacon for analytical minds. Yet, their future will be shaped not just by market acumen but by technological adaptation. Artificial intelligence and machine learning are redefining how hedge funds operate. Predictive analytics, algorithmic trading, and enhanced data modelling are enabling funds to identify and act on market inefficiencies faster than ever (Alternative Investment Management Association, 2023). This technological edge is crucial for professionals aiming to navigate an increasingly complex financial landscape (Pensions & Investments, 2024). </p>

<p> Regulatory scrutiny is another defining feature of the hedge fund space. Investors now demand transparency and accountability, pushing funds to adopt robust compliance measures (KPMG, 2023). Additionally, integrating ESG principles into investment strategies is no longer optional—it’s a key driver of long-term value creation (Morgan Stanley, 2023). </p>

<p> Interestingly, the lines between PE, VC, and HF are becoming less distinct. PE firms are venturing into early-stage investments traditionally dominated by VC, while hedge funds are adopting private market strategies. This convergence offers aspiring professionals the chance to work in hybrid roles that combine the best of these worlds, fostering innovation and adaptability. </p>

<p> For students eyeing their first “golden exit,” understanding these trends is important. Whether you envision yourself driving operational change in a PE firm, scouting the next tech unicorn in VC, or crafting data-driven strategies in a hedge fund, the future of these sectors will shape your career choices. </p>

<p> Adaptability, technological proficiency, and a keen understanding of sustainability will be the cornerstones of success. As these sectors evolve, so too must the professionals who drive them. The golden exits of tomorrow will reward those who can think beyond traditional boundaries, blending innovation with strategic acumen to redefine what’s possible in finance. </p>

<p>References:</p>

<p>Bain & Company. (2024). Private equity outlook: The liquidity imperative. Retrieved from https://www.bain.com/insights/private-equity-outlook-liquidity-imperative-global-private-equity-report-2024</p>

<p>Morgan Stanley. (2021). Secondaries in private equity: Opportunities in volatile markets. Retrieved from https://www.morganstanley.com/ideas/private-equity-secondaries-volatile-markets </p>

<p>Accenture. (2021). Investing for impact: ESG in private equity. Retrieved from https://www.accenture.com/us-en/insights/strategy/investing-impact-esg-private-equity </p>

<p>Deloitte. (2024). AI and private equity portfolio management. Retrieved from https://www2.deloitte.com/us/en/insights/industry/financial-services/financial-services-industry-predictions/2024/private-markets-innovation-leveraging-ai-for-portfolio-management.html </p>

<p>Pensions & Investments. (2024). Venture capital deal value in 2023 lowest since 2019; fundraising hits 8-year low. Retrieved from https://www.pionline.com/venture-capital/venture-capital-deal-value-2023-lowest-2019-fundraising-hits-8-year-low </p>

<p>PitchDrive. (2024). Understanding exit strategies for startups: Types, timing, and key considerations. Retrieved from https://www.pitchdrive.com/academy/types-of-exit-strategies-for-startups </p>

<p>a16z. (2021). IPOs and beyond: A guide to exit options for companies. Retrieved from https://a16z.com/ipos-and-beyond-a-guide-to-exit-options-for-companies/ </p>

<p>MAGNiTT. (2023). Mapping the trend of cross-border venture capital investments in MEAPT. Retrieved from https://magnitt.com/research/cross-border-venture-capital-investments-meapt-50873 </p>

<p>Laporte, D., & Lester, R. (2023). U.S. equity crowdfunding: Real effects of financing small entrepreneurs. Retrieved from https://www.paris-december.eu/sites/default/files//papers/2023/Laporte_2023.pdf </p>

<p>Alternative Investment Management Association. (2023). Getting in pole position: How hedge funds are leveraging Gen AI. Retrieved from https://www.aima.org/asset/A4F9BC40-8C32-42E6-87F52BD89F6E1A82/ </p>

<p>Pensions & Investments. (2024, August 6). How large hedge funds AQR, Balyasny, Man Group are using AI. Retrieved from https://www.pionline.com/alternatives/how-large-hedge-funds-aqr-balyasny-man-group-are-using-ai </p>

<p>KPMG. (2023). Transparency and reporting: 2023 regulatory challenges. Retrieved from https://kpmg.com/us/en/articles/2022/ten-key-regulatory-challenges-2023-transparency-reporting.html</p>
      </>
    ),
  },
  {
    id: 8,
    title: "The Green Energy Revolution: Investing in a Sustainable Future ",
    date: "December 1st 2024",
    author: "Tiwaysyya Santhra Segaran",
    excerpt: "The world is at a critical point. With climate change, rising energy demands, and dwindling fossil fuel supplies...",
    thumbnail: "img/articles/clean energy.jpg",
    fullContent: (
      <>


<p> The world is at a critical point. With climate change, rising energy demands, and dwindling fossil fuel supplies, there has never been a greater need to transform our energy systems. The green energy revolution is a clean energy transition driven by renewable technologies, sustainable practices, and bold investments. Though frequently dismissed as an environmental necessity, this change provides a way to a more sustainable and economically prosperous future. </p>

<p> We have been dependent on burning fossil fuels for decades but at a steep cost—rising greenhouse gas emissions, polluted environments, and volatile energy markets. Renewables, clean and abundant, offer a viable solution to this crisis. In fact, solar and wind power are now the cheapest forms of electricity generation in many regions (Limb, 2024). The International Energy Agency (IEA) projects renewables to supply nearly half the world’s electricity by 2030, with solar accounting for 80% of global renewable capacity growth this decade (IEA, 2023). </p>

<p> Countries are accelerating their transition to renewable energy sources. Germany’s Energiewende policy, China’s dominance in solar panel manufacturing, and the U.S.'s Inflation Reduction Act are some key government initiatives propelling this movement. Global economic dynamics are also changing because of this transition, as countries rich in essential minerals—such as lithium and cobalt—are gaining geopolitical importance (Paris & De Atacama, 2022). </p>

<p> Corporate activity in the green energy sector is accelerating, as exemplified by moves like Shell’s acquisition of renewable natural gas producer Nature Energy, highlighting growing confidence in the economic viability of clean energy (Summerfield, 2023). This reflects the vast opportunities for investors. Established projects including solar and wind farms offer stable returns, while emerging technologies like hydrogen fuel cells, advanced battery storage, and carbon capture present high-growth potential. With the IEA estimating that annual investment in clean energy must triple by 2030 to meet global climate targets, this sector presents a staggering opportunity for forward-thinking investors (IEA, 2023). </p>

<p> That said, the clean energy transition faces many challenges. COP28’s first global stocktake revealed that current efforts fall short of meeting the Paris Agreement’s 2050 net zero targets (UNFCCC, 2023). Solar and wind energy production is dependent on the weather and hence, requires reliable storage solutions. Additionally, modernisation of grid infrastructure is required to support decentralised renewable sources. Yet, innovation is tackling these issues head-on. This sector is rapidly transforming with advancements in battery technology, AI-driven energy management, and carbon capture (Cassaignau et al., 2024). </p>

<p> The success of this transition heavily relies on collaboration. Governments must provide incentives for the use of renewable energy, businesses need to invest in sustainability, and individuals must embrace renewable technologies like rooftop solar and bio-based alternatives (Jackson-Moore et al., 2024). International cooperation is also essential to lower financing costs and unlock renewable potential in places like Africa and Southeast Asia. </p>

<p> The green energy revolution is more than a climate solution—it is an investment in a sustainable future. By backing renewable technologies and supporting innovation, we can ensure economic growth, energy security, and a greener planet for generations to come. The time to act is now. </p>

<p>References:</p>

<p>Cassaignau, A., Fennell, A., & Leathley, A. (2024, October 14). Exploiting biotechnology to meet sustainable ends. Carpmaels & Ransford; Carpmaels & Ransford. https://www.carpmaels.com/exploiting-biotechnology-to-meet-sustainable-ends/ </p>

<p>International Energy Agency. (2023). World Energy Outlook 2023. International Energy Agency. https://iea.blob.core.windows.net/assets/86ede39e-4436-42d7-ba2a-edf61467e070/WorldEnergyOutlook2023.pdf </p>

<p>Jackson-Moore, W., de Lange, R., Cai, A., Kinghorn, R., Kuo, I., O’Connell, K., & Randeria, Z. (2024). The CEO’s sustainability checklist: Reinventing your business for a sustainable future starts with four mission-critical actions . Strategy+Business; pwc. https://strategybusiness.pwc.com/ceo-sustainability-checklist/p/1?WT.mc_id=GMO-BRN-TI-FY25-PRCH-SBDI16-T4-CI-XLOS-PUB-GMOSBDI00025-EN-IPWCWP-T4 </p>

<p>Limb, L. (2024, October 9). Renewables set to meet half of globe’s power demands by 2030. Euronews; Euronews.com. https://www.euronews.com/green/2024/10/09/renewables-revolution-the-good-and-the-bad-news-from-the-ieas-latest-wind-and-solar-stockt </p>

<p>Paris , K., & De Atacama , S. P. (2022, March 26). The transition to clean energy will mint new commodity superpowers. The Economist; The Economist . https://www.economist.com/finance-and-economics/2022/03/26/the-transition-to-clean-energy-will-mint-new-commodity-superpowers </p>

<p>Summerfield, R. (2023). Shell closes $2bn acquisition of Danish firm Nature Energy Biogas. Financier Worldwide. https://www.financierworldwide.com/shell-agrees-2bn-nature-energy-deal </p>

<p>The Economist. (2024, September). Clean energy’s next trillion-dollar business. The Economist; The Economist. https://www.economist.com/business/2024/09/01/clean-energys-next-trillion-dollar-business </p>

<p>UNFCCC. (2023, December 13). COP28 Agreement Signals “Beginning of the End” of the Fossil Fuel Era. United Nations Climate Change . https://unfccc.int/news/cop28-agreement-signals-beginning-of-the-end-of-the-fossil-fuel-era </p>

<p>UNFCCC. (2024). The Paris Agreement. United Nations Climate Change. https://unfccc.int/process-and-meetings/the-paris-agreement</p>
      </>
    ),
  },
  {
    id: 9,
    title: "The Role of Big Data in Investment Strategies ",
    date: "Janurary 19th 2025",
    author: "Arun Nandakumar",
    excerpt: " What is big data? It is the immense volume and high-velocity heterogeneous data that organisations capture and process in attempts to generate value. The field spans industries...",
    thumbnail: "img/articles/impact investing.jpg",
    fullContent: (
      <>

<p> What is big data? It is the immense volume and high-velocity heterogeneous data that organisations capture and process in attempts to generate value. The field spans industries, within which decisions and insights range from healthcare to finance. It is foundational to enhanced risk management, fraud detection, customer behaviour comprehension, and, of course, algorithmic trading strategy development in finance. It has become essential for financial organisations to implement big data solutions to make informed decisions, optimise operations, and maintain a competitive edge in this rapidly evolving market. </p>

<p> Traditional decision-making processes in the investment management industry are changing. Natural language processing and machine learning can be used for real-time market analysis, sentiment analysis, and identifying trading opportunities. </p>

<p><u>Understanding big data in finance </u></p>

<p> Big data is a collection of immense volumes of information—both structured and unstructured—maintaining great velocity and variety. It ranges from more conventional sources, such as financial statements and market trends, to new sources like social media, news feeds, or even alternative data such as satellite imagery. This set of information revolutionised the financial realm with more sophisticated applications, like algorithmic trading, where big and intricate models execute trades faster. Big data fuels predictive analysis, which enables firms to predict market movements and risk assessment more accurately. In 2024, Goldman Sachs leveraged alternative data sources, such as customer sentiment and credit card transactions, to predict retail trends during the holiday season, enabling more accurate investment strategies (Finimize, 2024). Sentiment analysis also uses natural language processing to determine market sentiment from different text sources, thereby offering precious insights into investor behaviour and possible market shifts. </p>

<p><u>Big data and investment strategies </u></p>

<p> Investment strategies have changed. Companies that once relied on reports and market data for analysis have now inducted alternative data into their strategies—big data. This gives firms a competitive edge through market trends and consumer behaviour. As of 2022, about 65% of hedge funds were using big data analytics to inform their trading strategies (Lowenstein Sandler LLP, 2022). In machine learning algorithms, large data are processed to identify patterns for the prediction of market movement with higher accuracy. Algorithms analyse structured data like stock prices, unstructured data such as social media sentiment, and high-frequency trading data to uncover insights that are often missed by human analysis. By recognising correlations, predicting trends, and continuously learning from new information, these models inform strategies like momentum trading and arbitrage, enabling faster, more informed decision-making in dynamic markets. Consequently, an investment strategy has emerged that becomes more adaptive with the use of algorithmic trading, reaching more than 60 percent of equity trading volume in US markets. Investment managers leverage big data analytics to optimise portfolio management, improve risk assessment, and make timely market decisions to capitalise on opportunities. </p>

<p><u> Challenges and Limitations </u></p>

<p> While the prospects are great, big data does not come without its set of challenges. Data quality remains an issue: studies have shown that more than 30% of datasets (FirstLogic Solutions, 2023) used by financial firms contain errors or inconsistencies that can lead to flawed analyses. The volume requires robust infrastructure and expertise; big data system implementations cost large firms millions each year, which is beyond the reach of smaller firms. The use of alternative data is further complicated by the fact that regulations like the GDPR reduce access to or usage of valuable information. Moreover, excessive dependence on algorithms increases market risks, as was recently evidenced by the 2010 Flash Crash, when automated trading systems caused a sudden plunge in the market (CFI, 2010). These challenges emphasise careful management and a balanced approach in leveraging big data in investment. </p> 

<p><u> Future outlook </u></p>

<p> The future of big data in investment strategies is a deep integration with emerging technologies: AI and machine learning will continue to evolve, enabling the processing of more complex data in real time. Quantum computing may increase the speed and accuracy of predictive models exponentially, as some predict it will disrupt the ways of data processing within the next decade. Moreover, big data is increasingly being integrated with ESG metrics, with over 70% of institutional investors (Seneca ESG, 2023) now considering ESG factors critical to decision-making. As these sources continue to grow in number, the ability to address ethical concerns and achieve compliance with evolving regulations must simultaneously increase. Big data is continually evolving and redefining the investment landscape toward better-informed, adaptive, and sustainable strategies. </p>

<p><u>References </u></p> 

<p> Finimize. (n.d.). Goldman Sachs taps alternative data to predict retail trends. Retrieved from https://finimize.com/content/goldman-sachs-taps-alternative-data-to-predict-retail-trends </p> 

<p> Lowenstein Sandler LLP. (2022). 2022 Alternative Data Report. Retrieved from https://www.lowenstein.com/media/11867/2022-alternative-data-report-final.pdf </p>

<p> Firstlogic Solutions. (n.d.). Data inaccuracy is risky in financial services. Retrieved from https://firstlogic.com/insights/data-inaccuracy-is-risky-in-financial-services </p>

<p> Corporate Finance Institute. (n.d.). 2010 Flash Crash. Retrieved from https://corporatefinanceinstitute.com/resources/equities/2010-flash-crash </p>

<p> Seneca ESG. (n.d.). Data privacy regulations in an ESG context. Retrieved from https://senecaesg.com/insights/data-privacy-regulations-in-an-esg-context </p>
      </>
    ),
  },
  {
    id: 10,
    title: "Impact Investing: Balancing Profits with Purpose ",
    date: "Janurary 19th 2025",
    author: "Isabella Mariani",
    excerpt: "Impact investing involves investing in companies, projects, or funds that generate positive social or environmental outcomes alongside financial returns, which is considered socially desirable but is often sacrificed in the face of other opportunities ...",
    thumbnail: "img/articles/impact investing2.jpg",
    fullContent: (
      <>

<p> Impact investing involves investing in companies, projects, or funds that generate positive social or environmental outcomes alongside financial returns, which is considered socially desirable but is often sacrificed in the face of other opportunities with higher returns (Bugg-Levine & Emerson, 2011). </p>

<p> One approach is to obligate companies to address the issue: in the EU, the Corporate Sustainability Due Diligence Directive requires managing human rights and environmental risks throughout supply chains, adopting transition plans aligned with the Paris Agreement, conducting stakeholder engagements, and providing remediation measures where necessary (European Commission, 2022). </p>

<p> The EU emphasises civil liability for noncompliance, with penalties based on global turnover, and now includes new guidelines for funds that use ESG-related terms in their names to avoid greenwashing risks  (where companies or funds make misleading claims about their sustainability practices) , where preliminary surveys have shown a significant increase in compliance costs that would be passed on to end clients (ESMA, 2024). The net effects of this are unclear: these funds could be rewarded by activist investors who seek transparency, potentially attracting more clients who would be willing to pay the premium for assurance on the sustainability of their investments (Morningstar, 2024). </p>

<p> However, this does increase the costs of investing in ESG funds relative to others, making it fundamentally less attractive for those who are more indifferent to the nature of their investments, undermining the goal of mainstreaming impact investing (KPMG, 2023). </p>

<p> In contrast, the United States takes a less interventionist approach, with ESG investing largely driven by market forces rather than strict regulatory mandates that may distort prices. However, divisive political debates over ESG-related disclosures have caused regulatory uncertainty, with some US states even moving to ban ESG investing practices, with reverberating effects in the private sector, such as BlackRock’s recent decision to pull out of the Net Zero Asset Managers Initiative under pressure from Republican politicians (Financial Times, 2024). </p>

<p> Beyond Western markets, impact investing is growing rapidly. </p>

<p> In India, microfinance institutions and social enterprises have gained significant backing (IFC, 2023), while China is ramping up its green finance efforts, including green bonds to combat air pollution and invest in clean energy (World Bank, 2023). </p>

<p> In Africa, impact investing focuses on financial inclusion, renewable energy, and agriculture, with mobile money platforms increasing access to financial services (McKinsey, 2023). </p> 

<p> In Latin America, impact investing addresses challenges like income inequality, deforestation, and access to education. Countries like Brazil are seeing a rise in investments that target sustainable agriculture and biodiversity conservation (IDB, 2024). However, political instability and regulatory inconsistencies can pose challenges to scaling impact investing in some parts of the region (OECD, 2024). </p>

<p> To strike the right balance between profit and purpose, policymakers and financial institutions must ensure that regulations encourage accountability without stifling innovation or pricing out investors (WEF, 2024). The future of impact investing lies in fostering trust, transparency, and scalability, ensuring that capital flows to projects that deliver measurable positive change while offering competitive returns. </p>

<p> Ultimately, impact investing represents a shift in how society views capital—from a tool of profit-making to a driver of sustainable progress. </p>

<p><u> References </u></p>

<p> Bugg-Levine, A., & Emerson, J. (2011). Impact Investing: Transforming How We Make Money While Making a Difference. Jossey-Bass. </p>

<p> European Commission. (2022). Corporate Sustainability Due Diligence Directive. Brussels. </p>

<p> European Parliament. (2023). Civil Liability in Sustainability Regulations. Strasbourg. </p>

<p> ESMA. (2024). Guidelines on Funds with ESG Terms in Their Names. Paris. </p>

<p> Financial Times. (2024). BlackRock’s latest green climbdown. London. </p>

<p> IFC (International Finance Corporation). (2023). Impact Investing | International Finance Corporation (IFC). Washington, D.C. </p>

<p> KPMG. (2023). Sustainable Finance Trends in Europe. Amsterdam. </p>

<p> McKinsey. (2023). The Future of Financial Inclusion in Africa. Nairobi. </p>

<p> Morningstar. (2024). The Cost of ESG Compliance: A Global Perspective. Chicago. </p>

<p> OECD. (2024). Scaling Impact Investing in Latin America. Paris. </p>

<p> IDB (Inter-American Development Bank). (2024). Sustainability and Impact Investing in Latin America. Washington, D.C. </p>

<p> UN PRI (United Nations Principles for Responsible Investment). (2023). Global Trends in Responsible Investment. New York. </p>

<p> WEF (World Economic Forum). (2024). The Future of Impact Investing: Balancing Profit and Purpose. Geneva. </p>

<p> World Bank. (2023). China’s Green Finance Strategy. Beijing. </p>
      </>
    ),
  },
  {
    id: 11,
    title: "Art Investment: Value Beyond the Canvas ",
    date: "Feburary 2nd 2025",
    author: "Joanna Qiao",
    excerpt: "In November 2024, a peculiar auction took place at Sotheby’s in New York...",
    thumbnail: "img/articles/art.jpg",
    fullContent: (
      <>
<p> In November 2024, a peculiar auction took place at Sotheby’s in New York. Bidding began at $800,000 for a banana affixed to a white wall with silver duct tape. Within minutes, the bid soared past $2 million, then $3 million, $4 million, and finally reached $5.2 million, sold to a Chinese entrepreneur (Cowan, 2024). The viral ‘banana art’ was part of a collection titled Comedian by the Italian visual artist Maurizio Cattelan. This series, first showcased at the Art Basel Miami Beach fair in 2019, originally sold for between $120,000 and $150,000. </p>
<p> Justin Sun, the crypto entrepreneur, outbid six other collectors after a five-minute battle for the piece. He acquired the banana along with a certificate of authenticity, as well as a 14-page installation guide detailing how to replace the banana if it spoils. Sun also gained the right to display the piece anywhere and to include the artist’s signature. In Sun’s own words, this artwork “represents a cultural phenomenon that bridges the world of art, memes, and the cryptocurrency community.” Shortly after the purchase, he ate the banana on stage. </p> 
<p> However, Sun surely wasn’t just paying for the fruit itself. The art market has always been unpredictable, with conceptual pieces often commanding exorbitant prices. This underscores the evolving dynamics of art investment, where value is frequently intertwined with cultural commentary and media influence. Art investment has long been an attractive alternative to traditional assets for investors. Artwork is often considered a tangible asset that retains or increases its value over time, providing investors with a safeguard against inflation. The Deloitte Art & Finance Report in 2019 noted that art “has a stronger positive correlation with the price of gold than with other asset classes,” making it perceived as a value-holding asset class rather than a conventional investment. </p>
<p> Even during economic downturns, certain segments of the art market, such as contemporary art, have demonstrated strong performance, making it a viable alternative when traditional assets underperform (Lawlor, 2024). During the Covid crisis, global art prices performed better than they did prior to the period. Citi revealed that contemporary art prices gained 6.7% during the crisis, outperforming ten major asset classes, including developed-market stocks, developed-market investment-grade bonds, private equity, and real estate. Research by London Business School also found that art delivered a real return (adjusted for inflation) of 2.4% annually over the last 20 years, outperforming bonds (1.5%) and gold (1.1%), though falling short of the 5.2% return of stocks. </p> 
<p> The cost of investing in art is also significantly higher than investing in stocks or bonds. Major auction houses like Christie’s and Sotheby’s often charge additional fees that can exceed 25% of the sale price. However, for many collectors, the intangible value of owning unique pieces outweighs these costs. The joy of curating and owning art—often referred to as an “emotional dividend”—remains a defining feature of art investment, often eclipsing financial returns. </p> 

<p> Returning to the banana story, Sun intended to pay for the artwork using his cryptocurrency, Tron, as Sotheby’s announced that the piece could be purchased with cryptocurrency (Weisberger, 2024) . For crypto entrepreneurs like Sun, the most valuable asset isn’t just the currency itself but the attention and promotion it generates. By purchasing the “banana” and publicly announcing himself as the buyer, Sun capitalised on the publicity, which Sotheby’s was happy to support. Even underbidders, including two crypto entrepreneurs who later revealed their identities, participated in the auction for the publicity it offered. For Sun, the viral attention gained was far more valuable than the $5 million spent. With ownership of the artwork, he could tokenise the banana on his Tron blockchain or create NFTs, potentially generating wealth far beyond the initial investment. </p> 
<p> The art market represents a blending of art, technology, and commerce in today’s world. While offering financial returns, the true value of art investment often lies in its cultural impact, personal enjoyment, and ability to spark meaningful conversations and innovation. From traditional collections to modern digital platforms, art continues to be a versatile and ever-changing asset. </p> 

<p><b> References </b></p>

<p> Cowan J. Why did a banana sell for $150,000? The art world has its reasons. The New York Times. 2024 Nov 21 [cited 2025 Jan 31]; Available from: https://www.nytimes.com/2024/11/21/arts/design/banana-auction-explainer-cattelan.html </p>

<p> Investec. Art as an investment. Investec Focus [Internet]. 2024 [cited 2025 Jan 31]; Available from: https://www.investec.com/en_za/focus/investec-cape-town-art-fair/art-as-an-investment.html </p> 

<p> Weisberger M. That viral banana duct-taped to a wall? It just sold for $6.2 million. Smithsonian Magazine. 2024 Jan 26 [cited 2025 Jan 31]; Available from: https://www.smithsonianmag.com/smart-news/that-viral-banana-duct-taped-to-a-wall-it-just-sold-for-6-2-million-180985523/ </p>

      </>
    ),
  },
  {
    id: 12,
    title: "The Midas Touch; can gold only glitter?  ",
    date: "Feburary 2nd 2025",
    author: "Kaavya Iyer",
    excerpt: "Gold has historically held a strong significance in many markets—its birthplace as a currency began around 600 BC under King Croesus of Lydia, now modern-day Turkey...",
    thumbnail: "img/articles/gold glitters.jpg",
    fullContent: (
      <>
<p> Gold has historically held a strong significance in many markets—its birthplace as a currency began around 600 BC under King Croesus of Lydia, now modern-day Turkey (McKay & Peters, 2017). Its above-ground stock has since developed into jewellery, private investment, and technology, but why are we so obsessed with this shiny yellow metal? Firstly, as a noble metal, gold resists corrosion and oxidisation, beating its ‘noble competitors’ in resistance to degradation—making it the perfect metal for a measure of currency (McKay & Peters, 2017). Furthermore, gold symbolises wealth, power, and beauty across cultures, which has built centuries of universal appeal through a historical association with wealth preservation and financial security. Its physical and symbolic appeal has meant that gold is central to many economies, but exactly how central and to whom? </p>

<p> Whilst its value sees short-term volatility in price, when looking at the big picture, global gold spot prices have consistently risen—with 1833 gold prices at $0.66 per gram contrasting with 2025 data so far of around $86 per gram (World Gold Council, 2025). Like any commodity, the price of gold is determined by the interaction between supply and demand. In times of political and financial uncertainty, investors turn to gold as a diversification tool, which spikes demand, and the converse is true when markets take a bullish turn as investors seek greater exploits on their investments, resulting in gold’s inverse correlation to market prosperity (Rathi et al., 2021). This raises the question as to why investors treat gold as a safe haven investment. The answer lies in the metal’s history with currency and trade: even though the gold standard was well and truly dropped in the 70s, the intertwined relationship between gold and modern fiat currency means that you won’t be able to swap your £10 note for a block of gold at the Bank of England, but central banks everywhere will use gold reserves to maintain economic stability (Bank of England, 2023).  </p>

<p> However, this isn’t the full story. </p> 

<p> Despite its significance as an investment, looking at global gold trends requires some perspective. In 2022, 46% of over-ground gold stocks were held in jewellery, compared to only 22% in private investments, and this isn’t a new pattern (World Gold Council, 2025). China, India, Turkey, and the US are the largest buyers of gold respectively, and this is largely determined by cultural attitudes towards gold jewellery. This has resulted in local deviations, most notably in India and China (World Gold Council, 2025). Regional prices in the largest gold markets of the world often differ from international prices, reflecting the increased significance of the metal in these geographies as illustrated in the time series below. </p>
<img src="img/articles/discounts.jpg" alt="Gold price trends graph" className="mt-4 w-full max-w-3xl mx-auto" />
<p> Overall, the time series illustrates that both China and India have seen sizeable and frequent discounts as well as premiums from global gold prices over the last 20 years, and so we can’t apply general global trends as easily to these two regions. The data suggests that, compared with China, India displays more acute and frequent deviations from global prices. This perhaps reflects the country’s more volatile market dynamics and taxation patterns – most clearly in 2013 where India saw an extreme premium spike coinciding with the government’s increase in restrictions on gold imports. This could also be an indication that China has a greater focus, compared to India, with regards to holding gold reserves and treating it as an investment asset. </p>

<p> Finally, the Midas touch is starting to threaten the power of the American dollar. Over the last year, there has been a steady rise in gold prices and a noticeable detachment of gold prices from interest rates, inflation, and importantly, the dollar. This can be attributed to geopolitical and economic instability but, more importantly, to consistent purchases of gold made by foreign central banks. This implies efforts are being made to diversify reserves away from the US dollar, suggesting countries are losing confidence in American trade and the US’ multilateral cooperation (El-Erian, 2024). As MAGA-nomics takes the spotlight on the global trade stage, it will be interesting to see if the Midas touch continues to indicate a golden shift away from the dollar. </p> 
<p><b> References </b></p>

<p> Erb, Claude B., and Campbell R. Harvey. “The Golden Dilemma.” Financial Analysts Journal, vol. 69, no. 4, 2013, pp. 10–42. JSTOR, http://www.jstor.org/stable/23469534. Accessed 31 Jan. 2025. </p>

<p> World Gold Council. (2025, January 29). Gold Price Historical Data | Gold Price History | World Gold Council. World Gold Council; World Gold Council. https://www.gold.org/goldhub/data/gold-prices </p>

<p> ‌McKay, D. R., & Peters, D. A. (2017). The Midas Touch: Gold and Its Role in the Global Economy. Plastic Surgery, 25(1), 61–63. https://doi.org/10.1177/2292550317696049 </p>

<p> Rathi, S., Mohapatra, S., & Sahay, A. (2021). Central bank gold reserves and sovereign credit risk. SSRN Electronic Journal. https://doi.org/10.2139/ssrn.3808521 </p>

<p> Gold. (n.d.). Www.bankofengland.co.uk. https://www.bankofengland.co.uk/gold </p>

<p> El-Erian, M. (2024, October 21). Why the west should be paying more attention to the gold price rise. @FinancialTimes; Financial Times. https://www.ft.com/content/b5fb1e6b-bb8d-4ab5-9c92-f1f6fc40a54b </p>

<p> Gold Price All Time | Per Gram | US Dollars | Chard. (2025). Chards.co.uk. https://www.chards.co.uk/gold-price/gram/usd/all-time </p>

<p> Council, W. G. (2025, January 27). Local gold price premium/discount. World Gold Council. https://www.gold.org/goldhub/data/gold-premium </p>

<p> China’s Gold Market | Gold Demand in China. (n.d.). World Gold Council. https://www.gold.org/about-gold/gold-demand/geographical-diversity/china </p>


      </>
    ),
  },
  {
    id: 13,
    title: "Behind the Scenes of an IPO: Key Steps and Players",
    date: "Feburary 17th 2025",
    author: "Mohamed Jama",
    excerpt: "For many companies, an initial public offering (IPO) is a pivotal moment that signals a transition from private to public ownership, offering access to...",
    thumbnail: "img/articles/ipo.jpg",
    fullContent: (
      <>
<p> For many companies, an initial public offering (IPO) is a pivotal moment that signals a transition from private to public ownership, offering access to capital markets and broader visibility. However, the process is intricate, involving multiple stakeholders and extensive regulatory oversight. The decision to go public is not taken lightly, as it requires a thorough evaluation of the company’s financial health, future growth prospects, and willingness to accept the scrutiny that comes with being a publicly traded entity. Companies pursue an IPO for various reasons—raising capital for expansion, increasing brand credibility, providing liquidity for early investors, or leveraging publicly traded shares for mergers and acquisitions. However, the benefits come with trade-offs, including the obligation to meet quarterly earnings expectations, disclose financials transparently, and face potential market volatility (Perivan, 2021). </p>
<p> At the heart of the IPO process are investment banks, which serve as underwriters, managing the transaction, pricing the shares, and facilitating investor demand. These banks assess the company’s valuation using a combination of financial analysis, industry comparisons, and market sentiment. The lead underwriter, often referred to as the bookrunner, has a particularly crucial role, as their reputation and distribution network can significantly impact the IPO’s success. They work closely with the company’s management to craft a compelling narrative that will appeal to institutional investors such as hedge funds, pension funds, and asset managers, who collectively determine early market interest (Cooley LLP, 2021). </p>
<p> With underwriters in place, the company embarks on the due diligence phase, where financial and legal teams scrutinise every aspect of the business to ensure compliance with regulatory standards. In the UK, companies seeking to go public must submit a prospectus to the Financial Conduct Authority (FCA) for approval. This document provides a comprehensive overview of the company’s business model, financial health, risk factors, and intended use of IPO proceeds. The FCA assesses the prospectus to ensure it meets disclosure requirements and regulatory standards, aiming to protect investors and maintain market integrity. Once approved, the company must also comply with the listing rules set by the London Stock Exchange (LSE) or the Alternative Investment Market (AIM), depending on where it chooses to list. These regulations ensure transparency and provide investors with the information necessary to make informed decisions (KPMG LLP, 2023). Regulators play a key role in ensuring that the company’s disclosures are accurate and comprehensive, protecting both institutional and retail investors from potential misinformation. </p>
<p> Once regulatory approval is secured, the company and its underwriters embark on a roadshow—a series of presentations to potential investors designed to generate interest in the offering. These roadshows serve as a critical phase in determining investor appetite, as the demand levels dictate the final IPO pricing. Investment banks use valuation models and investor feedback to set an optimal share price that balances raising capital while ensuring strong aftermarket performance. If demand is high, the company may raise the share price or issue additional shares, whereas weak interest may lead to price reductions or even a delayed offering (Tipalti, n.d.). </p> 
<p> IPO day marks the official debut of the company’s shares on a public exchange such as the NYSE, NASDAQ, or LSE. Market anticipation often drives significant volatility in early trading, and underwriters engage in a process called stabilisation to mitigate extreme fluctuations. A successful IPO is often characterised by a well-received debut, sometimes featuring a stock price "pop", where shares trade significantly above the initial offering price. However, if investor sentiment is weak, an underwhelming launch can damage confidence and negatively impact the company’s future capital-raising prospects (British Business Bank, n.d.). </p>
<p> The transition to a public company does not end on IPO day. Companies must now adhere to stringent reporting standards, engage with investors, and navigate the expectations of analysts who will scrutinise financial performance. One of the immediate challenges is the lock-up period, typically lasting 90 to 180 days, which prevents insiders from selling their shares to avoid market destabilisation. Additionally, management teams must focus on sustaining shareholder confidence by delivering on growth promises and mitigating market risks, as failing to do so can attract activist investors pushing for strategic changes (Perivan, 2021). </p>
<p> The IPO landscape is shaped by a network of players, each with a distinct role in determining an offering’s success. Investment banks manage the financial structuring and marketing of the offering, while regulators ensure compliance and investor protection. Legal and accounting firms oversee due diligence, ensuring financial statements and risk disclosures are in order. Institutional investors, such as hedge funds and asset managers, assess the company’s potential and drive initial market demand, while retail investors contribute to post-IPO trading activity. Each stakeholder is essential in navigating the complexities of the public market transition (Cooley LLP, 2021). </p>
<p> While IPOs can serve as powerful catalysts for growth, they come with inherent risks that must be carefully managed. Companies must balance raising capital with maintaining investor trust and regulatory compliance. Investors, on the other hand, must weigh the opportunity to gain early exposure to a promising business against the possibility of volatility and underperformance. Understanding the intricacies behind an IPO provides a deeper appreciation of the forces that drive market activity and determine the success or failure of newly listed companies (KPMG LLP, 2023). </p>
<p><b> References </b></p>
<p> British Business Bank. (n.d.). What is an Initial public offering (IPO)? Retrieved from https://www.british-business-bank.co.uk/business-guidance/guidance-articles/finance/ipo </p>
<p> Cooley LLP. (2021). IPOs in the UK: What's Involved? Retrieved from https://www.cooleygo.com/ipos-in-the-uk-whats-involved/ </p>
<p> KPMG LLP. (2023). Preparing for UK IPO success. Retrieved from https://assets.kpmg.com/content/dam/kpmg/uk/pdf/2022/10/preparing-for-ipo-success-ipo-readiness-brochure.pdf </p>
<p> Perivan. (2021). IPO Process - A Guide to the Steps in Initial Public Offerings. Retrieved from https://www.perivan.com/resources/blog/ipo-process-a-guide-to-the-steps-in-initial-public-offerings/ </p>
<p> Tipalti. (n.d.). How to Go Public (IPO): Step-by-Step Instructions. Retrieved from https://tipalti.com/en-uk/go-ipo/how-to-go-public/ </p>
      </>
    ),
  },
  {
    id: 14,
    title: "The Anatomy of Financial Fraud in Modern Markets  ",
    date: "Feburary 17th 2025",
    author: "Arun Nandakumar",
    excerpt: "Finance is a field not only built on numbers but also on psychology and perception. Fraudsters can manipulate this perception by creating and maintaining illusions that can deceive investors...",
    thumbnail: "img/articles/fraud in finance.jpg",
    fullContent: (
      <>
<p> Finance is a field not only built on numbers but also on psychology and perception. Fraudsters can manipulate this perception by creating and maintaining illusions that can deceive investors, regulators, and even auditors. From Ponzi schemes to insider trading and market manipulation, financial fraud has evolved with the markets, adapting to regulatory loopholes and technological advances. </p>
<p> Financial fraud relies on three key elements: trust, complexity, and psychological manipulation. Bernie Madoff’s Ponzi scheme is trust-based fraud, where exclusivity and consistent but modest returns reinforced investor confidence, even as the fund lacked real investments (Lewis, 2016). Complexity is another shield; Enron’s off-balance-sheet accounting obscured debt while marking projected future earnings as realised profits, making it difficult for analysts to unravel the deception (McLean & Elkind, 2003). Psychological biases, especially the ‘fear of missing out,’ keep investors from questioning irregularities, as seen in bubbles and high-yield investment scams (Shiller, 2015). </p>
<p> Fraudsters structure their deception around a compelling promise, a seemingly logical mechanism, and a well-maintained facade. The promise—whether steady returns (Madoff), superior market insight (Galleon Group), or cutting-edge technology (Wirecard)—attracts investors. The mechanism legitimises the fraud, using fake trades, falsified accounts, or privileged information. The facade is maintained through the media, aggressive legal tactics, or selective disclosure. </p> 
<p><b> Case Studies: How the Illusion Collapsed </b></p>
<img src="img/articles/bernie.jpg" alt="Gold price trends graph" className="mt-4 w-full max-w-3xl mx-auto" />
<p> Bernie Madoff is infamous for one of the greatest Ponzi schemes in history. He not only deceived investors but made them part of their own deception. Most Ponzi schemes promise sky-high returns. Madoff’s strategy was to deliver a consistent, modest profit, at around 10-12% annually. This consistency, in a market known for volatility, should have been a red flag, but investors didn’t question it. Why? They wanted to believe. </p>
<p> Madoff also played the game of exclusivity. He turned away investors, making his fund appear even more desirable. However, behind the scenes, there was no real investment—just an elaborate shuffling of money from new investors to old ones. The 2008 financial crisis, however, triggered massive redemption requests that were unfulfillable, bringing his empire crashing down. </p>
<img src="img/articles/second fraud guy.jpg" alt="Gold price trends graph" className="mt-4 w-full max-w-3xl mx-auto" />
<p> Raj Rajaratnam ran Galleon Group as if it were an information cartel. His hedge fund didn’t just make educated bets; it had a direct access into corporate boardrooms of Silicon Valley and Wall Street. Company executives, analysts, and government officials provided him with confidential market-moving information in exchange for substantial payouts. </p>
<p> What made Galleon’s fraud remarkable was how deeply embedded insider trading was in the firm’s culture. Employees openly discussed illegal tips, normalising the crime. It took an unprecedented move—wiretap surveillance—to finally bring Rajaratnam down, setting a new precedent in financial crime investigations. </p>
<img src="img/articles/fraud in finance.jpg" alt="Gold price trends graph" className="mt-4 w-full max-w-3xl mx-auto" />
<p> Enron made failure look like success. The company’s executives used mark-to-market accounting to record hypothetical future profits as if they had already been earned. When projects failed, the losses were buried in off-balance-sheet entities. On paper, Enron was thriving; in reality, it was a house of cards. </p>
<p> The fraud went undetected for years because Enron’s leadership cultivated a culture of intimidation. Employees who questioned financial practices were silenced, and executives aggressively attacked critics. The scandal eventually unravelled when whistleblowers came forward, which led to one of the largest corporate bankruptcies in history. </p>
<img src="img/articles/wirecard.jpg" alt="Gold price trends graph" className="mt-4 w-full max-w-3xl mx-auto" />

<p> Wirecard’s fraud was digital-age deception at its finest. Unlike traditional financial scams, which relied on outdated accounting tricks, Wirecard exploited the complexity of fintech and regulatory blind spots. They fabricated billions of dollars in revenue from overseas operations and convinced investors that it was the next global payments giant. </p>

<p> What kept Wirecard’s fraud afloat for so long was its aggressive legal response to critics. Journalists and analysts who raised concerns were met with lawsuits and corporate smear campaigns. Even when auditors raised questions, the company used forged documents and a network of shell companies to maintain the illusion. In the end, it took a missing €1.9 billion from Wirecard’s accounts to expose the fraud. </p>

<p> Regulatory failures allow fraud to thrive. Weak enforcement, as seen with delayed scrutiny of Madoff and Wirecard, enables prolonged deception (SEC, 2009). Auditors, meant to act as gatekeepers, have repeatedly overlooked red flags, as demonstrated in Enron and Wirecard (McLean & Elkind, 2003; Financial Times, 2020). Emerging technologies present new challenges; cryptocurrencies and decentralised finance provide fraudsters with anonymity, making detection harder (Zohar, 2022). As financial innovation outpaces regulation, fraudsters continue to exploit gaps in oversight. </p>

<p> Financial fraud is an evolving game. Despite regulatory reforms, the fundamental tactics remain the same: manipulate trust, remove transparency, and control perception. As markets become more complex, the only safeguard is vigilance—both by regulators and investors—because if something seems too good to be true, it probably is. </p>
<p><b> References </b></p>

<p> Financial Times. Wirecard: The timeline of a scandal. 2020. Available from: https://www.ft.com </p>

<p> Henning PJ. The Galleon case and the future of insider trading enforcement. NYU Journal of Law & Business. 2012;8(1):1-22. </p>

<p> Lewis M. The undoing project: A friendship that changed our minds. Norton & Co; 2016. </p>

<p> McLean B, Elkind P. The smartest guys in the room: The amazing rise and scandalous fall of Enron. Penguin; 2003. </p>

<p> SEC. Investigation of failure of the SEC to uncover Bernard Madoff’s Ponzi scheme. 2009. Available from: https://www.sec.gov </p>

<p> Shiller RJ. Irrational exuberance. Princeton University Press; 2015. </p>

<p> Zohar A. Bitcoin: under the hood. Communications of the ACM. 2022;65(4):28-36. </p>
 
      </>
    ),
  },
  {
    id: 15,
    title: "How I Landed an Internship at Goldman Saches - without experience or referrals",
    date: "March 3rd 2025",
    author: "Daniel Tompkins",
    excerpt: "Struggling to land a finance job or internship? Endless applications, cover letters, and rejections with no feedback? If this sounds familiar, you’re not alone...",
    thumbnail: "img/articles/goldman.jpg",
    fullContent: (
      <>
      <p> Struggling to land a finance job or internship? Endless applications, cover letters, and rejections with no feedback? If this sounds familiar, you’re not alone. My name is Daniel Tompkins, a final-year MSci Geophysics student and incoming Goldman Sachs summer analyst in Global Markets (FICC and Equities). I had no referrals, no finance experience, and no industry connections. Here’s how I did it. </p>

<p> I’ll break my journey into three stages: getting the interview, preparing for it, and nailing it. While my experience is with Goldman Sachs’ Global Markets division, these tips apply to any high-finance role at any firm. </p>

<p> The hardest part of the application process is getting to the interview stage. In 2024, Goldman Sachs received 121 applications per spot, meaning most candidates are rejected without feedback—I faced hundreds of rejections over two and a half years before landing my role. The key is to apply early and tailor your CV to highlight relevant skills. In an ideal world, you would be applying for roles as soon as they are open; more realistically, applying within the first couple of weeks is fine. I applied to Goldman 2-3 weeks after applications opened. You don’t need extensive finance experience—my CV showcased my programming and data analysis skills, leadership roles, tutoring experience, and involvement in my university’s Investment Society as well as paper trading. For example, when discussing my tutoring experience, I stressed the fact that I was managing relationships with my clients and made clear the fact that I had experience closing new clients and adding them to my portfolio, a skill that is crucial in a markets role. Framing your experiences effectively and applying early are crucial to passing the initial screening. </p>

<p> Interview preparation is a skill that requires practice. Mock interviews with professionals or friends help refine your answers, identify weak spots, and improve delivery. I always perform better after practicing—treat it like mock exams for real ones. Know your CV inside out; before my Goldman Superday, I practiced defending every point for at least 30 seconds. This builds confidence and ensures you’re ready for tough questions. Also, develop genuine opinions about the industry. Avoid recycled answers to questions like “Tell me about a recent market trend.” Stand out by sharing insights you’re passionate about. Resources like Goldman’s Exchanges at Goldman Sachs podcast can provide valuable talking points—I listened to a few episodes before my interviews and found them incredibly helpful.  </p>
<p> You’ve secured an interview—congratulations! Your odds have improved from 1 in 100 to 1 in ~5. The key to success is confidence: in your abilities, your fit for the role, and your willingness to walk away if it’s not right. During my Goldman Superday, I presented myself as someone with interesting experience, curious about the company, not desperate to join. Stay calm if you make a mistake—in my HireVue, I incorrectly stated that increasing supply without demand raises prices, but I corrected myself and moved on. Always come prepared with thoughtful questions. My go-to is: “What makes high performers at the company stand out?” This sparks engaging conversations and gives insight into the company’s culture. Remember, you’re interviewing them as much as they’re interviewing you. </p>

<p> The job search can feel overwhelming, and the market is tough, but don’t lose hope. I’m no different from any of you reading this; I just kept pushing through the rejections. Stay committed to your goal, keep networking, applying, and improving your CV. When the right opportunity comes, everything can change quickly. Good luck! </p>
      </>
    ),
  },  
  {
    id: 16,
    title: "Investing in the Pharmaceutical Industry",
    date: "March 3rd 2025",
    author: "Tiwaysyya Santhrasegaran",
    excerpt: "The COVID-19 pandemic put the pharmaceutical industry under the spotlight, with Big Pharma companies racing to develop vaccines at unprecedented speed. Such is the importance we place on our health...",
    thumbnail: "img/articles/pharma.jpg",
    fullContent: (
      <>
      <p> The COVID-19 pandemic put the pharmaceutical industry under the spotlight, with Big Pharma companies racing to develop vaccines at unprecedented speed. Such is the importance we place on our health, and the reason global pharmaceutical sales increase every year. As of 2022, the medicine market surpassed $1.48 trillion, with growth projected at a 6% CAGR through 2027 to about $1.9 trillion (IQVIA, 2023). </p>
<p> To make investment decisions, understanding the types of companies is critical. Biopharmaceutical companies develop drugs of biological origin and can yield high returns but carry more risk. Big pharma, the world’s largest pharmaceutical companies, have established product pipelines and are more stable investments. Generic drug companies produce ‘biosimilars, cheaper versions of branded medications after patents expire, that carry lower risk than new drugs. Speciality pharmaceuticals focus on rare or chronic diseases. They can yield high revenue with successful drugs, offering high-growth potential for investors willing to take on risk (Levelfields, 2024). </p>
<p> Assessing the financial stability of a company requires evaluating revenue, profit margins, debt levels, and stock prices. Strong financials reflect the capability to invest in new drug candidates and maintain market position. A critical measure of a company’s potential is its drug pipeline: companies relying on a single drug face risks due to uncertainty with FDA/MHRA regulations, patent expirations, and the 10–15-year developmental process (Lo & Field, 2013). A better strategy would be to select companies with multiple drug candidates at different stages of clinical trials. Pharma exchange-traded funds are an option for those looking to mitigate risk with a diversified portfolio of shares of multiple companies (Beattie, 2021). </p>
<p> Investments are increasingly funding advancements in disease understanding and technology, propelling innovation to new levels. AI in drug development is reducing research costs and accelerating the identification of drug candidates (Zhang et al., 2025). Investors favour companies involved in personalised medicine, which now optimises cancer treatment for each patient’s genetic profile (Singh et al., 2024). The first wave of CRISPR-based gene editing therapies with the potential to cure genetic disorders, are entering the market within 5 years (CRISPR Medicine, 2024). Additionally, mRNA vaccine technology, which turned the tide during the COVID pandemic, is now being adapted for other infectious diseases and chronic conditions. </p>
<p> Investing in pharma stocks is tricky because volatility, regulatory decisions, and clinical trial outcomes cause stock prices to skyrocket or plummet. A major risk is patent expirations, with $200 billion in annual revenue of Big Pharma at risk through the end of 2030 as multiple blockbuster drugs lose exclusivity. This patent cliff pressures companies to replenish their pipelines with new products to compensate for competition from biosimilars. A silver lining is that many biosimilars are not interchangeable for their branded counterparts and doctors may hesitate to switch prescriptions for stable patients (Gardner, 2023). </p>
<p> Despite uncertainties, pharmaceutical stocks have shown resilience, often performing well even during recessions due to the constant need for healthcare. Through careful analysis of companies pipelines and awareness of new advancements, investors have the opportunity for significant growth. </p>
<p><b> References </b></p>
<p> Andrew Beattie (2021). Evaluating Pharmaceutical Companies. [online] Investopedia. Available at: https://www.investopedia.com/articles/06/drugmarket.asp. </p>

<p> CRISPR Medicine. (2024). Press Release Service: CRISPR Cas9 Market Opportunity & Clinical Trials Market Outlook to 2029: Focus on Approved CRISPR-Cas9 Therapy - Casgevy (Exagamglogene Autotemcel) Therapy Clinical Insight - ResearchAndMarkets.com - CRISPR Medicine. [online] Available at: https://crisprmedicinenews.com/press-release-service/card/crispr-cas9-market-opportunity-amp-clinical-trials-market-outlook-to-2029-focus-on-approved-crisp/. </p>

<p> Gardner, J. (2023). Big pharma’s looming threat: a patent cliff of ‘tectonic magnitude’. [online] BioPharma Dive. Available at: https://www.biopharmadive.com/news/pharma-patent-cliff-biologic-drugs-humira-keytruda/642660/. </p>

<p> IQVIA (2023). Global Market for Medicines to Rise to $1.9 Trillion by 2027, says Report from IQVIA Institute. [online] www.iqvia.com. Available at: https://www.iqvia.com/newsroom/2023/01/global-market-for-medicines-to-rise-to-19-trillion-by-2027-says-report-from-iqvia-institute. </p>

<p> Levelfields.ai. (2024). LevelFields — Why and How to Invest in Pharma Stocks: A Complete Guide. [online] Available at: https://www.levelfields.ai/news/invest-in-pharma-stocks [Accessed 1 Mar. 2025]. </p>

<p> Lo, B. and Field, M.J. (2013). The Pathway from Idea to Regulatory Approval: Examples for Drug Development. [online] Nih.gov. Available at: https://www.ncbi.nlm.nih.gov/books/NBK22930/. </p>
<p> Singh, D., Dhiman, V.K., Pandey, M., Dhiman, V.K., Sharma, A., Pandey, H., Verma, S.K. and Pandey, R. (2024). Personalized medicine: An alternative for Cancer Treatment. Cancer Treatment and Research Communications, [online] 42, p.100860. doi:https://doi.org/10.1016/j.ctarc.2024.100860. </p>

<p> Yadav, P., Corridon, C. and MBA, M.M. (2025). The Next Frontier: Oncology Biosimilars in 2025 and Beyond. [online] Center for Biosimilars. Available at: https://www.centerforbiosimilars.com/view/the-next-frontier-oncology-biosimilars-in-2025-and-beyond [Accessed 1 Mar. 2025]. </p>

<p> Zhang, K., Yang, X., Wang, Y., Yu, Y., Huang, N., Li, G., Li, X., Wu, J.C. and Yang, S. (2025). Artificial intelligence in drug development. Nature Medicine, [online] pp.1–15. doi:https://doi.org/10.1038/s41591-024-03434-4. </p>

      </>
    ),
  },  
];

