import { Box } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import SeasonCollection from "../../Components/SeasonCollection/SeasonCollection";
import GiftHampers from "../../Components/GiftHampers/GiftHampers";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import ImageSection from "../../Components/ImageSection/ImageSection";
import SnacksSection from "../../Components/SnacksSection/SnacksSection";
import FeatureSection from "../../Components/FeatureSection/FeatureSection";
import Footer from "../../Components/Footer/Footer";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <SeasonCollection />
      <GiftHampers />
      <NewArrivals />
      <ImageSection />
      <SnacksSection />
      <FeatureSection />
      <TestimonialSection />
      <Footer />
    </Box>
  );
};

export default Home;
