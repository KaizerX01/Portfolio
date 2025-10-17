import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Abisoft',
      location: 'Fes, Morocco',
      period: 'June 2025 - August 2025',
      description: [
        'Designed interactive web interface for product presentation',
        'Integrated intelligent chatbot for automated online assistance',
        'Implemented basic CI/CD pipeline for automated deployment',
      ],
      technologies: ['React', 'Node.js', 'CI/CD', 'Chatbot Integration'],
    },
    {
      title: 'Web Developer Intern',
      company: 'Web Marco',
      location: 'Fes, Morocco',
      period: 'July 2024',
      description: [
        'Developed an appointment management system using Laravel',
        'Optimized workflow and schedule visibility through a clear interface',
        'Implemented service and user management features',
      ],
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'PHP'],
    },
  ];

  return (
    <section id="experience" className="relative py-32 px-4 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Work <span className="text-[#00ff9d]">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-[#00ff9d]" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#00ff9d]/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff9d] to-transparent" />

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#00ff9d] transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-lg text-[#00ff9d] mb-3">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-[#00ff9d] mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-[#00ff9d]/10 text-[#00ff9d] rounded-full border border-[#00ff9d]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute -z-10 top-1/2 right-0 w-96 h-96 bg-[#00ff9d]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
