import { SectionHeading } from "#/SectionHeading";

export function CtaSection({ title, description, buttons, ...rest }) {
  return (
    <section className="bg-base-100 py-12 md:py-20 md:px-4" {...rest}>
      <div className="container mx-auto px-4 py-6 md:py-10 rounded-3xl ">
        <div className="max-w-2xl flex flex-col justify-center items-center mx-auto">
          <SectionHeading
            align="center"
            title={title}
            description={description}
            buttons={buttons}
          />
          
          <a href="https://apps.apple.com/gh/app/droppa-app/id6754825283" className="mt-5">
           <img src="./apple-app-store-travel-awards-globestamp-7.png" width="200" />
           </a>
        </div>
      </div>
    </section>
  );
}
