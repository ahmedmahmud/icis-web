import React from "react";

const Home = () => {
  return (
    <div>
      <section className="bg-dark text-light p-5 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Welcome to{" "}
                <span className="text-info">
                  Imperial College Investment Society!
                </span>
              </h1>
              <p className="lead my-4">
                A society with the purpose of increasing our members' exposure
                to the investment industry.
                <br />
                We are Imperial College's fastest growing society, with more
                than 1300 members in our community.
              </p>
              {/*<button type="button" className="btn btn-primary btn-lg"><i className="bi bi-chevron-right"></i> Free membership</button>*/}
              <a
                href="https://www.imperialcollegeunion.org/activities/a-to-z/investment"
                target="_blank"
                className="btn btn-primary btn-lg active"
                role="button"
                aria-pressed="false"
              >
                <i className="bi bi-chevron-right"></i> Free Membership
              </a>
              <div className="row justify-content-start">
                <div className="col-lg-6 py-1">
                  <div className="list-group py-3">
                    <div
                      className="btn-group "
                      role="group"
                      aria-label="Social Media Icons"
                    >
                      <a
                        className="btn btn-primary py-1"
                        style={{ backgroundColor: "#3b5998" }}
                        href="https://www.facebook.com/ic.investmentsociety"
                        target="_blank"
                        role="button"
                        aria-pressed="false"
                      >
                        <i className="bi bi-facebook "></i> Facebook{" "}
                      </a>
                      <a
                        className="btn btn-primary py-1"
                        style={{ backgroundColor: "purple" }}
                        href="https://www.instagram.com/ic.investmentsociety/"
                        target="_blank"
                        role="button"
                        aria-pressed="false"
                      >
                        <i className="bi bi-instagram"> </i> Instagram{" "}
                      </a>
                      <a
                        className="btn btn-primary py-1"
                        style={{ backgroundColor: "rgb(7, 38, 122)" }}
                        href="https://www.linkedin.com/company/ic-investment/about/"
                        target="_blank"
                        role="button"
                        aria-pressed="false"
                      >
                        <i className="bi bi-linkedin"> </i> LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="img-fluid w-25 d-none d-md-block mb-4"
              src="img/bull-w.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="pt-4 p-md-5">
        <div className="container">
          <div className="row text-center g-md-4">
            {" "}
            {/*g is for gutters, not gap. A google image will suffice to explain what the gutter is.*/}
            <div className="col-md d-flex align-items-stretch">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3 className="card-title mb-3">Industry Insights</h3>
                  <p className="card-text">
                    Join us as we host discussions from the leading investment
                    firms, including Goldman Sachs and JP Morgan!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md d-flex align-items-stretch">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-journal-text"></i>
                  </div>
                  <h3 className="card-title mb-3">SEC Course</h3>
                  <p className="card-text">
                    Our Securities and Education Certificate, where we teach our
                    members about fundamental and technical investment analysis.
                  </p>
                  <a href="/sec" className="btn btn-primary stretched-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md d-flex align-items-stretch">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-play-fill"></i>
                  </div>
                  <h3 className="card-title mb-3">Investment Society Events</h3>
                  <div className="mb-4">
                    <p className="card-text">
                      Subscribe to the mailing list to receive up-to-date
                      information on our events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*events cards code.*/}
      <section className="pt-4 p-md-5 bg-dark text-light">
        <div className="container">
          <div className="row text-center g-md-4">
            {/*g is for gutters, not gap. A google image will suffice to explain what the gutter is.*/}
            <h2>Investment Society Events</h2>
            <div className="col-md d-flex align-items-stretch">
              <div className="card bg-light text-dark">
                <div className="card-body text-center">
                  <div className="h2 mb-3">
                    <strong>
                      The Healthcare Industry: A Scientist Turned Dealmaker’s
                      Perspective{" "}
                    </strong>
                  </div>

                  <h3 className="card-title mb-3">
                    18:45 - 20:00, Thursday 9th March
                  </h3>
                  <h3 className="card-title mb-3">
                    {/* City and Guilds Building LT 200 */}
                    Huxley 308
                  </h3>
                  {/*<p className="card-text"> Sign up for the event here: https://bit.ly/3qRw1NF   </p>*/}
                </div>
              </div>
            </div>

            <div className="col-md d-flex align-items-stretch">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <div className="h2 mb-3">
                    <strong> Annual General Meeting</strong>
                  </div>
                  <h3 className="card-title mb-3">18:30, Monday 13th March </h3>
                  <h3 className="card-title mb-3">
                    {/* Clore Lecture Theatre, Huxley 213 */}
                    Online
                  </h3>
                  <p className="card-text mb-4">
                    {/*<p className="card-text"> 3 Feb: Real Estate Workshop 1   </p>
                    <p className="card-text">10 Feb: Real Estate Workshop 2 </p>
                    <p className="card-text">15 Feb: DCF Workshop 1 </p>
                    <p className="card-text">22 Feb: DCF Workshop 2</p> */}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md d-flex align-items-stretch">
              <div className="card bg-light text-dark">
                <div className="card-body text-center">
                  <div className="h2 mb-3">
                    <strong> QT Capital Grand Finale – Pitch Night</strong>
                  </div>
                  <h3 className="card-title mb-3">
                    18:30 - 20:00, Tuesday 14th March{" "}
                  </h3>
                  <h3 className="card-title mb-3">
                    Huxley 308
                    {/* Clore Lecture Theatre, Huxley 213 */}
                    {/* City and Guilds Building LT 200 */}
                  </h3>
                  <p className="card-text mb-4">
                    {/*<p className="card-text"> 5 Mar: Systematic Trading Workshop 1   </p>
                    <p className="card-text">12 Mar: Systematic Trading Workshop 2 </p>
                  <p className="card-text">19 Mar: Systematic Trading Workshop 3 </p> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="py-5 p-lg-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="img/Diversity.svg" className="img-fluid" alt="" />
            </div>
            <div className="col-md pt-4 p-md-5">
              <h2>A growing society</h2>
              <p className="lead">
                Despite a challenging academic year (with virtual events), our
                society's membership has grown by 30% with a diverse mix of
                personalities.
              </p>
              <p className="lead">
                We host interactive weekly investment meetings where our members
                have the chance to present, ask questions and vote on whether to
                add investment pitches to our virtual portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="py-5 p-lg-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md pt-4 p-md-5">
              <h2>Our Mission</h2>
              <p className="lead">
                The Imperial College Investment Society was founded in October
                2015, with the aim of educating members on investment value
                techniques and has grown steadily year on year.We host
                interactive weekly investment meetings where our members have
                the chance to present, ask questions and vote on whether to add
                investment pitches to our virtual portfolio.
              </p>
              <p className="lead">
                {" "}
                By submersing themselves in the world’s financial news, jargon
                and investment theory our members develop vital commercial
                awareness and financial acumen, which is critical to delivering
                value in any setting.
              </p>
              <p className="lead">
                {" "}
                We also expose our members to a diverse range of career
                opportunities ranging from Banking to Asset Management through
                office visits and speaker sessions from industry professionals.
              </p>
            </div>
            <div className="col-md">
              <img src="img/dollar.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 p-lg-5" id="questions">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="questions">
            {/*Item 1*/}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  How can I join the mailing list?
                </button>
              </h2>
              <div
                id="question-one"
                className="accordion-collapse collapse"
                data-bs-parent="#question"
              >
                <div className="accordion-body">
                  You can join our mailing list through the Imperial College
                  Union (ICU) website by clicking the button "Free Membership"
                  at the top of this page. Log in using your shorthand Imperial
                  College Username (e.g. abc123) and click the “Join” button
                  underneath the membership row.
                </div>
              </div>
            </div>
            {/*Item 2*/}
            {/*<div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-five">
                  What programmes does the society run? Can I join them?
                </button>
              </h2>
              <div id="question-five" className="accordion-collapse collapse" data-bs-parent="#question">
                <div className="accordion-body">So far, the society has offered one program for associates in our digital marketing team.
                  More programmes will be opening up soon and we will be advertising them in our mailing list, alongside our social media channels!
                  They are open to all ICIS members who are Imperial College & Business School students enrolled in 2021/22. </div>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
      <section className="py-3 p-lg-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                {/* remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards). */}
                <li className="list-group-item">
                  <span className="fw-bold">Main Location:</span> South Kensington
                  Campus, Imperial College
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Usual event date:</span> Tuesdays 18:00
                  – 20:00
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Email:</span>{" "}
                  icu.investmentsociety@imperial.ac.uk
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;