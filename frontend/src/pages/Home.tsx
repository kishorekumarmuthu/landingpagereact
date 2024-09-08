import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { StandOut } from "../components/StandOut";
import { Testimonial } from "../components/Testomonial";
import { WhyChooseUs } from "../components/WhyChooseUs";

function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonial />
      <StandOut />
      <Footer />
    </div>
  );
}

export default Home;
