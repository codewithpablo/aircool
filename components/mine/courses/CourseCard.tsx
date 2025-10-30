import Link from "next/link";
import Image from "next/image";
import AuthButton from "../other/AuthButton";

interface CourseCardProps {
  name: string;
  image: string;
  category: string;
  amountOfLessons: number;
  totalHours: number;
  link: string;
  price: number;
  // ✅ Agregamos description opcional
  description?: string | React.ReactNode;
}

export const CourseCard = ({
  name,
  image,
  category,
  amountOfLessons,
  totalHours,
  link,
  price,
  description,
}: CourseCardProps) => {
  return (
    <div className="bg-white h-80 rounded-3xl overflow-hidden border transition-transform hover:scale-[1.02] my-3 z-60">
      <div className="relative h-32">
        <Image
          src={image}
          alt={name}
          fill
          className="w-full object-cover rounded-tr-2xl rounded-tl-2xl"
        />
        <p className="bg-white p-2 text-[12px] px-4 rounded-full text-gray-800 font-semibold absolute bottom-1 right-1 leading-relaxed">
          $ {price}
        </p>
      </div>

      <div className="px-6 py-3 flex flex-col justify-between max-h-full min-h-[180px] relative z-50">
        <div className="relative h-32 p-2">
          <h3 className="font-semibold text-sm mb-2 text-center">{name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center whitespace-nowrap">
            {category}
          </p>
          <div className="flex justify-between">
            <p className="text-gray-600 text-sm leading-relaxed">
              {amountOfLessons} lecciones
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {totalHours} horas
            </p>
          </div>

          {/* ✅ Renderizamos la descripción si existe */}
          {description && (
            <p className="text-gray-700 text-sm mt-2 text-center">{description}</p>
          )}
        </div>

        <AuthButton text="Editar" />
      </div>
    </div>
  );
};
