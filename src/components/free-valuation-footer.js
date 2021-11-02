import { Link } from "gatsby"
import React from "react"

const FreeValuationFooter = () => (
  <section className="py-20 lg:py-40">
    <div className="lg:container mx-auto px-5 md:px-20">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
          Want a free valuation of your business?
        </h2>
        <span className="border-b-2 border-blue-700 w-24 my-6 block mx-auto"></span>
        <p className="text-xl lg:text-2xl mb-10">
          We'll get you a quick ballpark estimate and show you how we calculated it.
        </p>
        <Link to="/contact" className="inline-block text-xl font-bold bg-blue-700 text-white hover:shadow-xl py-3 px-5">
          Get a Free Valuation
        </Link>
      </div>
    </div>
  </section>
)

export default FreeValuationFooter
