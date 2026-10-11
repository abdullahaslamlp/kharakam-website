import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | KharaKam LLP",
  description:
    "Purpose-built technology solving everyday challenges across Pakistan through thoughtful engineering and quiet reliability.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1: Executive Hero */}
      <section className="relative w-full bg-surface-container-lowest py-space-xl lg:py-margin-lg border-b border-surface-container">
        <div className="max-w-4xl mx-auto px-margin-sm lg:px-margin-lg text-center flex flex-col items-center gap-space-lg">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-low rounded-full text-secondary font-label-sm text-label-sm uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>KharaKam LLP</span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-primary font-semibold tracking-tight">
            Purpose-built technology solving everyday challenges in Pakistan.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed text-center">
            KharaKam LLP is dedicated to solving real, daily problems faced by people and institutions across Pakistan through thoughtful technology integration. We engineer practical, friction-free systems that replace everyday disorder with quiet reliability—starting from ground realities and building software that genuinely works where it matters most.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs">
            <Link
              href="/connect"
              className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-title-md text-title-md px-space-lg py-space-md rounded-lg shadow-sm hover:bg-secondary transition-colors duration-150"
            >
              <span>Connect With Us</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-primary border border-surface-container font-title-md text-title-md px-space-lg py-space-md rounded-lg hover:bg-surface-container-low transition-colors duration-150"
            >
              <span>View Products &amp; Solutions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Core Operating Pillars */}
      <section className="w-full bg-surface py-space-xl lg:py-margin-lg">
        <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin-lg">
          <div className="flex flex-col items-center text-center gap-space-xs mb-space-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
              Foundational Standard
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-semibold tracking-tight">
              Institutional Reliability by Design
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-xs">
              Our governing principles guarantee that every initiative adheres to practical engineering, transparent standards, and localized durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Pillar 01 */}
            <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between border border-surface-container transition-all hover:shadow-md">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary font-semibold">
                    01 / PRINCIPLE
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    public
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                  Rooted in Realities
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We don&apos;t build software for speculative trends. We focus on physical bottlenecks, community coordination, and local institutional hurdles.
                </p>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between border border-surface-container transition-all hover:shadow-md">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary font-semibold">
                    02 / STANDARD
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    verified
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                  Engineered for Reliability
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Systems built to function reliably in diverse operating conditions, ensuring zero downtime for mission-critical routines.
                </p>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between border border-surface-container transition-all hover:shadow-md">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary font-semibold">
                    03 / PHILOSOPHY
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    accessibility_new
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
                  Accessible by Design
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  User interfaces designed for intuitive adoption across administrators, staff, parents, and field operators alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Institutional Partner Banner */}
      <section className="w-full bg-surface-container-low py-space-xl border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin-lg">
          <div className="bg-surface-container-lowest p-space-xl rounded-xl border border-surface-container flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                Direct Communication
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-semibold">
                Connect with our engineering and operations team.
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Reach out directly to discuss deployments, institutional engagements, or technology partnerships.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md">
              <Link
                href="/connect"
                className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-title-md text-title-md px-space-lg py-space-md rounded-lg shadow-sm hover:bg-secondary transition-colors duration-150"
              >
                <span>Direct Desk Contact</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <a
                href="mailto:kharakamllp@gmail.com"
                className="inline-flex items-center gap-space-xs bg-surface-container-low text-primary font-title-md text-title-md px-space-lg py-space-md rounded-lg hover:bg-surface-container transition-colors duration-150"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>kharakamllp@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
