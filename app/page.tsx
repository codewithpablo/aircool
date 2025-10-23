import Hero from "@/components/mine/Hero";
import CoursesGallery from "@/components/mine/CoursesGallery";
import HeroMenu from "@/components/mine/HeroMenu";
import TestimonialSection from "@/components/mine/TestimonialSection";
export default function Home() {
  return (
    <>
      <HeroMenu />
      <Hero />
      <h2 className="text-2xl text-center font-semibold my-10">
              Elegí el curso que más se adapte a tus necesidades
            </h2>
     <div className="pb-20">
         <CoursesGallery direction="left" />
      <CoursesGallery direction="right" />
     </div>
        <TestimonialSection />
    </>
  );
}
