import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
            We have over 25 years of combined industry experience in SaaS, business process automation, and eCommerce.
            We're skilled in knowing which levers to pull to drive growth.
            We're uniquely positioned to recognize and navigate any challenges in an acquired company.
            We are both private investors and allocating our own capital to Southport Ventures.
          </p>
        </div>
        <div className="w-100 md:w-6/12 lg:w-5/12 bg-blue-700 p-10 lg:p-20 md:ml-20">
          <h2 className="text-6xl md:text-7xl text-blue-400">25</h2>
          <p className="text-blue-100 text-xl pt-4">combined years of product & software experience</p>
          <h2 className="text-6xl md:text-7xl text-blue-400 mt-20">2</h2>
          <p className="text-blue-100 text-xl pt-4">partners with skills ranging from customer research to UX to full stack software development</p>
        </div>
      </div>
    </section>

    <section className="bg-blue-200 py-20 md:mt-20">
      <div className="lg:container mx-auto px-5 md:px-20">
        <div>
          <div className="md:grid md:grid-cols-2 md:gap-20">
            <div className="bg-white p-10 shadow-xl mb-20 md:mb-0">
              <h3 className="text-2xl lg:text-4xl mb-2">Trevor</h3>
              <p className="uppercase mb-10 font-bold text-blue-400">
                Partner
              </p>
              <p>
                Trevor is an experienced software engineer, project manager, and real-estate investor.
                He has overseen full-stack teams in clean energy, insurance, finance, and media.
                Notable engagements include Morgan Stanley, HBO, Bloomberg, Honest Buildings (now Procore), RunEnergy, Black Bear Energy, and PRco USA.
                He has an MBA from London Business School and an MBA from Columbia Business School.
              </p>
            </div>
            <div className="bg-white p-10 shadow-xl">
              <h3 className="text-2xl lg:text-4xl mb-2">Nicholas</h3>
              <p className="uppercase mb-10 font-bold text-blue-400">
                Partner
              </p>
              <p>
                Nicholas is an experienced product manager & UX designer.
                He was the fifth employee and first designer at a consumer marketplace startup (acquired by an S&P 500 company in 2019).
                He wore many hats (Senior Product Designer, Director of UX, Product Manager, Senior Product Manager) and helped grow the business from a few thousand in transactions to billions in transactions and tens of millions in revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default About
