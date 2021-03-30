import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import GovTechImage from "../images/government-building.jpg"
import StevePic from "../images/steve-profile.png"
import TrevorPic from "../images/trevor-profile.png"
import NicholasPic from "../images/nicholas-profile.png"

const About = () => {
  return (
    <main>
      <SEO title="GovTech" />
      <section className="govtech-bg-img bg-cover bg-center" style={{ backgroundImage: `url(${GovTechImage})` }}>
        <div className="bg-blue-700 bg-opacity-80 text-center">
          <div className="lg:container mx-auto px-5 md:px-20">
            <div className="lg:w-10/12 xl:w-8/12 mx-auto py-40 md:py-60 text-white">
              <h1 className="text-3xl lg:text-4xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">
                Sell Your Business to Partners with Software & GovTech Experience
              </h1>
              <p className="text-xl md:text-2xl mt-5">
                We buy and grow profitable software businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:container mx-auto my-20 lg:my-40 px-5">
        <div className="lg:w-9/12 mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl">
            Why Sell To Us?
          </h2>
          <div className="border-b-2 border-blue-700 w-24 my-6 block mx-auto"></div>
          <p className="text-xl leading-normal">
            We’re an operational team with deep software experience partnered up with a GovTech founder and investor.
            We’ll take care of your customers and employees, invest in growing your business, and provide an outstanding outcome for you.
            <br/>
            <br/>
            We aren't a massive private equity firm with a big portfolio, a bunch of deals to juggle, and a drawn-out process.
            We're a team of product geeks and technologists looking to buy and operate a great business.
            We enjoy talking about your product, tech, and the carefully crafted experience you've created over drilling you about your financials.
            We'll drive growth through innovation, experimentation, and investing in people, not through cost cutting and financial gymnastics.
          </p>
        </div>
      </section>

      <section className="bg-blue-200 py-20 lg:py-40">
        <div className="lg:container mx-auto px-5 md:px-20">
          <h2 className="text-3xl lg:text-4xl text-center">
            Who We Are
          </h2>
          <div className="border-b-2 border-blue-700 w-24 my-6 block mx-auto"></div>
          <h3 className="font-sans text-xl md:text-2xl text-center font-normal">
            The GovTech Experience and Lead Investor
          </h3>
          <img className="mx-auto my-10" src={StevePic} alt="Steve Ressler" />
          <h4 className="text-2xl font-sans text-center">Steve Ressler</h4>
          <p className="mt-5">
            Steve is a serial entrepreneur and CEO and an active investor in search funds. He was the founder and CEO of GovLoop, an online community connecting over 250,000+ government employees, which he successfully sold in 2009. He was also the Chief Marketing Officer of Granicus, one of the largest and fastest-growing software platforms serving state and local governments under Vista Equity Partners' ownership.  He was most recently President of Callyo, a software and technology solutions provider for law enforcement, which he grew and ultimately led the sale of to Motorola Solutions in 2020.
            <br/>
            <br/>
            He’s also a third-generation government employee, having started his career at the Department of Homeland Security (DHS) where he worked for five years in a range of technology and counterterrorism roles. He is passionate about sharing the lessons and best practices he has learned founding, running and managing small software businesses with entrepreneurs pursuing entrepreneurship through acquisition. He targets investing in 10-20 acquisition investments per year, with a majority being veteran-led. Steve, his wife and two boys live in Washington, DC and he spends his free time with his family playing Roblox, falling behind his kids’ Spanish skills, and perfecting his latte art.
          </p>
          <div className="border-b-2 border-blue-700 w-24 my-10 lg:my-20 block mx-auto"></div>
          <h3 className="font-sans text-xl md:text-2xl font-normal text-center">
            The Operators
          </h3>
          <div className="md:grid md:grid-cols-2 md:gap-20 mt-5">
            <div className="mb-20 md:mb-0">
              <img className="mx-auto my-10" src={TrevorPic} alt="Trevor Ewen" />
              <h4 className="text-2xl font-sans text-center">Trevor Ewen</h4>
              <p className="mt-5">
                Trevor is a Partner at Southport Ventures and an experienced software engineer, project manager, and real-estate investor.
                He has overseen full-stack teams in clean energy, insurance, finance, and media.
                Notable engagements include Morgan Stanley, HBO, Bloomberg, Honest Buildings (now Procore), RunEnergy, Black Bear Energy, and PRco USA.
                He has an MBA from London Business School and Columbia Business School via the joint, global program.
                <br/>
                <br/>
                Trevor currently resides with his wife Diane in Weehawken, NJ, just outside of New York City.
              </p>
            </div>
            <div className="mb-20 md:mb-0">
              <img className="mx-auto my-10" src={NicholasPic} alt="Nicholas Evans" />
              <h4 className="text-2xl font-sans text-center">Nicholas Evans</h4>
              <p className="mt-5">
                Nicholas is a Partner at Southport Ventures and an experienced product manager.
                He was the fifth employee at Reverb.com and helped grow it to billions in total dollars transacted and tens of millions in revenue, culminating in an acquisition by Etsy.
                He spent the last few years leading the Buyer Experience efforts at Reverb and driving over a hundred million in incremental gross merchandise sales through product improvements and experimentation.
                Prior to Reverb, he was a design & innovation consultant at Gravitytank and IA Collaborative. Notable engagements include GE, Samsung, SC Johnson, OfficeMax, and ClubCorp.
                <br/>
                <br/>
                Nicholas lives in Chicago, IL with his wife and two daughters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-40">
        <div className="lg:container mx-auto px-5 md:px-20">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              Want a free valuation of your business?
            </h2>
            <span className="border-b-2 border-blue-700 w-24 my-6 block mx-auto"></span>
            <p className="text-xl lg:text-2xl mb-10">
              We'll tell you what we think it's worth, free of cost.
            </p>
            <Link to="/contact" className="inline-block text-xl font-bold bg-blue-700 text-white hover:shadow-xl py-3 px-5">
              Get a Free Valuation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
