import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiDownload, FiSend, FiCheckCircle } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { personal } from "../data/portfolioData";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!form.email.trim()) errs.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.subject.trim()) errs.subject = "Please add a subject";
    if (!form.message.trim()) errs.message = "Please write a message";
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Open the user's mail client pre-filled with the message (no backend required)
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setForm(initialState);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: FiMail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/muhsinact", href: personal.linkedin },
    { icon: FiGithub, label: "GitHub", value: "github.com/MUHSINA25", href: personal.github },
    { icon: FiMapPin, label: "Location", value: personal.location, href: undefined },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Have a role, project, or collaboration in mind? I'd love to hear from you — reach out through the form or any channel below."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-pink-600 p-8 text-white shadow-xl shadow-indigo-500/30">
              <div>
                <h3 className="text-2xl font-bold">Get in touch</h3>
                <p className="mt-2 text-sm text-white/80">
                  Open to full-time roles, freelance analytics projects, and training collaborations.
                </p>

                <div className="mt-8 space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/60">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:underline"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:scale-[1.02]"
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm text-slate-900 outline-none ring-indigo-500/40 transition focus:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
                {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm text-slate-900 outline-none ring-indigo-500/40 transition focus:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
                {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Subject
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm text-slate-900 outline-none ring-indigo-500/40 transition focus:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
              {errors.subject && <p className="mt-1 text-xs text-rose-500">{errors.subject}</p>}
            </div>

            <div className="mt-5">
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the opportunity or project..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm text-slate-900 outline-none ring-indigo-500/40 transition focus:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
              {errors.message && <p className="mt-1 text-xs text-rose-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.01] sm:w-auto"
            >
              <FiSend /> Send Message
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                >
                  <FiCheckCircle /> Your mail app should now open with the message ready to send!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
