import Image from "next/image";

import FeaturedCourses from "@/components/FeaturedCourses";
// import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

import headphones2 from "../../public/headphones2.jpg";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Image
        src={headphones2}
        layout="fill"
        objectFit="cover"
        alt="Background image"
      />
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      {/* <Footer /> */}
    </main>
  );
}
