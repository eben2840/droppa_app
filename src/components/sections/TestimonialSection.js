/* eslint-disable @next/next/no-img-element */
import { SectionHeading } from "#/SectionHeading";
import { TestimonialCard } from "#/cards";
import { Button } from "#/base";

export function TestimonialSection({
  title,
  description,
  badge,
  testimonials,
  button,
  ...rest
}) {
  return (
    <section
      className="py-12 md:py-24 mt-5"
      {...rest}
     
    >
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          // badge={badge}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6 md:my-10">
          {testimonials &&
            testimonials.map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
        </div>
        <div className="text-center mt-12">
          <Button {...button} className="shadow-lg" />
        </div>
      </div>
    </section>
  );
}
