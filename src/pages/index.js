import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SketchingTogether from "../images/sketching-together.jpg"
import ContrastElement from "../images/contrast-element.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Southport Ventures" />
    <section className="bg-blue-200 relative">
      <div className="lg:container mx-auto flex flex-wrap md:flex-nowrap xl:items-center">
        <div className="w-100 md:w-75 px-5 py-20 md:px-20 md:pt-20 md:pb-0 xl:pt-32 xl:pb-11">
          <h1 className="text-4xl lg:text-5xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            We invest in and grow software businesses
          </h1>
          <span className="border-b-2 border-blue-700 w-24 my-6 block"></span>
          <p className="text-xl lg:text-2xl mb-10 lg:w-8/12">
            Southport Ventures invests in mission-critical, B2B software businesses and accelerates their growth.
          </p>
          <Link to="/contact" className="inline-block text-xl bg-blue-700 text-white hover:shadow-xl py-3 px-5 font-bold">
            Get In Touch
          </Link>
        </div>
      </div>
      <img className="hidden md:block w-full h-24 object-none object-right-bottom" src={ContrastElement} alt="Contrast graphic" />
    </section>

    <section className="lg:container mx-auto my-20 lg:my-40 px-5 md:px-20">
      <h2 className="text-3xl lg:text-4xl">
        Track Record
      </h2>
      <span className="border-b-2 border-blue-700 w-24 my-6 block"></span>
      <div className="lg:w-9/12 mb-10">
        <p className="text-xl leading-normal">
          We've grown our first investment 50% over the first year of ownership while continuing to run it at high profit margins.
        </p>
      </div>
    </section>

    <section className="lg:container mx-auto md:mt-20 lg:my-40 md:px-20">
      <div className="lg:flex lg:items-end relative">
        <img className="w-full lg:w-9/12" src={SketchingTogether} alt="Two people looking at computer together" />
        <div className="bg-blue-700 px-5 py-20 md:p-14 z-10 lg:absolute lg:right-0 xl:right-10 lg:bottom-0 lg:w-6/12 xl:w-4/12">
          <h2 className="text-3xl lg:text-2xl text-blue-200">
            How We're Different
          </h2>
          <span className="border-b-2 border-blue-400 w-24 my-6 block"></span>
          <p className="text-blue-100 text-xl leading-normal">
            We know how to build great software. Years of product and engineering experience make us much more than just funding partners.
          </p>
        </div>
      </div>
    </section>

    <section className="lg:container mx-auto my-20 lg:my-40 px-5 md:px-20">
      <h2 className="text-3xl lg:text-4xl">
        Our Criteria
      </h2>
      <span className="border-b-2 border-blue-700 w-24 my-6 block"></span>
      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        <div className="bg-white p-10 shadow-xl mb-10">
          <h4 className="text-xl mb-2">Track Record & Growth</h4>
          <p>
            Three or more years of operational history and solid growth.
          </p>
        </div>
        <div className="bg-white p-10 shadow-xl mb-10">
          <h4 className="text-xl mb-2">Revenue & Profitability</h4>
          <p>
            Businesses with $1M to $5M in ARR with high gross margin potential.
          </p>
        </div>
        <div className="bg-white p-10 shadow-xl mb-10">
          <h4 className="text-xl mb-2">Product & Churn</h4>
          <p>
            Customers love the product and revenue churn less than 20%/year.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-blue-700 text-white py-20 md:mt-20 xl:mt-40">
      <div className="lg:container mx-auto px-5 md:px-20">
        <h2 className="text-3xl lg:text-4xl text-blue-200">
          Why Partner With Us?
        </h2>
        <span className="border-b-2 border-blue-400 w-24 my-6 block"></span>
        <div className="lg:w-9/12 mb-10">
          <p className="text-xl leading-normal text-blue-100">
            We’ll roll up our sleeves and help you invest in your product, evolve your org, and grow the business.
            <br/>
            <br/>
            We're not a bloated firm with a drawn-out process that will waste months of your time. We'll be clear in our communication, quick in our due diligence, and fair in our terms.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
