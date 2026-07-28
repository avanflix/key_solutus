"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, ChevronDown } from "lucide-react";
import { serviceOptions } from "@/data/contact";
import { cn } from "@/lib/utils";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  details: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  details: "",
};

type Status = "idle" | "submitting" | "success" | "error";

function FloatingField({
  id,
  label,
  required,
  type = "text",
  value,
  onChange,
  error,
  as,
}: {
  id: keyof FormState;
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  as?: "textarea";
}) {
  const Component = as === "textarea" ? "textarea" : "input";

  return (
    <div className="relative">
      <Component
        id={id}
        name={id}
        type={as ? undefined : type}
        required={required}
        value={value}
        rows={as === "textarea" ? 5 : undefined}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "peer w-full rounded-2xl border bg-mist/40 px-5 pt-6 pb-2.5 text-sm text-ink placeholder-transparent transition-colors focus:bg-white focus:outline-none",
          as === "textarea" ? "resize-none" : "",
          error
            ? "border-red-300 focus:border-red-400"
            : "border-gray-line focus:border-blue"
        )}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-5 top-4 font-heading text-sm text-slate transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-deep peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label} {required && <span className="text-blue">*</span>}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 pl-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: keyof FormState) => (v: string) => {
    setValues((prev) => ({ ...prev, [field]: v }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.service) next.service = "Please select a service.";
    if (!values.details.trim()) next.details = "Please tell us about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // Wire this up to your backend / email service / CRM of choice.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 flex flex-col items-center rounded-2xl bg-sky/50 px-8 py-14 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-deep text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h4 className="mt-5 font-heading text-lg font-bold text-ink">Request received</h4>
        <p className="mt-2 max-w-sm text-sm text-slate">
          Thank you for reaching out. A member of our engineering team will respond within 24
          hours with next steps.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-heading text-sm font-semibold text-blue-deep hover:text-ink"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FloatingField
          id="fullName"
          label="Full Name"
          required
          value={values.fullName}
          onChange={set("fullName")}
          error={errors.fullName}
        />
        <FloatingField
          id="email"
          label="Email Address"
          required
          type="email"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FloatingField
          id="phone"
          label="Phone Number"
          type="tel"
          value={values.phone}
          onChange={set("phone")}
        />
        <FloatingField
          id="company"
          label="Company Name"
          value={values.company}
          onChange={set("company")}
        />
      </div>

      <div className="relative">
        <select
          id="service"
          name="service"
          required
          value={values.service}
          onChange={(e) => set("service")(e.target.value)}
          aria-invalid={!!errors.service}
          className={cn(
            "peer w-full appearance-none rounded-2xl border bg-mist/40 px-5 py-4 text-sm focus:bg-white focus:outline-none",
            values.service ? "text-ink" : "text-slate",
            errors.service ? "border-red-300 focus:border-red-400" : "border-gray-line focus:border-blue"
          )}
        >
          <option value="" disabled>
            Service Required *
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
        {errors.service && (
          <p className="mt-1.5 pl-1 text-xs text-red-500">{errors.service}</p>
        )}
      </div>

      <FloatingField
        id="details"
        label="Project Details"
        required
        as="textarea"
        value={values.details}
        onChange={set("details")}
        error={errors.details}
      />

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-500"
          >
            Something went wrong sending your request. Please try again, or email us directly.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 font-heading text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-deep hover:shadow-soft disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Request"
        )}
      </button>
    </form>
  );
}
