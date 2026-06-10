'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, AlertCircle, CheckCircle2, Phone } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    setSuccessMsg('');

    // Basic Validations
    if (!name || !email || !subject || !message) {
      setErrorMsg('All contact fields are required.');
      setIsSubmitting(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Mock form API endpoint handler response
    setTimeout(() => {
      setSuccessMsg('Your message was dispatched successfully! Kushagri will get back to you shortly.');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center md:text-left space-y-3">
        <h2 className="text-3xl sm:text-5xl font-bold font-heading">
          Get in <span className="text-primary-red">Touch</span>
        </h2>
        <div className="w-12 h-1 bg-primary-red mx-auto md:mx-0 rounded" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Information & Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-card p-6 space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">Let&apos;s collaborate!</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-1">
                Reach out if you are interested in hiring me, collaborating on open-source machine learning pipelines, or discussing python workflows!
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a 
                href="tel:+919079945728" 
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-red/35 hover:bg-white/10 transition-all"
              >
                <span className="p-2.5 rounded-lg bg-primary-red/10 text-primary-red">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Phone / WhatsApp</div>
                  <div className="text-sm font-semibold text-foreground">+91 9079945728</div>
                </div>
              </a>

              <a 
                href="mailto:kushagrisharma12@gmail.com" 
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-red/35 hover:bg-white/10 transition-all"
              >
                <span className="p-2.5 rounded-lg bg-primary-red/10 text-primary-red">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Email Address</div>
                  <div className="text-sm font-semibold text-foreground">kushagrisharma12@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/kushagri-sharma-7a4613288" 
                target="_blank"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-red/35 hover:bg-white/10 transition-all"
              >
                <span className="p-2.5 rounded-lg bg-primary-red/10 text-primary-red">
                  <Linkedin className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-foreground">Kushagri Sharma</div>
                </div>
              </a>

              <a 
                href="https://github.com/Kushagriisharma" 
                target="_blank"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-red/35 hover:bg-white/10 transition-all"
              >
                <span className="p-2.5 rounded-lg bg-primary-red/10 text-primary-red">
                  <Github className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">GitHub Username</div>
                  <div className="text-sm font-semibold text-foreground">@Kushagriisharma</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Reactive Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading mb-2">Send an Inquiry</h3>

            {errorMsg && (
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs sm:text-sm text-red-500 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-green-500/10 border border-green-500/20 text-xs sm:text-sm text-green-500 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-primary-red/35 text-foreground placeholder-gray-500 text-sm outline-none transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-primary-red/35 text-foreground placeholder-gray-500 text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Subject</label>
              <input
                type="text"
                placeholder="Inquiry Topic"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-primary-red/35 text-foreground placeholder-gray-500 text-sm outline-none transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Message Details</label>
              <textarea
                placeholder="Write message details..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-primary-red/35 text-foreground placeholder-gray-500 text-sm outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-red hover:bg-primary-red/90 disabled:opacity-50 text-white font-semibold cursor-pointer shadow-lg hover:shadow-primary-red/10 transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
