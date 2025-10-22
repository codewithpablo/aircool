import Link from "next/link";
import Image from "next/image";

interface CourseCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

export const CourseCard = ({ name, image, description, link }: CourseCardProps) => {
  return (
    <div className=" rounded-3xl overflow-hidden  border  transition-transform hover:scale-[1.02]   my-3 z-60">
      <div className="relative h-32">
        <Image
        src={image}
        alt={name}
        fill
        className="w-full  object-cover  rounded-tr-2xl rounded-tl-2xl"
      />
      </div>
      <div className="px-6 py-3 flex flex-col justify-between h-64 relative z-50">
        <div>
          <h3 className="text-xl font-semibold  mb-2">{name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
        <Link
          href={link}
          className="mt-4 inline-block  text-white font-medium text-sm py-2 px-4 rounded-xl text-center  transition"
        >
          Ver curso
        </Link>
      </div>
    </div>
  );
};
