import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'
import TestimonialCards from '@/components/TestimonialCards';
import WhyChooseUs from "@/components/whyChooseUs";
import UpcomingWebiners from "@/components/UpcomingWebiners";
import Instructors from '@/components/Instructors';
import Footer from '@/components/Footer';


export default function Home(){
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-3xl text-center">Chai aur code</h1>*/ }
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs />
      <TestimonialCards/>
      <UpcomingWebiners/>
      <Instructors/>
      <Footer/>
    </main>
  )
} 