import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import PetTechImage from "../images/pet-tech.jpg"
import MattPic from "../images/matt-profile.png"
import TrevorPic from "../images/trevor-profile.png"
import NicholasPic from "../images/nicholas-profile.png"

const PetTech = () => {
  return (
    <main>
      <SEO title="Pet Tech" />
      <section className="govtech-bg-img bg-cover bg-center" style={{ backgroundImage: `url(${PetTechImage})` }}>
        <div className="bg-blue-700 bg-opacity-80 text-center">
          <div className="lg:container mx-auto px-5 md:px-20">
            <div className="w-10/12 mx-auto py-40 md:py-80 text-white">
              <h1 className="text-2xl md:text-3xl lg:text-5xl sm:leading-normal md:leading-normal lg:leading-normal">
                Sell Your Business to a Team With Deep Pet Industry & Software Experience
              </h1>
              <p className="text-xl md:text-2xl mt-5">

              </p>
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
            We know the software, scaling companies, and the pet industry well.
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
          <h3 className="font-sans text-3xl text-center">
            Advisor and Investor
          </h3>
          <img className="mx-auto mt-10 mb-5" src={MattPic} alt="Matt Bennett" />
          <h4 className="text-2xl font-sans text-center font-normal">Matt Bennett</h4>
          <p className="my-5 mx-auto lg:w-10/12">
            Matt is currently Managing Partner at Longvue, a long-term growth investor that partners with great entrepreneurs & operators to build lasting companies with 10x outcomes.  Matt is also currently a Partner at Talisman Capital Partners, a family office that has built three companies from less than $1M of earnings to north of $1B of EV.
            Prior to Longvue and Talisman, Matt served as Vice President of Corporate Development at MedVet, an operator of emergency and specialty veterinary hospitals, where he led mergers and acquisitions, new partnership opportunities, and other strategic growth initiatives.
            Prior to MedVet, Matt worked for J.P. Morgan in New York City, where he was in the Corporate Strategy division specializing in digital payments, and also in the Investment Banking division, where he worked on a variety of mergers, acquisitions, leveraged buyouts, and capital markets transactions.
            <br/>
            <br/>
            Investor & Board Member @ <a className="underline lg:hover:text-blue-600" href="https://bondvet.com/" target="_blank" rel="noreferrer">Bond Vet</a>
            <br/>
            Investor & Board Observer @ <a className="underline lg:hover:text-blue-600" href="https://www.dogtopia.com/" target="_blank" rel="noreferrer">Dogtopia</a>
            <br/>
            Investor @ <a className="underline lg:hover:text-blue-600" href="https://www.medvetforpets.com/" target="_blank" rel="noreferrer">MedVet</a>
            <br/>
            <br/>
            <a href="https://www.linkedin.com/in/mmbennett/" target="_blank" rel="noreferrer" className="block">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <g fill="#2867B2">
                  <path d="M29.714 0L2.279 0C1.021 0 0 1.036 0 2.307L0 29.693C0 30.964 1.021 32 2.279 32L29.714 32C30.971 32 32 30.964 32 29.693L32 2.307C32 1.036 30.971 0 29.714 0ZM9.671 27.429L4.929 27.429 4.929 12.157 9.679 12.157 9.679 27.429 9.671 27.429ZM7.3 10.071C5.779 10.071 4.55 8.836 4.55 7.321 4.55 5.807 5.779 4.571 7.3 4.571 8.814 4.571 10.05 5.807 10.05 7.321 10.05 8.843 8.821 10.071 7.3 10.071ZM27.45 27.429L22.707 27.429 22.707 20C22.707 18.229 22.671 15.95 20.243 15.95 17.771 15.95 17.393 17.879 17.393 19.871L17.393 27.429 12.65 27.429 12.65 12.157 17.2 12.157 17.2 14.243 17.264 14.243C17.9 13.043 19.45 11.779 21.757 11.779 26.557 11.779 27.45 14.943 27.45 19.057L27.45 27.429Z"/>
                </g>
              </svg>
            </a>
          </p>
          <div className="border-b-2 border-blue-700 w-24 my-20 block mx-auto"></div>
          <h3 className="font-sans text-3xl font-bold text-center">
            Operators
          </h3>
          <div className="md:grid md:grid-cols-2 md:gap-20 mt-5">
            <div className="mb-20 md:mb-0">
              <img className="mx-auto mt-10 mb-5" src={TrevorPic} alt="Trevor Ewen" />
              <h4 className="text-2xl font-sans text-center font-normal">Trevor Ewen</h4>
              <p className="my-5">
                Trevor is a Partner at Southport Ventures and an experienced software engineer, project manager, and real-estate investor.
                He has overseen full-stack teams in clean energy, insurance, finance, and media.
                Notable engagements include Morgan Stanley, HBO, Bloomberg, Honest Buildings (now Procore), RunEnergy, Black Bear Energy, and PRco USA.
                <br/>
                <br/>
                Trevor is a Northwestern University alumnus and holds an MBA from London Business School and Columbia Business School via the joint, global program. He currently lives just outside New York City with his wife and three kids.
              </p>
              <a href="https://www.linkedin.com/in/trevorewen/" target="_blank" rel="noreferrer" className="block">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g fill="#2867B2">
                    <path d="M29.714 0L2.279 0C1.021 0 0 1.036 0 2.307L0 29.693C0 30.964 1.021 32 2.279 32L29.714 32C30.971 32 32 30.964 32 29.693L32 2.307C32 1.036 30.971 0 29.714 0ZM9.671 27.429L4.929 27.429 4.929 12.157 9.679 12.157 9.679 27.429 9.671 27.429ZM7.3 10.071C5.779 10.071 4.55 8.836 4.55 7.321 4.55 5.807 5.779 4.571 7.3 4.571 8.814 4.571 10.05 5.807 10.05 7.321 10.05 8.843 8.821 10.071 7.3 10.071ZM27.45 27.429L22.707 27.429 22.707 20C22.707 18.229 22.671 15.95 20.243 15.95 17.771 15.95 17.393 17.879 17.393 19.871L17.393 27.429 12.65 27.429 12.65 12.157 17.2 12.157 17.2 14.243 17.264 14.243C17.9 13.043 19.45 11.779 21.757 11.779 26.557 11.779 27.45 14.943 27.45 19.057L27.45 27.429Z"/>
                  </g>
                </svg>
              </a>
            </div>
            <div className="mb-20 md:mb-0">
              <img className="mx-auto mt-10 mb-5" src={NicholasPic} alt="Nicholas Evans" />
              <h4 className="text-2xl font-sans text-center font-normal">Nicholas Evans</h4>
              <p className="my-5">
                Nicholas is a Partner at Southport Ventures and former product manager at Reverb/Etsy.
                He was the fifth employee at Reverb.com and helped grow it to billions in total dollars transacted and tens of millions in revenue, culminating in an acquisition by Etsy.
                He spent the last few years leading the Buyer Experience group at Reverb and driving over a hundred million in incremental gross merchandise sales through product improvements and experimentation.
                Prior to Reverb, he was a design & innovation consultant at Gravitytank and IA Collaborative. Notable engagements include GE, Samsung, SC Johnson, OfficeMax, and ClubCorp.
                <br/>
                <br/>
                Nicholas holds undergraduate and graduate degrees from Northwestern University. He currently lives in Chicago with his wife and two kids.
              </p>
              <a href="https://www.linkedin.com/in/nicholasaevans/" target="_blank" rel="noreferrer" className="block">
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

export default PetTech
