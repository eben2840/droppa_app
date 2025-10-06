/* eslint-disable @next/next/no-img-element */
import { Badge, Button } from "#/base";
import { Brands } from "#/Brands";
import { WaitlistForm } from "../WaitlistForm";
import { cn } from "@/lib/utils";

export function HeroSection({
  badge,
  title,
  description,
  buttons,
  image,
  clientsLabel,
  clients,
  showWaitlistForm,
  ...rest
}) {
  return (
    <section {...rest} >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto mt-16 md:mt-32 pb-12">
            {/* <Badge {...badge} /> */}
            <img src="./1 copy.png" alt="Droppa Logo" className="w-24 md:w-32 h-auto mb-4" />
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold title-gradient">
              {title}
            </h1>
            <p className="text-lg md:text-xl px-4">{description}</p>
            {showWaitlistForm ? (
              <div className="mt-8 w-full max-w-md">
                <WaitlistForm />
              </div>
            ) : (
              buttons?.length > 0 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                  {buttons.map((button, index) => (
                    <Button key={index} {...button} />
                  ))}
                </div>
              )
            )}
          </div>
          <div>
            <img
              src={image.src}
              alt={image.alt}
              className={cn("w-full h-auto", image.className)}
            />
          </div>
          <div className="text-sm">{clientsLabel}</div>
          <Brands clients={clients} />
        </div>
      </div>
    </section>
  );
}
