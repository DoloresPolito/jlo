import Header from "../src/components/layout/Header";
import About from "../src/components/sections/About";
import Faqs from "../src/components/sections/Faqs";
import BigPhrase from "../src/components/ui/BigPhrase";
import Contact from "../src/components/sections/Contact";
import Hero from "../src/components/sections/Hero";
import Benefits from "../src/components/sections/Benefits";
// import Work from "../src/components/sections/Work"
import Reviews from "../src/components/sections/Reviews"

export default function Home() {

  const phrase1 = "El neurocoaching no es terapia, ni mentoría, es un espacio para entender cómo funciona tu mente y tu cerebro y aprender a usarlo a tu favor."
  const phrase2 = "Entrená tu mente para crear los cambios que buscás."


  return (
    <div>
      <Header />
      <Hero/>
      <Benefits id="benefits"/>
      <About id="about"/>
      <BigPhrase phrase={phrase1}/>
      {/* <Work id="work"/> */}
      <Faqs id="faqs"/>
      <BigPhrase phrase={phrase2}/>
      <Reviews id="reviews"/>
      <Contact id="contact"/>
    </div>
  );
}
