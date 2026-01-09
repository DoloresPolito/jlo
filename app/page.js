import Header from "../src/components/layout/Header";
import About from "../src/components/sections/About";
import Faqs from "../src/components/sections/Faqs";
import BigPhrase from "../src/components/ui/BigPhrase"
export default function Home() {

  const phrase1 = "El neurocoaching no es terapia, ni mentoría, es un espacio para entender cómo funciona tu mente y tu cerebro y aprender a usarlo a tu favor."
  const phrase2 = "Entrená tu mente para crear los cambios que buscás."


  return (
    <div>
      <Header />
      <About />
      <BigPhrase phrase={phrase1}/>
      <Faqs />
      <BigPhrase phrase={phrase2}/>
    </div>
  );
}
