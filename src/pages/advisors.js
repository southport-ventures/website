import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import StevePic from "../images/steve-profile.png";
import ScottPic from "../images/scott-profile.png";
import MarkPic from "../images/mark-profile.png";
import TonyPic from "../images/tony-profile.png";
import MattPic from "../images/matt-profile.png";
import AndrewPic from "../images/andrew-profile.png";
import ShannonPic from "../images/shannon-profile.png";

const Advisors = () => (
  <Layout>
    <SEO title="Advisors" />
    <section className="lg:container mx-auto mt-10 md:px-20 md:my-20">
      <div className="px-5 md:px-0 mb-5 md:mb-10">
        <h1 className="text-2xl md:text-4xl">Advisors</h1>
      </div>
      <div className="lg:container mx-auto px-5 md:px-0">
        <div>
          <div className="md:grid md:grid-cols-2 md:gap-20">
            <div className="bg-white p-5 md:p-10 shadow-xl mb-10 md:mb-0">
              <img
                className="mx-auto mb-5"
                src={StevePic}
                alt="Steve Ressler"
              />
              <h3 className="text-xl lg:text-3xl mb-2 text-center">
                Steve Ressler
              </h3>
              <p className="uppercase mb-5 font-bold text-blue-400 text-center">
                Investor & Advisor in SaaS, GovTech, & Search Funds
              </p>
              <p className="mb-5 text-sm">
                Steve is a serial entrepreneur and CEO and an active investor in
                search funds. He was the founder and CEO of GovLoop, an online
                community connecting over 250,000+ government employees, which
                he successfully sold in 2009. He was also the Chief Marketing
                Officer of Granicus, one of the largest and fastest-growing
                software platforms serving state and local governments under
                Vista Equity Partners' ownership. He was most recently President
                of Callyo, a software and technology solutions provider for law
                enforcement, which he grew and ultimately led the sale of to
                Motorola Solutions in 2020. He is passionate about sharing the
                lessons and best practices he has learned founding, running and
                managing small software businesses with entrepreneurs pursuing
                entrepreneurship through acquisition.
              </p>
              <a
                href="https://www.linkedin.com/in/ressler/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <g fill="#2867B2">
                    <path d="M29.714 0L2.279 0C1.021 0 0 1.036 0 2.307L0 29.693C0 30.964 1.021 32 2.279 32L29.714 32C30.971 32 32 30.964 32 29.693L32 2.307C32 1.036 30.971 0 29.714 0ZM9.671 27.429L4.929 27.429 4.929 12.157 9.679 12.157 9.679 27.429 9.671 27.429ZM7.3 10.071C5.779 10.071 4.55 8.836 4.55 7.321 4.55 5.807 5.779 4.571 7.3 4.571 8.814 4.571 10.05 5.807 10.05 7.321 10.05 8.843 8.821 10.071 7.3 10.071ZM27.45 27.429L22.707 27.429 22.707 20C22.707 18.229 22.671 15.95 20.243 15.95 17.771 15.95 17.393 17.879 17.393 19.871L17.393 27.429 12.65 27.429 12.65 12.157 17.2 12.157 17.2 14.243 17.264 14.243C17.9 13.043 19.45 11.779 21.757 11.779 26.557 11.779 27.45 14.943 27.45 19.057L27.45 27.429Z" />
                  </g>
                </svg>
              </a>
            </div>
            <div className="bg-white p-5 md:p-10 shadow-xl mb-10 md:mb-0">
              <img
                className="mx-auto mb-5"
                src={ScottPic}
                alt="Scott Stephenson"
              />
              <h3 className="text-xl lg:text-3xl mb-2 text-center">
                Scott Stephenson
              </h3>
              <p className="uppercase mb-5 font-bold text-blue-400 text-center">
                CEO | Verisk
              </p>
              <p className="mb-5 text-sm">
                Scott G. Stephenson is chairman, president, and chief executive
                officer of Verisk. Verisk delivers data, analytics, and decision
                support services to customers in the insurance, natural
                resources, financial services, government, and risk management
                sectors. Scott is a values-based leader who launched The Verisk
                Way—the company’s principles to serve, add value, and innovate
                that guide how Verisk engages with customers, employees,
                shareholders, and communities. Under his leadership, Verisk has
                been named one of the World’s Best Employers, one of the World’s
                Most Innovative Companies, and one of America’s Best Employers
                for Women.
              </p>
              <a
                href="https://www.linkedin.com/in/scottgstephenson/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <g fill="#2867B2">
                    <path d="M29.714 0L2.279 0C1.021 0 0 1.036 0 2.307L0 29.693C0 30.964 1.021 32 2.279 32L29.714 32C30.971 32 32 30.964 32 29.693L32 2.307C32 1.036 30.971 0 29.714 0ZM9.671 27.429L4.929 27.429 4.929 12.157 9.679 12.157 9.679 27.429 9.671 27.429ZM7.3 10.071C5.779 10.071 4.55 8.836 4.55 7.321 4.55 5.807 5.779 4.571 7.3 4.571 8.814 4.571 10.05 5.807 10.05 7.321 10.05 8.843 8.821 10.071 7.3 10.071ZM27.45 27.429L22.707 27.429 22.707 20C22.707 18.229 22.671 15.95 20.243 15.95 17.771 15.95 17.393 17.879 17.393 19.871L17.393 27.429 12.65 27.429 12.65 12.157 17.2 12.157 17.2 14.243 17.264 14.243C17.9 13.043 19.45 11.779 21.757 11.779 26.557 11.779 27.45 14.943 27.45 19.057L27.45 27.429Z" />
                  </g>
                </svg>
              </a>
            </div>
            <div className="bg-white p-5 md:p-10 shadow-xl mb-10 md:mb-0">
              <img className="mx-auto mb-5" src={TonyPic} alt="Tony Cappaert" />
              <h3 className="text-xl lg:text-3xl mb-2 text-center">
                Tony Cappaert
              </h3>
              <p className="uppercase mb-5 font-bold text-blue-400 text-center">
                Strategic Growth | Compass
              </p>
              <p className="mb-5 text-sm">
                Tony Cappaert is the Founder & CEO at Blue Maple, a vacation
                rental investment firm and property management company. Blue
                Maple owns and manages a portfolio of unique, high-demand cabins
                and cottages in the vacation markets outside Washington, DC --
                and manages all portfolio and property operations. Previously,
                Tony was the Co-Founder and COO at Contactually, a CRM software
                company for real estate brokerages and agents. For nearly eight
                years, he managed all go-to-market efforts at Contactually --
                including sales, marketing, and customer success -- while
                growing the company to over $10M in annual revenue and 75
                employees. He sold Contactually to Compass -- the largest US
                independent real estate brokerage -- in 2019. Today he manages
                all lead generation and strategic partnerships for the company.
                In 2021, Compass went public on the NYSE (COMP).
              </p>
              <a
                href="https://www.linkedin.com/in/cappaert/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <g fill="#2867B2">
                    <path d="M29.714 0L2.279 0C1.021 0 0 1.036 0 2.307L0 29.693C0 30.964 1.021 32 2.279 32L29.714 32C30.971 32 32 30.964 32 29.693L32 2.307C32 1.036 30.971 0 29.714 0ZM9.671 27.429L4.929 27.429 4.929 12.157 9.679 12.157 9.679 27.429 9.671 27.429ZM7.3 10.071C5.779 10.071 4.55 8.836 4.55 7.321 4.55 5.807 5.779 4.571 7.3 4.571 8.814 4.571 10.05 5.807 10.05 7.321 10.05 8.843 8.821 10.071 7.3 10.071ZM27.45 27.429L22.707 27.429 22.707 20C22.707 18.229 22.671 15.95 20.243 15.95 17.771 15.95 17.393 17.879 17.393 19.871L17.393 27.429 12.65 27.429 12.65 12.157 17.2 12.157 17.2 14.243 17.264 14.243C17.9 13.043 19.45 11.779 21.757 11.779 26.557 11.779 27.45 14.943 27.45 19.057L27.45 27.429Z" />
                  </g>
                </svg>
              </a>
            </div>
            <div className="bg-white p-5 md:p-10 shadow-xl mb-10 md:mb-0">
              <img
                className="mx-auto mb-5"
                src={ShannonPic}
                alt="Shannon Jones"
              />
              <h3 className="text-xl lg:text-3xl mb-2 text-center">
                Shannon Jones
              </h3>
              <p className="uppercase mb-5 font-bold text-blue-400 text-center">
                Managing Director | Halstatt Legacy Partners
              </p>
              <p className="mb-5 text-sm">
                W. Shannon Jones founded Halstatt Legacy Partners to help
                Halstatt LLC - the investment arm of the Sproul Family - expand
                its direct private equity investing via Entrepreneurship through
                Acquisition. Halstatt also maintains a portfolio of direct
                venture capital and private equity investments across many
                sectors. As Managing Director of Halstatt Legacy Partners,
                Shannon focuses exclusively on forging deep partnerships with a
                small number of entrepreneurs/operators to find, acquire and
                grow great companies. Shannon currently serves on the boards of
                Hanlon Acoustical Ceilings, Perfect Surface, RedRock Financial,
                and Satterfield Paving. Prior to Halstatt, Shannon enjoyed
                extensive experience as a founder and operator of small
                businesses spanning the software, consumer products, media, and
                financial services industries.
              </p>
              <a
                href="https://www.linkedin.com/in/wshannonjones/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <g fill="#2867B2">
                    <path d="M29.714 0L2.279 0C1.021 0 0 1.036 0 2.307L0 29.693C0 30.964 1.021 32 2.279 32L29.714 32C30.971 32 32 30.964 32 29.693L32 2.307C32 1.036 30.971 0 29.714 0ZM9.671 27.429L4.929 27.429 4.929 12.157 9.679 12.157 9.679 27.429 9.671 27.429ZM7.3 10.071C5.779 10.071 4.55 8.836 4.55 7.321 4.55 5.807 5.779 4.571 7.3 4.571 8.814 4.571 10.05 5.807 10.05 7.321 10.05 8.843 8.821 10.071 7.3 10.071ZM27.45 27.429L22.707 27.429 22.707 20C22.707 18.229 22.671 15.95 20.243 15.95 17.771 15.95 17.393 17.879 17.393 19.871L17.393 27.429 12.65 27.429 12.65 12.157 17.2 12.157 17.2 14.243 17.264 14.243C17.9 13.043 19.45 11.779 21.757 11.779 26.557 11.779 27.45 14.943 27.45 19.057L27.45 27.429Z" />
                  </g>
                </svg>
              </a>
            </div>
            <div className="bg-white p-5 md:p-10 shadow-xl mb-10 md:mb-0">
              <img className="mx-auto mb-5" src={MarkPic} alt="Mark Thompson" />
              <h3 className="text-xl lg:text-3xl mb-2 text-center">
                Mark Thompson
              </h3>
              <p className="uppercase mb-5 font-bold text-blue-400 text-center">
                CIO | Riverbridge
              </p>
              <p className="mb-5 text-sm">
                Mark Thompson co-founded Riverbridge in 1987 to pursue his
                passionate belief in long-term investing. As chief manager, Mark
                is responsible for the strategic decision making and overall
                management of the firm. He is also chairman of the Riverbridge
                Board of Governors. Mark serves as the chief investment officer,
                where he is responsible for coordinating the efforts of the
                investment team and overall portfolio compliance to Riverbridge
                investment disciplines.
              </p>
              <a
                href="https://www.linkedin.com/in/mark-thompson-b14a657/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <g fill="#2867B2">
                    <path d="M29.714 0L2.279 0C1.021 0 0 1.036 0 2.307L0 29.693C0 30.964 1.021 32 2.279 32L29.714 32C30.971 32 32 30.964 32 29.693L32 2.307C32 1.036 30.971 0 29.714 0ZM9.671 27.429L4.929 27.429 4.929 12.157 9.679 12.157 9.679 27.429 9.671 27.429ZM7.3 10.071C5.779 10.071 4.55 8.836 4.55 7.321 4.55 5.807 5.779 4.571 7.3 4.571 8.814 4.571 10.05 5.807 10.05 7.321 10.05 8.843 8.821 10.071 7.3 10.071ZM27.45 27.429L22.707 27.429 22.707 20C22.707 18.229 22.671 15.95 20.243 15.95 17.771 15.95 17.393 17.879 17.393 19.871L17.393 27.429 12.65 27.429 12.65 12.157 17.2 12.157 17.2 14.243 17.264 14.243C17.9 13.043 19.45 11.779 21.757 11.779 26.557 11.779 27.45 14.943 27.45 19.057L27.45 27.429Z" />
                  </g>
                </svg>
              </a>
            </div>
            <div className="bg-white p-5 md:p-10 shadow-xl mb-10 md:mb-0">
              <img className="mx-auto mb-5" src={AndrewPic} alt="Andrew Finn" />
              <h3 className="text-xl lg:text-3xl mb-2 text-center">
                Andrew Finn
              </h3>
              <p className="uppercase mb-5 font-bold text-blue-400 text-center">
                Co-founder | G64 Ventures
              </p>
              <p className="mb-5 text-sm">
                Andrew runs G64 Ventures day-to-day and is the Chairman of
                CollegePlannerPro and Apartment Guardian, and a Co-Founder of
                Wait But Why.
              </p>
              <a
                href="https://www.linkedin.com/in/andrew-finn-0477894/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <g fill="#2867B2">
                    <path d="M29.714 0L2.279 0C1.021 0 0 1.036 0 2.307L0 29.693C0 30.964 1.021 32 2.279 32L29.714 32C30.971 32 32 30.964 32 29.693L32 2.307C32 1.036 30.971 0 29.714 0ZM9.671 27.429L4.929 27.429 4.929 12.157 9.679 12.157 9.679 27.429 9.671 27.429ZM7.3 10.071C5.779 10.071 4.55 8.836 4.55 7.321 4.55 5.807 5.779 4.571 7.3 4.571 8.814 4.571 10.05 5.807 10.05 7.321 10.05 8.843 8.821 10.071 7.3 10.071ZM27.45 27.429L22.707 27.429 22.707 20C22.707 18.229 22.671 15.95 20.243 15.95 17.771 15.95 17.393 17.879 17.393 19.871L17.393 27.429 12.65 27.429 12.65 12.157 17.2 12.157 17.2 14.243 17.264 14.243C17.9 13.043 19.45 11.779 21.757 11.779 26.557 11.779 27.45 14.943 27.45 19.057L27.45 27.429Z" />
                  </g>
                </svg>
              </a>
            </div>
            <div className="bg-white p-5 md:p-10 shadow-xl mb-10 md:mb-0">
              <img className="mx-auto mb-5" src={MattPic} alt="Matt Bennett" />
              <h3 className="text-xl lg:text-3xl mb-2 text-center">
                Matt Bennett
              </h3>
              <p className="uppercase mb-5 font-bold text-blue-400 text-center">
                Managing Partner | Longvue
              </p>
              <p className="mb-5 text-sm">
                Matt is currently Managing Partner at Longvue, a long-term
                growth investor that partners with great entrepreneurs &
                operators to build lasting companies with 10x outcomes. Matt is
                also currently a Partner at Talisman Capital Partners, a family
                office that has built three companies from less than $1M of
                earnings to north of $1B of EV. Prior to Longvue and Talisman,
                Matt served as Vice President of Corporate Development at
                MedVet, an operator of emergency and specialty veterinary
                hospitals, where he led mergers and acquisitions, new
                partnership opportunities, and other strategic growth
                initiatives. Prior to MedVet, Matt worked for J.P. Morgan in New
                York City, where he was in the Corporate Strategy division
                specializing in digital payments, and also in the Investment
                Banking division, where he worked on a variety of mergers,
                acquisitions, leveraged buyouts, and capital markets
                transactions.
              </p>
              <a
                href="https://www.linkedin.com/in/mmbennett/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <g fill="#2867B2">
                    <path d="M29.714 0L2.279 0C1.021 0 0 1.036 0 2.307L0 29.693C0 30.964 1.021 32 2.279 32L29.714 32C30.971 32 32 30.964 32 29.693L32 2.307C32 1.036 30.971 0 29.714 0ZM9.671 27.429L4.929 27.429 4.929 12.157 9.679 12.157 9.679 27.429 9.671 27.429ZM7.3 10.071C5.779 10.071 4.55 8.836 4.55 7.321 4.55 5.807 5.779 4.571 7.3 4.571 8.814 4.571 10.05 5.807 10.05 7.321 10.05 8.843 8.821 10.071 7.3 10.071ZM27.45 27.429L22.707 27.429 22.707 20C22.707 18.229 22.671 15.95 20.243 15.95 17.771 15.95 17.393 17.879 17.393 19.871L17.393 27.429 12.65 27.429 12.65 12.157 17.2 12.157 17.2 14.243 17.264 14.243C17.9 13.043 19.45 11.779 21.757 11.779 26.557 11.779 27.45 14.943 27.45 19.057L27.45 27.429Z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Advisors;
