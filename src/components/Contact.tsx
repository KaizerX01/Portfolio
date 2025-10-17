import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 bg-gradient-to-t from-white/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-[#00ff9d]">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-[#00ff9d] mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:tshensowazila2004@gmail.com"
                  className="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#00ff9d]/50 transition-all duration-300"
                >
                  <div className="p-3 bg-[#00ff9d]/10 rounded-lg group-hover:bg-[#00ff9d]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#00ff9d]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="font-medium group-hover:text-[#00ff9d] transition-colors">
                      tshensowazila2004@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+212708348582"
                  className="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#00ff9d]/50 transition-all duration-300"
                >
                  <div className="p-3 bg-[#00ff9d]/10 rounded-lg group-hover:bg-[#00ff9d]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#00ff9d]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="font-medium group-hover:text-[#00ff9d] transition-colors">
                      +212 708 348 582
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="p-3 bg-[#00ff9d]/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#00ff9d]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="font-medium">Fes, Morocco</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/KaizerX01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#00ff9d]/50 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5 text-[#00ff9d]" />
                  <span className="font-medium group-hover:text-[#00ff9d] transition-colors">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://linkedin.com/in/zakariae-azila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#00ff9d]/50 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5 text-[#00ff9d]" />
                  <span className="font-medium group-hover:text-[#00ff9d] transition-colors">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>

            <div className="relative p-6 bg-gradient-to-br from-[#00ff9d]/20 to-transparent rounded-2xl border border-[#00ff9d]/30">
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <div className="space-y-2">
                <p className="font-semibold text-[#00ff9d]">ENSA Fes</p>
                <p className="text-sm text-gray-300">Software Engineering Student</p>
                <p className="text-sm text-gray-400">2023 - Present</p>
              </div>
              <div className="absolute -z-10 top-0 right-0 w-48 h-48 bg-[#00ff9d]/10 rounded-full blur-3xl" />
            </div>
          </div>

          <div>
            <form className="space-y-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00ff9d] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00ff9d] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00ff9d] transition-colors"
                  placeholder="Project Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00ff9d] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-2 px-6 py-4 bg-[#00ff9d] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#00ff9d]/90 transition-all duration-300 hover:scale-105"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="text-gray-400">
            <span className="text-[#00ff9d] font-mono">{'<'}</span>
            Designed & Built by Zakariae Azila
            <span className="text-[#00ff9d] font-mono">{' />'}</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            2025 - Full Stack Developer & DevOps Engineer
          </p>
        </div>
      </div>
    </section>
  );
}
