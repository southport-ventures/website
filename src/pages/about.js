import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TrevorPic from "../images/trevor-profile.png"
import NicholasPic from "../images/nicholas-profile.png"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="lg:container mx-auto mt-10 md:px-20 md:my-20">
      <div className="md:flex md:items-center">
        <div className="w-100 md:w-6/12 lg:w-7/12 px-5 md:px-0">
          <h1 className="text-2xl md:text-4xl">
            About Us
          </h1>
          <span className="border-b-2 border-blue-700 w-24 my-5 block"></span>
          <p className="text-xl md:text-2xl mb-10">
            We're software professionals with a passion for operational excellence.
          </p>
          <p className="md:text-lg">
            Southport Ventures is a team of product and software development professionals looking to buy and operate great businesses.
            We obsess over standard operating procedures, product strategy, experimentation, and crafting the right tech stack.
            We enjoy talking about product, software engineering, and carefully crafted experiences over drilling owners on their financials.
            We believe in accelerating growth through innovation, experimentation, and investing in people, not through cost cutting and financial gymnastics.
            <br/>
            <br/>
            We have over 25 years of combined industry experience in SaaS, business process automation, and eCommerce, which gives us insight into which levers to pull to drive growth.
            We are both private investors and allocating our own capital to Southport Ventures.
          </p>
        </div>
        <div className="w-100 md:w-6/12 lg:w-5/12 bg-blue-700 p-10 lg:p-20 md:ml-20">
          <h2 className="text-6xl md:text-7xl text-blue-400">25</h2>
          <p className="text-blue-100 text-xl pt-4">combined years of product & software experience</p>
          <h2 className="text-6xl md:text-7xl text-blue-400 mt-20">2</h2>
          <p className="text-blue-100 text-xl pt-4">partners with skills ranging from product management, customer research, and UX to full stack software development</p>
        </div>
      </div>
    </section>

    <section className="bg-blue-200 py-20 md:mt-20">
      <div className="lg:container mx-auto px-5 md:px-20">
        <div>
          <div className="md:grid md:grid-cols-2 md:gap-20">
            <div className="bg-white p-10 shadow-xl mb-20 md:mb-0">
              <img className="mx-auto mb-5" src={TrevorPic} alt="Trevor Ewen" />
              <h3 className="text-xl lg:text-3xl mb-2 text-center">Trevor Ewen</h3>
              <p className="uppercase mb-5 font-bold text-blue-400 text-center">
                Partner
              </p>
              <p>
                Trevor is an experienced software engineer, project manager, and real-estate investor.
                He has overseen full-stack teams in clean energy, insurance, finance, and media.
                Notable engagements include Morgan Stanley, HBO, Bloomberg, Honest Buildings (now Procore), RunEnergy, Black Bear Energy, and PRco USA.
                He has an MBA from London Business School and Columbia Business School via the joint, global program.
              </p>
            </div>
            <div className="bg-white p-10 shadow-xl">
              <img className="mx-auto mb-5" src={NicholasPic} alt="Nicholas Evans" />
              <h3 className="text-xl lg:text-3xl mb-2 text-center">Nicholas Evans</h3>
              <p className="uppercase mb-5 font-bold text-blue-400 text-center">
                Partner
              </p>
              <p>
                Nicholas is an experienced product manager and designer.
                As the fifth employee at Reverb.com, he helped lead the product organization and grow Reverb to billions in gross merchandise sales, tens of millions in revenue, and an eventual sale to Etsy.
                He spent the last few years leading the Buyer Experience efforts at Reverb and driving high incrmental revenue through experimentation and launching new products.
                Prior to Reverb, he was a design & innovation consultant at Gravitytank and IA Collaborative. Notable engagements include GE, Samsung, SC Johnson, OfficeMax, and ClubCorp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default About
