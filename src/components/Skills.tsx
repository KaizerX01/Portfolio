import { Award, BookOpen } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'C#', 'SQL'],
    },
    {
      title: 'Front-end',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Responsive Design'],
    },
    {
      title: 'Back-end',
      skills: ['Laravel', 'Spring Boot', 'Node.js', 'REST API', 'Microservices'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'Oracle', 'Supabase'],
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'CI/CD', 'GitHub Actions'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'VS Code', 'IntelliJ', 'Postman', 'Agile', 'Problem Solving'],
    },
  ];

  const certifications = [
    {
      title: 'React (Basic)',
      provider: 'HackerRank',
      type: 'Development',
    },
    {
      title: 'SQL (Basic)',
      provider: 'HackerRank',
      type: 'Database',
    },
    {
      title: 'FrontEnd Developer',
      provider: 'HackerRank',
      type: 'Development',
    },
    {
      title: 'Git Fundamentals',
      provider: 'Udemy',
      type: 'DevOps',
    },
    {
      title: 'Docker Essentials',
      provider: 'Udemy',
      type: 'DevOps',
    },
    {
      title: 'Spring Boot REST API',
      provider: 'Code With Mosh',
      type: 'Backend',
    },
    {
      title: 'Spring Boot Fundamentals',
      provider: 'Code With Mosh',
      type: 'Backend',
    },
    {
      title: 'Oracle Cloud Infrastructure',
      provider: 'Oracle University',
      type: 'Cloud',
    },
  ];

  const softSkills = [
    'Team Collaboration',
    'Effective Communication',
    'Time Management',
    'Problem Solving',
    'Adaptability',
    'Analytical Thinking',
    'Creativity',
    'Self-Learning',
  ];

  return (
    <section id="skills" className="relative py-32 px-4 bg-gradient-to-b from-white/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Skills & <span className="text-[#00ff9d]">Expertise</span>
          </h2>
          <div className="h-1 w-24 bg-[#00ff9d]" />
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-[#00ff9d]">{'<'}</span>
            Technical Skills
            <span className="text-[#00ff9d]">{'/>'}</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#00ff9d]/50 transition-all duration-300 p-6 hover:scale-105"
              >
                <h4 className="text-xl font-bold mb-4 text-[#00ff9d]">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-white/5 rounded-lg border border-white/10 hover:border-[#00ff9d]/50 hover:bg-[#00ff9d]/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-[#00ff9d]" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#00ff9d]/50 transition-all duration-300 p-5 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-5 h-5 text-[#00ff9d]" />
                  <span className="text-xs px-2 py-1 bg-[#00ff9d]/20 text-[#00ff9d] rounded-full">
                    {cert.type}
                  </span>
                </div>
                <h4 className="font-semibold mb-1 text-white">{cert.title}</h4>
                <p className="text-sm text-gray-400">{cert.provider}</p>
                <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-[#00ff9d]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#00ff9d]" />
            Soft Skills
          </h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#00ff9d] transition-colors"
                >
                  <span className="w-2 h-2 bg-[#00ff9d] rounded-full" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
