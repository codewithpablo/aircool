import Hero from "@/components/mine/Hero";
import CoursesGallery from "@/components/mine/CoursesGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <h2 className="text-4xl text-center font-semibold my-10">
              Elegí el curso que más se adapte a tus necesidades
            </h2>
     <div className="pb-20">
         <CoursesGallery direction="left" />
      <CoursesGallery direction="right" />
     </div>
    </>
  );
}
