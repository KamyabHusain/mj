import Link from "next/link";
import { PROGRAMMES, SCHOOLS } from "@/lib/constants";

interface MegaMenuProps {
  onClose: () => void;
}

export default function MegaMenu({ onClose }: MegaMenuProps) {
  return (
    <div className="absolute left-0 right-0 z-40 border-t border-primary-light bg-white shadow-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8">
        {/* Programmes column */}
        <div>
          <Link
            href="/academics/programmes"
            onClick={onClose}
            className="mb-4 inline-block text-lg font-bold text-[#82c341]"
          >
            Programmes
          </Link>
          <ul className="space-y-2">
            {PROGRAMMES.map((prog) => (
              <li key={prog.slug}>
                <Link
                  href={prog.href}
                  onClick={onClose}
                  className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-surface hover:text-primary"
                >
                  {prog.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Schools & Centres column */}
        <div>
          <Link
            href="/academics/schools-centres"
            onClick={onClose}
            className="mb-4 inline-block text-lg font-bold text-[#82c341]"
          >
            Schools &amp; Centres
          </Link>
          <ul className="space-y-2">
            {SCHOOLS.map((school) => (
              <li key={school.slug}>
                <Link
                  href={school.href}
                  onClick={onClose}
                  className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-surface hover:text-primary"
                >
                  {school.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
