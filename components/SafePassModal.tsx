"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface SafePassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabKey = "admin" | "guardian" | "transporter" | "gateway";

interface ModuleData {
  id: TabKey;
  tabLabel: string;
  category: string;
  title: string;
  description: string;
  specs: string[];
  deployment: string;
  screenTitle: string;
  screenResolution: string;
  imageSrc: string;
}

const modules: ModuleData[] = [
  {
    id: "admin",
    tabLabel: "1. Admin Dispatch Queue",
    category: "Core Campus Console",
    title: "Admin Portal & Live Dispatch Queue",
    description:
      "Centrally monitors perimeter entrances, auto-queues arriving student records as parents cross the 500m geofence radius, and broadcasts real-time audio-visual chimes to designated homerooms.",
    specs: [
      "Live chronological arrivals list synchronized with campus gate operators",
      "Single-click student status toggles (Queued → Called → Dispatched)",
      "Instant lockdown and perimeter pause functionality for emergency protocols",
    ],
    deployment: "Head Office, Security Command Gates, Classroom Smart Displays",
    screenTitle: "Console Screen Preview · Admin Dispatch",
    screenResolution: "Resolution 1917 x 896",
    imageSrc: "/images/safepass-admin.png",
  },
  {
    id: "guardian",
    tabLabel: "2. Guardian Check-in",
    category: "Parent Experience",
    title: "Guardian Arrival & Distance Check-in",
    description:
      "Allows registered guardians to notify campus upon departure, dynamically transmitting distance-to-gate calculations without requiring manual texting or distracted driving hazards.",
    specs: [
      "Background proximity trigger calculated upon vehicle entering perimeter",
      "Multiple child enrollment association across staggered school grades",
      "Authorized proxy driver assignment with verification credentials",
    ],
    deployment: "iOS / Android Mobile Web & Native Progressive Client",
    screenTitle: "Console Screen Preview · Guardian Check-in",
    screenResolution: "Resolution 1917 x 900",
    imageSrc: "/images/safepass-guardian.png",
  },
  {
    id: "transporter",
    tabLabel: "3. Transporter Van Sync",
    category: "Fleet Coordination",
    title: "Transporter / Van Route Sync",
    description:
      "Tailored explicitly for school van contractors and carpool operators. Enables bulk student release verification, preventing premature lot clustering and ensuring boarding proceeds methodically.",
    specs: [
      "Bulk passenger rosters tied directly to designated van parking bays",
      "Attendance reconciliation prior to lot departure clearance",
      "Instant parent notifications upon vehicle campus egress",
    ],
    deployment: "Van Driver Handheld Devices & Campus Traffic Attendants",
    screenTitle: "Console Screen Preview · Transporter Portal",
    screenResolution: "Resolution 1917 x 913",
    imageSrc: "/images/safepass-transporter.png",
  },
  {
    id: "gateway",
    tabLabel: "4. Access Gateway",
    category: "Security Infrastructure",
    title: "Role-Based Access Gateway",
    description:
      "Strictly demarcated credential boundaries verifying device identity, operational jurisdiction, and encrypted session management for high-security campus environments.",
    specs: [
      "Isolated credentials for Admin, Parent, and Transporter workflows",
      "Device session validation preventing unauthorized pick-up proxying",
      "Audit-ready activity logs archived daily for compliance reviews",
    ],
    deployment: "Multi-Tenant Unified Access Layer",
    screenTitle: "Gateway Authentication Screen",
    screenResolution: "Clean Cropped Preview",
    imageSrc: "/images/safepass-gateway.png",
  },
];

export default function SafePassModal({ isOpen, onClose }: SafePassModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("admin");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentModule = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-on-background/70 backdrop-blur-sm overflow-y-auto flex items-center justify-center p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-surface rounded-xl shadow-2xl w-full max-w-[1360px] overflow-hidden my-space-md border border-surface-container animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Sticky Header */}
        <div className="bg-surface-container-lowest px-space-md md:px-space-lg py-space-md border-b border-surface-container flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-space-sm">
            <button
              onClick={onClose}
              type="button"
              className="cursor-pointer inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface hover:bg-surface-container text-on-surface font-title-md text-title-md transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>
              <span>Back to Products</span>
            </button>
            <span className="text-outline hidden sm:inline">|</span>
            <div className="hidden sm:block">
              <h3
                id="modal-headline"
                className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none"
              >
                SafePass Architecture &amp; Interfaces
              </h3>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-medium">
                Interactive Platform Modules
              </span>
            </div>
          </div>

          <div className="flex items-center gap-space-sm">
            <a
              href="mailto:kharakamllp@gmail.com?subject=SafePass%20Deployment%20Inquiry"
              className="hidden sm:inline-flex items-center justify-center px-space-md py-space-xs rounded bg-primary text-on-primary font-body-md text-body-md hover:bg-secondary transition-colors shadow-sm"
            >
              Request Campus Pilot
            </a>
            <button
              onClick={onClose}
              type="button"
              className="cursor-pointer p-space-xs rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"
              title="Close modal"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-space-md md:p-space-lg max-h-[82vh] overflow-y-auto">
          <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm border border-surface-container mb-space-lg">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-md gap-space-sm">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                  Technical Architecture
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-space-xs">
                  SafePass Platform Modules &amp; Deployed Workflows
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-space-xs">
                  A synchronized multi-tier topology operating across campus gates, classroom dashboards, and field mobility clients. Select a module below to inspect console interfaces.
                </p>
              </div>
              <div className="flex items-center gap-space-xs shrink-0">
                <span className="font-label-sm text-label-sm text-outline uppercase">
                  Active View:
                </span>
                <span className="font-label-sm text-label-sm font-semibold text-primary px-space-sm py-space-xs rounded bg-surface-container">
                  {currentModule.title}
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs mb-space-md bg-surface-container p-space-xs rounded-xl">
              {modules.map((m) => {
                const isSelected = m.id === activeTab;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveTab(m.id)}
                    className={`cursor-pointer px-space-sm py-space-sm rounded font-title-md text-title-md text-center transition-all ${
                      isSelected
                        ? "bg-surface-container-lowest text-on-surface shadow-sm font-semibold"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                    }`}
                  >
                    {m.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Tab Panel */}
            <div className="bg-surface-container-low rounded-xl p-space-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                {/* Left Specs Info */}
                <div className="lg:col-span-4 flex flex-col space-y-space-md">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium">
                      {currentModule.category}
                    </span>
                    <h5 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs font-semibold">
                      {currentModule.title}
                    </h5>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                      {currentModule.description}
                    </p>
                  </div>

                  <div className="bg-surface rounded-lg p-space-md space-y-space-sm border border-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary">
                        tune
                      </span>
                      <span className="font-title-md text-title-md text-on-surface font-semibold">
                        Functional Specifications
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      {currentModule.specs.map((spec, i) => (
                        <p key={i}>• {spec}</p>
                      ))}
                    </div>
                  </div>

                  <div className="p-space-sm rounded bg-surface-container">
                    <span className="font-label-sm text-label-sm text-outline block uppercase font-medium">
                      TARGET DEPLOYMENT
                    </span>
                    <span className="font-body-md text-body-md text-on-surface font-medium">
                      {currentModule.deployment}
                    </span>
                  </div>
                </div>

                {/* Right Screen Preview */}
                <div className="lg:col-span-8">
                  <div className="bg-surface rounded-lg p-space-xs shadow-sm overflow-hidden border border-surface-container">
                    <div className="flex items-center justify-between px-space-sm py-space-xs bg-surface-container-high rounded-t mb-space-xs">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        {currentModule.screenTitle}
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">
                        {currentModule.screenResolution}
                      </span>
                    </div>
                    <div className="overflow-hidden rounded flex justify-center bg-surface-container-lowest">
                      <Image
                        src={currentModule.imageSrc}
                        alt={currentModule.screenTitle}
                        width={1920}
                        height={960}
                        className="w-full h-auto object-contain rounded hover:scale-[1.01] transition-transform duration-300"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features Cards */}
          <div className="mt-space-lg pt-space-md border-t border-surface-container grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs border border-surface-container">
              <div className="flex items-center gap-space-xs text-primary">
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  network_check
                </span>
                <h6 className="font-title-md text-title-md font-semibold text-on-surface">
                  Low-Bandwidth Resilient
                </h6>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Optimized to sync critical queue states even across degraded 3G or congested campus perimeter cellular connections.
              </p>
            </div>

            <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs border border-surface-container">
              <div className="flex items-center gap-space-xs text-primary">
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  encrypted
                </span>
                <h6 className="font-title-md text-title-md font-semibold text-on-surface">
                  Institutional Privacy
                </h6>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Encrypted roster transmissions with zero permanent geolocation telemetry retained post-dismissal clearance.
              </p>
            </div>

            <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs border border-surface-container">
              <div className="flex items-center gap-space-xs text-primary">
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  devices
                </span>
                <h6 className="font-title-md text-title-md font-semibold text-on-surface">
                  Zero Hardware Burden
                </h6>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Functions instantly on existing PCs, school smart TVs, and guardian mobile devices without turnstile installations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
