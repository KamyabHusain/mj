import Link from "next/link";
import Image from "next/image";
import type { Programme } from "@/lib/types";

interface ProgrammeCardProps {
  programme: Programme;
}

export default function ProgrammeCard({ programme }: ProgrammeCardProps) {
  return (
    <Link href={programme.href} className="group block bg-white">
      <div className="overflow-hidden">
        <Image
          src={programme.image}
          alt={programme.title}
          width={316}
          height={292}
          unoptimized
          className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[260px] lg:h-[292px]"
        />
      </div>
      <div className="px-3 py-4">
        <h3 className="mb-1 text-lg font-bold text-[#44535b] sm:text-xl">
          {programme.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#676767]">
          {programme.description}
        </p>
      </div>
    </Link>
  );
}
