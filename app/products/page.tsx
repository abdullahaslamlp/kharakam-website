"use client";

import { useState } from "react";
import SafePassModal from "@/components/SafePassModal";

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-16rem)]">
      {/* Catalogue Header */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1440px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="flex flex-col max-w-4xl">
            <div className="flex items-center gap-space-xs mb-space-sm">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium">
                KharaKam · Products Catalogue
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-sm font-semibold">
              Purpose-Built Software Platforms
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Engineered software solutions solving fundamental daily bottlenecks for institutions, campuses, and communities across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full bg-surface pb-space-xl">
        <div className="max-w-[1440px] mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* SafePass Flagship Card */}
            <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-md p-space-md md:p-space-xl transition-all duration-300 hover:shadow-xl flex flex-col justify-between group border border-surface-container">
              <div className="flex flex-col space-y-space-md">
                <div className="flex items-center justify-between flex-wrap gap-space-xs">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container text-on-secondary-container">
                    <span className="material-symbols-outlined text-[14px]">
                      verified
                    </span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                      Flagship Institutional Product
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm px-space-sm py-space-xs rounded bg-surface-container-low text-secondary font-medium">
                    Live Institutional Testing
                  </span>
                </div>

                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight group-hover:text-secondary transition-colors font-semibold">
                    SafePass
                  </h2>
                  <p className="font-title-lg text-title-lg text-secondary mt-space-xs font-medium">
                    Smart Campus Dismissal &amp; Gate Logistics System
                  </p>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Automated real-time campus dismissal, geofence radius arrival triggers, and dedicated role-based portal access designed to eliminate school gate gridlock and keep students safe.
                </p>

                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface text-on-surface-variant font-label-md text-label-md border border-surface-container">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      satellite_alt
                    </span>
                    GPS Geofencing
                  </span>
                  <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface text-on-surface-variant font-label-md text-label-md border border-surface-container">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      shield_person
                    </span>
                    Multi-Portal Gateway
                  </span>
                  <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface text-on-surface-variant font-label-md text-label-md border border-surface-container">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      campaign
                    </span>
                    Real-Time In-Classroom Calling
                  </span>
                  <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface text-on-surface-variant font-label-md text-label-md border border-surface-container">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      devices
                    </span>
                    Zero Hardware Requirement
                  </span>
                </div>
              </div>

              <div className="pt-space-lg flex flex-wrap items-center justify-between gap-space-md border-t border-surface-container mt-space-lg">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="cursor-pointer inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded bg-primary text-on-primary font-title-md text-title-md hover:bg-secondary transition-colors duration-200 shadow-sm"
                >
                  <span>View SafePass Platform Details</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
                <a
                  href="mailto:kharakamllp@gmail.com?subject=Inquiry%20Regarding%20SafePass"
                  className="font-title-md text-title-md text-secondary hover:text-on-surface transition-colors flex items-center gap-space-xs"
                >
                  Request Demonstration{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>

            {/* KharaKam Labs Card */}
            <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-space-md md:p-space-lg border border-surface-container flex flex-col justify-between shadow-sm">
              <div className="space-y-space-md">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px]">
                    engineering
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                    KharaKam Labs · Pipeline
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-semibold">
                  Next Institutional Platform
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Currently developing custom workflow automation tools for civic administration and educational campus facilities in Pakistan.
                </p>
                <div className="p-space-sm rounded bg-surface space-y-space-xs border border-surface-container">
                  <span className="font-label-sm text-label-sm text-outline uppercase block font-medium">
                    Development Status
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    Early Architectural Prototyping
                  </span>
                </div>
              </div>
              <div className="pt-space-md border-t border-surface-container mt-space-md">
                <span className="font-label-sm text-label-sm text-outline">
                  Release announcements issued directly via corporate inquiries.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SafePass Modal */}
      <SafePassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
