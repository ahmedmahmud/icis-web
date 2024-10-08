import React from "react";

export default function QTCapital() {
  return (
    <div className="mt-16">
      <section className="pt-4 px-3 bg-dark text-light">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="sm:w-2/3 p-md-2 pt-1 pb-10">
              <h2 className="font-bold text-4xl md:text-3xl py-8">
                {" "}
                INTRO TO QUEENS TOWER CAPITAL{" "}
              </h2>
              <p className="text-lg">
              Queen’s Tower Capital 
              is Imperial’s student-run, global multi-asset fund. The fund leverages the technical expertise present in Imperial to generate novel insights, and its alumni network to ensure that practices reflect those at the top investment institutions. 

            Led by the investment officers, the fund’s research analysts will pitch their best investment ideas on a weekly basis (@ Tuesday 6pm, Huxley 311). 
              </p>

              {/* Add button here */}
              <a
                href="https://forms.office.com/pages/responsepage.aspx?id=B3WJK4zudUWDC0-CZ8PTBxxMg2rXPKFFlt_Cr51ibFVURFRPVDNVM1A5NTVVRlcyOEdBTUcyWENLNCQlQCN0PWcu&route=shorturl"
                className="inline-block mt-4 px-6 py-2 bg-blue-800 text-white font-semibold rounded py-5 hover:bg-blue-900"
              >
                Apply here
              </a>

            </div>
            <div className="sm:w-1/3 mb-1">
              <img
                src="img/qtcapital/QT capital Logo MK-II White.svg"
                className="mx-auto"
                alt=""
                width="45%"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 px-3 bg-white text-background">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="sm:w-1/2 p-md-2 pt-1">
              <h2 className="font-bold text-2xl md:text-3xl">
                Investment Philosophy
              </h2>
              <p className="text-lg">
                Our fund seeks to hold long only investments in high quality
                global companies with a medium-term time horizon of 1-3 years
                that will increase in value over time and outperform the S&P500
                through realisation of intrinsic value over a wide range of
                geographies, sectors and market capitalisations within a
                diversified portfolio comprising 100% shares.
              </p>
            </div>
            <div className="sm:w-1/2 p-md-2 pt-1">
              <img
                src="img/qtcapital/balance.svg"
                className="mx-auto"
                alt=""
                width="70%"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 px-3 bg-white text-background">
        <div className="container">
          <div className="p-md-2 pt-1">
            <h2 className="font-bold text-2xl md:text-3xl">Team</h2>
            <div className="text-lg">
              {/* Equity Team */}
              <p className="text-xl py-6">Equity Team</p>
              <p>
                Our equities team consists of sector heads and analysts working
                in tandem to fundamentally value stocks in the following
                sectors:
              </p>
              <ul className="list-disc pl-6">
                <li>Technology, Media and Telecommunications (TMT)</li>
                <li>Healthcare</li>
                <li>Renewables</li>
                <li>Industrials</li>
                <li>Transport</li>
                <li>Consumer & Retail</li>
                <li>Financials</li>
              </ul>
              <p>This comprises of 4 main roles:</p>
              <ol className="list-decimal pl-6 py-4">
                <li>
                  Alumni Advisory Committee
                  <p>
                    This level consists of investment professional currently
                    working in the investment sector. Each term, 2 of the best
                    pitches by our sector teams will have the chance to pitch to
                    this committee for feedback. This committee is also in
                    charge of providing advice on the fund and its portfolio.
                  </p>
                </li>
                <li>
                  Investment Committee
                  <p>
                    This level consists of a few highly experienced students who
                    have the final say on all investment decisions the fund
                    takes.
                  </p>
                </li>
                <li>
                  Sector Heads
                  <p>
                    Sector Heads are responsible for leading their analyst team
                    in conducting fundamental analyses, research of companies
                    and investment pitches in their given sector. Students in
                    this role have good experience in conducting financial
                    analysis of companies and are in charge of mentoring
                    analysts who may be new to the process.
                  </p>
                </li>
                <li>
                  Analysts
                  <p>
                    Analysts are in charge of conducting the investment pitches
                    and analyses of the potential companies they have identified
                    as opportunities for the fund.
                  </p>
                </li>
              </ol>
              <p>
                We will be recruiting for the roles of Sector Heads and
                Analysts.
              </p>
              {/* Systematic Trading and Quantitative Research Team */}
              <p className="font-bold text-2xl pt-5 py-5">
                Systematic Trading and Quantitative Research Team
              </p>
              <p className="font-bold text-lg">Systematic Trading Team</p>
              <p>
                The Systematic Fund seeks to develop and maintain momentum-based
                strategies that are back tested and run virtually using the
                fund’s own back testing code written in Python.
              </p>
              <p>
                The Systematic Fund algorithms run across multiple different
                asset classes and allows for both long and short positions that
                are benchmarked against the S&P 500. The systematic fund has
                analyst teams working on different algorithms including long
                term outperformance algorithms (alpha strategies) and systematic
                beta strategies.
              </p>
              <p>
                This year the systematic research group will also work on
                developing technical analysis tools to provide main fund
                analysts with additional information about relative performances
                of stocks.
              </p>
              <p className="text-lg font-bold pt-4">Quantitative Research Team</p>
              <p>
                The Quantitative Research group aims to provide analysts with
                the opportunity to conduct research and discuss financial market
                microstructure phenomena.
              </p>
              <p className="text-lg pt-6">Potential areas of interest for further study include:</p>
              <ul className="list-disc pl-8 py-2">
                <li>Designing optimal execution algorithms</li>
                <li>Analysing market impact for different types of orders</li>
                <li>Calculating limit order fill probabilities</li>
                <li>Intraday volatility modelling</li>
              </ul>
              <p className='pb-6 pt-5'>We will be recruiting for the roles in both teams.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

