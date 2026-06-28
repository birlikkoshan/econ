import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Legislation } from "@/sections/Legislation";
import { Partners } from "@/sections/Partners";
import { Services } from "@/sections/Services";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Legislation />
      <Partners />
      <Contact />
    </>
  );
}
