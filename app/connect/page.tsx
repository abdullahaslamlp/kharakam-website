import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Connect With Us | KharaKam LLP",
  description:
    "Get in touch with KharaKam LLP for SafePass school deployments, institutional partnerships, or general corporate inquiries.",
};

export default function ConnectPage() {
  return (
    <div className="flex flex-col w-full py-space-xl px-margin-sm lg:px-margin-lg">
      <div className="max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <div className="mb-space-xl max-w-3xl">
          <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-semibold">
            Connect with us.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
            Whether you represent an educational institution interested in SafePass, an organization looking to collaborate, or have general inquiries, reach out to us directly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            {/* Email Card */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container transition-all hover:shadow-md">
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm">
                  <span className="material-symbols-outlined text-[22px] text-secondary">
                    alternate_email
                  </span>
                </div>
                <h2 className="font-title-lg text-title-lg text-primary font-semibold">
                  Corporate Email
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  For general questions, institutional inquiries, or partnerships.
                </p>
                <a
                  href="mailto:kharakamllp@gmail.com"
                  className="font-title-md text-title-md text-primary font-medium mt-space-sm hover:text-secondary transition-colors"
                >
                  kharakamllp@gmail.com
                </a>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-surface-container">
                <a
                  href="mailto:kharakamllp@gmail.com"
                  className="inline-flex items-center gap-space-xs font-title-md text-title-md text-secondary hover:text-primary transition-colors font-medium"
                >
                  <span>Email Us</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container transition-all hover:shadow-md">
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-sm">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 fill-current text-secondary"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441 1.44-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <h2 className="font-title-lg text-title-lg text-primary font-semibold">
                  Official Instagram
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Follow our updates, announcements, and product developments.
                </p>
                <a
                  href="https://www.instagram.com/kharakamllp/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-title-md text-title-md text-primary font-medium mt-space-sm hover:text-secondary transition-colors"
                >
                  @kharakamllp
                </a>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-surface-container">
                <a
                  href="https://www.instagram.com/kharakamllp/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-space-xs font-title-md text-title-md text-secondary hover:text-primary transition-colors font-medium"
                >
                  <span>Visit Instagram</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-sm flex flex-col border border-surface-container">
              <h2 className="font-headline-sm text-headline-sm text-primary font-semibold mb-space-sm">
                Send a Message
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                Fill out the form below and we will get back to you shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
