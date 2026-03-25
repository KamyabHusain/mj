import Link from "next/link";
import Image from "next/image";
import type { ResearchDepartment } from "@/lib/types";

interface ResearchCardProps {
  department: ResearchDepartment;
}

export default function ResearchCard({ department }: ResearchCardProps) {
  return (
    <Link
      href={department.href}
      className="group flex items-center gap-3 rounded-sm border border-white pr-4 transition-all duration-300 hover:bg-white/10 sm:pr-5 lg:gap-6 lg:pr-6"
    >
      <div className="shrink-0">
        <Image
          src={department.image}
          alt={department.title}
          width={170}
          height={150}
          unoptimized
          className="h-[120px] w-[120px] object-contain sm:h-[130px] sm:w-[140px] lg:h-[150px] lg:w-[170px]"
        />
      </div>
      <p className="min-w-0 text-sm font-medium leading-snug text-white sm:text-base lg:text-md">
        {department.title}
      </p>
    </Link>
  );
}
