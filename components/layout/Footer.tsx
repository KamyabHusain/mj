import Link from "next/link";
import { PROGRAMMES, SCHOOLS, RESEARCH_DEPARTMENTS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Maktabah Jafariyah</h3>
            <p className="text-sm leading-relaxed">
              A research-driven knowledge academy providing modern education
              keeping in mind our traditional values, thereby creating
              employment opportunities and inculcating good character.
            </p>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Programmes</h3>
            <ul className="space-y-2">
              {PROGRAMMES.map((prog) => (
                <li key={prog.slug}>
                  <Link
                    href={prog.href}
                    className="text-sm transition-colors hover:text-secondary"
                  >
                    {prog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Schools */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Schools &amp; Centres</h3>
            <ul className="space-y-2">
              {SCHOOLS.slice(0, 7).map((school) => (
                <li key={school.slug}>
                  <Link
                    href={school.href}
                    className="text-sm transition-colors hover:text-secondary"
                  >
                    {school.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admission"
                  className="text-sm transition-colors hover:text-secondary"
                >
                  Admission
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-sm transition-colors hover:text-secondary"
                >
                  Media
                </Link>
              </li>
              {RESEARCH_DEPARTMENTS.map((dept) => (
                <li key={dept.slug}>
                  <Link
                    href={dept.href}
                    className="text-sm transition-colors hover:text-secondary"
                  >
                    {dept.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Maktabah Jafariyah Knowledge
            &amp; Research Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
