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
            {showWaitlistForm ? (
              <div className="mt-1 mb-5 w-full max-w-md">
                <WaitlistForm />
              </div>
            ) : (
              buttons?.length > 0 && (
                <div className="flex justify-center items-center gap-4 ">
                  {buttons.map((button, index) => (
                    <Button key={index} {...button} />
                  ))}
                </div>
              )
            )}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold title-gradient">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl px-4">{description}</p>
            
            <img src="./Untitled design (1).png" alt="Droppa Logo" className="w-48 md:w-64 h-auto " /> 
{/* 
            <a href="https://apps.apple.com/gh/app/droppa-app/id6754825283" className="">
           <img src="./apple-app-store-travel-awards-globestamp-7.png" width="200" />
           </a>            */}
            
           
           
            
          </div>
          <div>
            <img
              src={image.src}
              alt={image.alt}
              className={cn("w-full h-auto", image.className)}
            />
          </div>
          
          {/* <div className="text-sm">{clientsLabel}</div> */}
          {/* <Brands clients={clients} /> */}
        </div>
      </div>
    </section>
  );
}
