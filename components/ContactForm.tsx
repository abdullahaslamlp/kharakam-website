"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          throw new Error("Failed to send message. Please try again or email us directly.");
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please contact us at kharakamllp@gmail.com."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      inquiryType: "",
      message: "",
    });
    setStatus("idle");
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", bounce: 0, duration: 0.35 }}
            className="flex flex-col items-center justify-center p-space-xl bg-surface-container-low/90 rounded-2xl border border-surface-container text-center shadow-xs"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-space-sm">
              <span className="material-symbols-outlined text-[36px]">
                check_circle
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">
              Message Sent Successfully!
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-md leading-relaxed">
              Thank you for reaching out. The KharaKam engineering and operations team has received your message and will respond shortly.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-space-lg inline-flex items-center gap-space-xs px-space-lg py-2.5 bg-primary text-on-primary rounded-xl font-title-md text-title-md hover:bg-secondary transition-colors apple-pressable cursor-pointer shadow-sm"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-space-md"
          >
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-space-md bg-error-container text-on-error-container rounded-xl font-body-sm text-body-sm flex items-center gap-space-xs border border-error/20"
              >
                <span className="material-symbols-outlined text-[18px]">error</span>
                <span>{errorMessage}</span>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold"
                  htmlFor="fullName"
                >
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full h-11 px-3.5 bg-surface rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary/25 focus:border-secondary focus:bg-surface-container-lowest shadow-xs transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold"
                  htmlFor="email"
                >
                  Email Address <span className="text-error">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@organization.com"
                  className="w-full h-11 px-3.5 bg-surface rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary/25 focus:border-secondary focus:bg-surface-container-lowest shadow-xs transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold"
                  htmlFor="organization"
                >
                  Organization / School Name
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="e.g. Beaconhouse / Army Public School"
                  className="w-full h-11 px-3.5 bg-surface rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary/25 focus:border-secondary focus:bg-surface-container-lowest shadow-xs transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold"
                  htmlFor="inquiryType"
                >
                  Inquiry Type <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full h-11 px-3.5 pr-10 bg-surface rounded-xl font-body-md text-body-md text-on-surface appearance-none border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary/25 focus:border-secondary focus:bg-surface-container-lowest shadow-xs transition-all"
                  >
                    <option value="" disabled>
                      Select Inquiry Type
                    </option>
                    <option value="safepass">SafePass Institutional Pilot</option>
                    <option value="partnership">General Partnership</option>
                    <option value="other">Other Inquiries</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold"
                htmlFor="message"
              >
                Message <span className="text-error">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full p-3.5 bg-surface rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline border border-surface-container focus:outline-none focus:ring-2 focus:ring-secondary/25 focus:border-secondary focus:bg-surface-container-lowest shadow-xs resize-y transition-all"
              />
            </div>

            <div className="pt-space-xs">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-space-sm bg-primary text-on-primary font-title-md text-title-md px-space-xl py-3 rounded-xl hover:bg-secondary disabled:opacity-50 transition-all apple-pressable shadow-sm"
              >
                <span>
                  {status === "submitting" ? "Sending Message..." : "Send Message"}
                </span>
                <span className="material-symbols-outlined text-[18px]">
                  {status === "submitting" ? "progress_activity" : "arrow_forward"}
                </span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
