import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Sec() {
  return (
    <div className="mt-16">
      <section id="learn" className="py-4 pb-8 px-3 bg-dark text-light">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="sm:w-2/3 p-md-5 pt-2">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                About the SEC
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The Investment Society's flagship lecture course has been
                remodelled with a revised syllabus and teaching style to boost
                your knowledge and skills for a career in Investment and
                Finance.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                We will be delivering the technicals and fundamentals you need
                to navigate your way through the world of finance, with topics
                including key players, equities, derivatives, fixed income and
                more.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                This year's SEC is a 7-part lecture series (held on Saturdays,
                starting from 12th October). Upon completion of the graded exam at
                the end of the course, you will be given a certificate that you
                can present to prospective employers on your CV.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                We are pleased to announce that our course this year has over 1000 people subscribed, with many from UCL and LSE as well. 
              </p>
            </div>
            <div className="sm:w-1/3 mb-1 mt-sm-1">
              <img
                src="img/sec/SEC coloured.svg"
                className="mx-auto"
                alt=""
                width="60%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Add the two images side by side here */}
      <div className="flex flex-row justify-center items-center my-8 space-x-4">
        <img
          src="img/team/SEC audience.jpg"
          alt="SEC Audience"
          className="rounded-lg shadow-lg"
          style={{ width: "45%", maxWidth: "500px" }} // Adjust size as needed
        />
        <img
          src="img/team/SEC presenting.jpg"
          alt="SEC Presenting"
          className="rounded-lg shadow-lg"
          style={{ width: "45%", maxWidth: "500px" }} // Adjust size as needed
        />
      </div>

      <section className="pt-5 p-lg-5" id="questions">
        <div className="container">
          <h2 className="text-center mb-4 text-2xl md:text-3xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is this course only for current students at Imperial?
              </AccordionTrigger>
              <AccordionContent>
                No, it is open to all, but we will be giving current students at
                Imperial priority.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Do I need to know anything about finance before joining this
                course?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely not – you do not need any experience and we will be
                starting with the basics of finance and teaching from the ground
                up. If you do have experience, that’s great too! There is
                something for everyone in our course.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are lectures online/recorded?</AccordionTrigger>
              <AccordionContent>
                Yes, lectures will be posted online and recorded.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How does certification work?</AccordionTrigger>
              <AccordionContent>
                At the end of the course we will conduct an exam of the content
                we have taught over the 7 weeks. If you pass, you will then be
                sent a certificate that Investment Society will endorse should
                you elect to put this on your CV.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
