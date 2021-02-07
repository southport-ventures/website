import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="lg:container mx-auto mt-10 md:px-20 md:my-20">
      <div className="md:flex md:items-center">
        <div className="w-100 md:w-6/12 lg:w-7/12 px-5 md:px-0">
          <h1 className="text-2xl md:text-4xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            About Us
          </h1>
          <span className="border-b-2 border-blue-700 w-24 my-5 block"></span>
          <p className="text-xl md:text-2xl mb-10">
            We're software professionals with an eye for operational strategy.
          </p>
          <p className="md:text-lg">
            We have over 25 years of combined industry experience in SaaS, business tooling, and eCommerce.
            We're uniquely positioned to recognize and navigate any challenges in an acquired company. Upon acquisition, we are qualified to execute the strategy and build the growth road map.
            We are both private investors and allocating our own capital to Southport Ventures.
          </p>
        </div>
        <div className="w-100 md:w-6/12 lg:w-5/12 bg-blue-700 p-10 lg:p-20 md:ml-20">
          <h2 className="text-6xl md:text-8xl text-blue-400">25</h2>
          <p className="text-blue-100 text-xl pt-4">combined years of product & software experience</p>
          <h2 className="text-6xl md:text-8xl text-blue-400 mt-20">100M+</h2>
          <p className="text-blue-100 text-xl pt-4">in incremental revenue driven</p>
        </div>
      </div>
    </section>

    <section className="bg-blue-200 py-20 md:mt-20">
      <div className="lg:container mx-auto px-5 md:px-20">
        <div>
          <div className="md:grid md:grid-cols-2 md:gap-20">
            <div className="bg-white p-10 shadow-xl mb-20 md:mb-0">
              <h4 className="text-2xl lg:text-4xl mb-2">Trevor Ewen</h4>
              <p className="lg:text-2xl mb-10">
                Partner
              </p>
              <p>
              Trevor is an experienced software engineer.
              He's built software for clients for over 15 years and managed full-stack teams in clean energy, insurance, finance, and media.
              Notable engagements include Morgan Stanley, HBO, Bloomberg, and Honest Buildings (now Procore).
              </p>
            </div>
            <div className="bg-white p-10 shadow-xl">
              <h4 className="text-2xl lg:text-4xl mb-2">Nicholas Evans</h4>
              <p className="lg:text-2xl mb-10">
                Partner
              </p>
              <p>
              Nicholas is an experienced product manager & UX designer.
              He was the fifth employee and first designer at Reverb.com (acquired by Etsy in 2019).
              He wore many hats (Senior Product Designer, Director of UX, Product Manager, Senior Product Manager) and helped grow Reverb from a few thousand in transactions to billions in transactions and tens of millions in revenue.
              Prior to Reverb, he was a design & innovation consultant.
              Notable engagements include SC Johnson, GE, Samsung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default About
