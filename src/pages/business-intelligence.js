import React from "react"
import FreeValuationFooter from "../components/free-valuation-footer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BizIntelImage from "../images/biz-intel.jpg"
import TrevorPic from "../images/trevor-profile.png"
import NicholasPic from "../images/nicholas-profile.png"

const BusinessIntelligence = () => (
  <Layout>
    <main>
      <SEO title="Business Intelligence" />
      <section className="govtech-bg-img bg-cover bg-center" style={{ backgroundImage: `url(${BizIntelImage})` }}>
        <div className="bg-blue-700 bg-opacity-80 text-center">
          <div className="lg:container mx-auto px-5 md:px-20">
            <div className="w-11/12 md:w-9/12 mx-auto py-40 md:py-60 text-white">
              <h1 className="text-2xl md:text-3xl lg:text-5xl sm:leading-normal md:leading-normal lg:leading-normal">
                Sell Your Business to a Team With Deep Software, Data, and, Analytics Experience
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:container mx-auto my-20 lg:my-40 px-5">
        <div className="lg:w-8/12 xl:w-7/12 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            Why Sell To Us?
          </h2>
          <div className="border-b-2 border-blue-700 w-24 my-6 block mx-auto"></div>
          <p className="text-xl leading-normal">
            We know software, analytics, and data-driven businesses well.
            We’ll take care of your customers and employees, invest in growing your business, and provide an outstanding outcome for you.
            <br/>
            <br/>
            Southport Ventures and our equity partners are looking to buy and operate one business for the long term.
            We'll drive growth through innovation, experimentation, and investing in people, not through cost-cutting and financial gymnastics.
          </p>
        </div>
      </section>

      <section className="bg-blue-200 py-20 lg:py-40">
        <div className="lg:container mx-auto px-5 md:px-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center">
            Who We Are
          </h2>
          <div className="border-b-2 border-blue-700 w-24 my-6 block mx-auto"></div>
          <div className="md:grid md:grid-cols-2 md:gap-20 mt-5">
            <div className="mb-20 md:mb-0">
              <img className="mx-auto mt-10 mb-5" src={NicholasPic} alt="Nicholas Evans" />
              <h4 className="text-2xl font-sans text-center font-normal">Nicholas Evans</h4>
              <p className="my-5">
                Nicholas is a Partner at Southport Ventures and former product manager at Reverb and Etsy.
                He was the fifth employee at Reverb.com and helped grow it to billions transacted on the platform and tens of millions in revenue, culminating in an acquisition by Etsy.
                Prior to Southport Ventures, he led the Buyer Experience group at Reverb and drove over a hundred million dollars in incremental gross merchandise sales through product improvements and experimentation.
                Nicholas won a <a href="https://www.linkedin.com/posts/nicholasaevans_landing-page-data-monsters-activity-6772994290013622272-x5Cp/">DataMonster of the Year award</a> from Amplitude Analytics for creating the most analysis charts and dashboards used by multiple people in their organization.
              </p>
              <a href="https://www.linkedin.com/in/nicholasaevans/" target="_blank" rel="noreferrer" className="block">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g fill="#2867B2">
                    <path d="M29.714 0L2.279 0C1.021 0 0 1.036 0 2.307L0 29.693C0 30.964 1.021 32 2.279 32L29.714 32C30.971 32 32 30.964 32 29.693L32 2.307C32 1.036 30.971 0 29.714 0ZM9.671 27.429L4.929 27.429 4.929 12.157 9.679 12.157 9.679 27.429 9.671 27.429ZM7.3 10.071C5.779 10.071 4.55 8.836 4.55 7.321 4.55 5.807 5.779 4.571 7.3 4.571 8.814 4.571 10.05 5.807 10.05 7.321 10.05 8.843 8.821 10.071 7.3 10.071ZM27.45 27.429L22.707 27.429 22.707 20C22.707 18.229 22.671 15.95 20.243 15.95 17.771 15.95 17.393 17.879 17.393 19.871L17.393 27.429 12.65 27.429 12.65 12.157 17.2 12.157 17.2 14.243 17.264 14.243C17.9 13.043 19.45 11.779 21.757 11.779 26.557 11.779 27.45 14.943 27.45 19.057L27.45 27.429Z"/>
                  </g>
                </svg>
              </a>
            </div>
            <div className="mb-20 md:mb-0">
              <img className="mx-auto mt-10 mb-5" src={TrevorPic} alt="Trevor Ewen" />
              <h4 className="text-2xl font-sans text-center font-normal">Trevor Ewen</h4>
              <p className="my-5">
                Trevor is a Partner at Southport Ventures and an experienced software engineer, project manager, and real-estate investor.
                He has overseen full-stack teams in clean energy, insurance, finance, and media.
                Notable engagements include Morgan Stanley, HBO, Bloomberg, Honest Buildings (now Procore), RunEnergy, Black Bear Energy, and PRco USA.
              </p>
              <a href="https://www.linkedin.com/in/trevorewen/" target="_blank" rel="noreferrer" className="block">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g fill="#2867B2">
                    <path d="M29.714 0L2.279 0C1.021 0 0 1.036 0 2.307L0 29.693C0 30.964 1.021 32 2.279 32L29.714 32C30.971 32 32 30.964 32 29.693L32 2.307C32 1.036 30.971 0 29.714 0ZM9.671 27.429L4.929 27.429 4.929 12.157 9.679 12.157 9.679 27.429 9.671 27.429ZM7.3 10.071C5.779 10.071 4.55 8.836 4.55 7.321 4.55 5.807 5.779 4.571 7.3 4.571 8.814 4.571 10.05 5.807 10.05 7.321 10.05 8.843 8.821 10.071 7.3 10.071ZM27.45 27.429L22.707 27.429 22.707 20C22.707 18.229 22.671 15.95 20.243 15.95 17.771 15.95 17.393 17.879 17.393 19.871L17.393 27.429 12.65 27.429 12.65 12.157 17.2 12.157 17.2 14.243 17.264 14.243C17.9 13.043 19.45 11.779 21.757 11.779 26.557 11.779 27.45 14.943 27.45 19.057L27.45 27.429Z"/>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <FreeValuationFooter />
    </main>
  </Layout>
)

export default BusinessIntelligence
