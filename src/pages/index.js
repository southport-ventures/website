import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SketchingTogether from "../images/sketching-together.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Southport Ventures" />
    <section className="bg-blue-200 relative">
      <div className="lg:container mx-auto flex flex-wrap md:flex-nowrap xl:items-center">
        <div className="w-100 md:w-75 px-5 py-20 md:px-20 lg:pr-40 md:py-20 xl:py-32">
          <h1 className="text-4xl lg:text-5xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            We buy niche, profitable SaaS businesses
          </h1>
          <span className="border-b-2 border-blue-700 w-24 my-6 block"></span>
          <p className="text-xl lg:text-2xl mb-10 lg:w-8/12">
          Southport Ventures is an acquisition fund focused on buying profitable, mission critical, B2B SaaS businesses.
          </p>
          <Link to="/contact" className="inline-block text-xl bg-blue-700 text-white hover:shadow-xl py-3 px-5 font-bold">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>

    <section className="lg:container mx-auto md-mt-10 md:mt-20 lg:my-40 md:px-20">
      <div className="flex flex-wrap md:flex-nowrap md:items-end relative">
        <img className="w-full md:w-9/12" src={SketchingTogether} alt="Two people looking at computer together" />
        <div className="bg-blue-700 px-5 py-10 md:p-14 z-10 md:absolute md:right-0 xl:right-10 md:bottom-0 md:w-6/12 xl:w-4/12">
          <h2 className="text-3xl lg:text-2xl text-blue-200">
            How We're Different
          </h2>
          <span className="border-b-2 border-blue-400 w-24 my-6 block"></span>
          <p className="text-blue-100 text-lg">
            We know how to build great software. Years of product and engineering experience make us much more than just financial acquirers.
          </p>
        </div>
      </div>
    </section>

    <section className="lg:container mx-auto my-10 md:my-20 lg:my-40 px-5 md:px-20">
      <h2 className="text-3xl lg:text-4xl">
        Our Criteria
      </h2>
      <span className="border-b-2 border-blue-700 w-24 my-6 block"></span>
      <div className="lg:w-9/12 mb-10">
        <p className="text-2xl">
          The rough bounds of what we look for.
          Feel free to reach out even if your business doesn't fit these criteria.
          We love building relationships with owners who might be looking to sell down the road.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        <div className="bg-white p-10 shadow-xl mb-10">
          <h4 className="text-xl mb-2">Track Record & Growth</h4>
          <p>
            3+ years of operational history. Steady growth of 10%–50% per year.
          </p>
        </div>
        <div className="bg-white p-10 shadow-xl mb-10">
          <h4 className="text-xl mb-2">Revenue & Profitability</h4>
          <p>
            $1M to $7M in annual recurring revenue. Profitable.
          </p>
        </div>
        <div className="bg-white p-10 shadow-xl mb-10">
          <h4 className="text-xl mb-2">Product & Churn</h4>
          <p>
            Your customers love your product, so your churn is low.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-blue-700 text-white py-20 md:mt-20 xl:mt-40">
      <div className="lg:container mx-auto px-5 md:px-20">
        <h2 className="text-3xl lg:text-4xl text-blue-200">
          Why Sell To Us?
        </h2>
        <span className="border-b-2 border-blue-400 w-24 my-6 block"></span>
        <div className="lg:w-9/12 mb-10">
          <p className="text-2xl text-blue-100">
            We’ll take care of your customers and employees, invest in growing the business, and provide an outstanding outcome for you.
            <br/>
            <br/>
            We're not a massive private equity firm with a drawn-out process that will waste months of your time.
            We'll be clear in our communication, quick in our due diligence, and our partners will work closely with you to determine whether a sale makes sense.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-blue-200 py-40">
      <div className="lg:container mx-auto px-5 md:px-20">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            Want a free valuation of your business?
          </h2>
          <span className="border-b-2 border-blue-700 w-24 my-6 block mx-auto"></span>
          <p className="text-xl lg:text-2xl mb-10">
            We'll tell you what we think it's worth, free of cost.
          </p>
          <Link href="/contact" className="inline-block text-xl font-bold bg-blue-700 text-white hover:shadow-xl py-3 px-5">
            Get a Free Valuation
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
