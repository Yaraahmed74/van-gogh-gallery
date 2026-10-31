import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Story from "./Story";
import StarryNight from "./StarryNight";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <StarryNight />
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;
