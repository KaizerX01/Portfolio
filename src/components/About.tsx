import { Code2, Server, Cloud, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building modern web applications with React, Next.js, Laravel, and Spring Boot',
    },
    {
      icon: Cloud,
      title: 'DevOps Engineering',
      description: 'Cloud deployment and automation with Docker, Kubernetes, Jenkins, and AWS',
    },
    {
      icon: Server,
      title: 'Backend Architecture',
      description: 'Designing scalable REST APIs and microservices with optimal performance',
    },
    {
      icon: Zap,
      title: 'CI/CD Pipelines',
      description: 'Implementing automated deployment workflows with GitHub Actions and Jenkins',
    },
  ];

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-[#00ff9d]">Me</span>
          </h2>
          <div className="h-1 w-24 bg-[#00ff9d]" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-[#00ff9d] font-semibold">Full Stack Developer</span> with a strong orientation towards DevOps,
              currently pursuing my Software Engineering degree at ENSA Fes, Morocco.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With hands-on experience in both <span className="text-[#00ff9d]">front-end and back-end development</span>,
              I specialize in creating scalable web applications and implementing robust cloud deployment solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across modern frameworks like React and Next.js for the front-end,
              Laravel and Spring Boot for the back-end, complemented by DevOps tools including
              Docker, Kubernetes, and CI/CD pipelines.
            </p>
            <div className="pt-4">
              <div className="flex gap-4 text-sm text-gray-400">
                <div>
                  <span className="text-[#00ff9d] font-mono">Location:</span> Fes, Morocco
                </div>
                <div>
                  <span className="text-[#00ff9d] font-mono">Status:</span> Open to Opportunities
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#00ff9d]/20 to-transparent p-8 rounded-2xl border border-[#00ff9d]/30">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00ff9d] rounded-full animate-pulse" />
                  <span className="font-mono text-gray-300">Currently studying at ENSA Fes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00ff9d] rounded-full animate-pulse" />
                  <span className="font-mono text-gray-300">Software Engineering Student</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00ff9d] rounded-full animate-pulse" />
                  <span className="font-mono text-gray-300">Full Stack & DevOps Enthusiast</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00ff9d] rounded-full animate-pulse" />
                  <span className="font-mono text-gray-300">Multiple certifications in web development</span>
                </div>
              </div>
              <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-[#00ff9d]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#00ff9d]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4 inline-block p-3 bg-[#00ff9d]/10 rounded-lg group-hover:bg-[#00ff9d]/20 transition-colors">
                <highlight.icon className="w-6 h-6 text-[#00ff9d]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{highlight.description}</p>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#00ff9d]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
