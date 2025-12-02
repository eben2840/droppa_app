import Head from "next/head";
import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  TestimonialSection,
  FaqSection,
  Footer,
  PricingSection,
  LargeFeatureSection,
  CtaSection,
} from "../components/sections";

import {
  header,
  faqs,
  testimonials,
  features,
  pricing,
  clients,
  footer,
} from "@/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Droppa</title>
      </Head>
      <Header
        logo={header.logo}
        links={header.links}
        buttons={header.buttons}
      />
      
     <HeroSection
        id="home"
        badge={{
          href: "#",
          icon: "tabler:arrow-right",
          label: "Smart Navigation",
        }}
        
        buttons={[{ label: "Download Droppa App", href: "https://apps.apple.com/gh/app/droppa-app/id6754825283", color: "dark" }]}
        title="Droppa"
        description="Navigate smarter with Droppa, your AI-powered location assistant."
        // showWaitlistForm={true}
        image={{
          // src: "./tablet-mockup.png",
          // alt: "Product Screenshot on Tablet",
          // className: "w-full h-auto",
        }}
        


        clientsLabel="Be the first to try Droppa"
        clients={clients}
      /> 


{/* <FaqSection
        id="faqs"
        title="Welcome to Droppa!"
        description="What if finding your way didn’t have to be confusing?"
        buttons={[
          {
            label: "Contact Support",
            href: "#",
            color: "white",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={faqs}
      /> */}
      {/* <FeatureSection
        id="features"
        title="Discover Our Amazing Features"
        description="Explore the wide range of powerful features that our product offers. From advanced analytics to seamless integrations, we have everything you need to succeed."
        features={features}
      /> */}
      {/* <LargeFeatureSection
        title="Stay on top of your business"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      /> */}
        


      {/* <LargeFeatureSection
        reverse={true}
        title="Ultra-fast, and built for the modern world."
        description="Your engine for instant discovery: food, travel, gyms, cafés, and hidden gems."
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      /> */}
      {/* <PricingSection
        id="pricing"
        title="Pricing for Everyone"
        description="Choose a plan that works for you. All plans include a 7-day free trial."
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: "Plans",
        }}
        pricing={pricing}
      /> */}
      {/* <TestimonialSection
        id="testimonials"
        title="Love from our users all over"
        description="A journey from corporate to startup founder has been a thrilling ride of innovation, resilience, and relentless pursuit of dreams."
        badge={{
          leading: true,
          icon: "tabler:heart",
          label: "TESTIMONIALS",
        }}
        testimonials={testimonials}
        button={{
          icon: "tabler:brand-instagram",
          label: "Follow Us & Share on",
          href: "https://www.instagram.com/dr.ohenemills/",
          color: "white",
        }}
      /> */}
     
      {/* <CtaSection
        title="Ready to get started?"
        description="I still remember the day I got lost in Germany. No signal, no clue, just vibes and Google Maps pretending to help."
        buttons={[{ label: "Start for Free", href: "#", color: "dark" }]}
      /> */}
      {/* <Footer
        id="footer"
        copyright={footer.copyright}
        logo={footer.logo}
        social={footer.social}
        links={footer.links}
      /> */}
    </>
  );
}
