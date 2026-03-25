export default function AboutSection() {
  return (
    <section className="bg-white">
      {/* Intro */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold leading-tight text-[#44535b] sm:text-4xl lg:text-[40px]">
          Maktabah Jafariyah
          <br />
          Knowledge and Research Academy
        </h1>
        <p className="text-sm leading-relaxed text-[#676767] text-justify sm:text-base">
          If we wish to become a developed nation, we need to fight the demon of
          illiteracy. It is the duty of every educated citizen to contribute in
          this area. &lsquo;Maktabah Jafariyah&rsquo; is a research-driven
          knowledge academy conceptualised for this purpose by &lsquo;Ahmed
          Vikas Mandal&rsquo; (AVM). The foundation stone was laid by Founder,{" "}
          <strong className="font-bold text-[#44535b]">
            Hazrat Alhaj Pir Syed Mohammad MujahidHusain Jafri (ra.) on
            Thursday 22nd November 2007.
          </strong>
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="relative overflow-hidden pb-16 sm:pb-24">
        {/* Watermark text */}
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
        >
          <span className="absolute left-0 top-1/4 -translate-y-1/4 text-[100px] font-bold leading-none text-[#f6f6f7] sm:text-[140px] lg:text-[180px]">
            Vision
          </span>
          <span className="absolute right-0 top-1/4 -translate-y-1/2 text-[100px] font-bold leading-none text-[#f6f6f7] sm:text-[140px] lg:text-[180px]">
            Mission
          </span>
        </div> */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
            {/* Vision */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <h2 className="text-3xl font-bold text-[#82c341] sm:text-3xl">
                  Vision
                </h2>
                <span className="h-[2px] w-20 bg-[#82c341]" />
              </div>
              <ul className="list-disc space-y-3 pl-6 text-sm leading-relaxed text-[#676767] text-justify sm:text-base">
                <li>
                  To be a research driven knowledge academy that provides modern
                  education keeping in mind our traditional values, thereby
                  creating not only employment opportunities but also
                  inculcating good character and humaneness in our students.
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <h2 className="text-2xl font-bold text-[#82c341] sm:text-3xl">
                  Mission
                </h2>
                <span className="h-[2px] w-20 bg-[#82c341]" />
              </div>
              <ul className="list-disc space-y-3 pl-6 text-sm leading-relaxed text-[#676767] text-justify sm:text-base">
                <li>
                  To create an infrastructure that produces a dedicated,
                  disciplined and intellectual human resource which would help in
                  the nation&apos;s development.
                </li>
                <li>
                  To nurture the quality of love for excellence imbued with moral
                  and spiritual values in our students which would help them in
                  all walks of life.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
