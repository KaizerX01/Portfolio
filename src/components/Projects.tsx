import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Appointment Management System',
      description: 'Complete web application built with Laravel for managing services and appointments. Features include user authentication, service management, and optimized scheduling interface.',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'PHP'],
      highlights: ['User Management', 'Service Booking', 'Admin Dashboard', 'Real-time Updates'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'Game Hub',
      description: 'Dynamic React platform for exploring video games with advanced filtering capabilities, dynamic game cards, and responsive design. Integrated with RAWG API for real-time game data.',
      technologies: ['React', 'Tailwind CSS', 'RAWG API', 'TypeScript'],
      highlights: ['API Integration', 'Advanced Filtering', 'Responsive Design', 'Dynamic Content'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'Football Hub',
      description: 'Real-time football scores and standings tracker built with Next.js and Supabase. Features live updates, team statistics, and comprehensive league information.',
      technologies: ['Next.js', 'Supabase', 'Vercel', 'React'],
      highlights: ['Real-time Updates', 'Live Scores', 'Team Statistics', 'League Tables'],
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'Expense Tracker',
      description: 'Full-stack application for tracking income and expenses. Built with Spring Boot backend and React frontend, featuring REST API integration and data visualization.',
      technologies: ['Spring Boot', 'React', 'REST API', 'Java'],
      highlights: ['Budget Management', 'Data Visualization', 'Transaction History', 'Financial Reports'],
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-[#00ff9d]">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-[#00ff9d]" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#00ff9d]/50 transition-all duration-300 overflow-hidden hover:scale-[1.02]"
            >
              <div
                className="h-48 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-[#00ff9d]/20 transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-[#00ff9d]/20 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00ff9d] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#00ff9d] mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-[#00ff9d]/10 text-[#00ff9d] rounded-full border border-[#00ff9d]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute -z-10 top-1/2 left-1/2 w-full h-full bg-[#00ff9d]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
