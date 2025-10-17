import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 157, 0.5)';
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 255, 157, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <span className="text-[#00ff9d] font-mono text-sm tracking-wider animate-pulse">
            {'<'}FULL_STACK_DEVOPS_ENGINEER {'/>'}
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="inline-block hover:scale-110 transition-transform duration-300">Z</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">A</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">K</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">A</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">R</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">I</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">A</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">E</span>
          <br />
          <span className="text-[#00ff9d] inline-block hover:scale-110 transition-transform duration-300">A</span>
          <span className="text-[#00ff9d] inline-block hover:scale-110 transition-transform duration-300">Z</span>
          <span className="text-[#00ff9d] inline-block hover:scale-110 transition-transform duration-300">I</span>
          <span className="text-[#00ff9d] inline-block hover:scale-110 transition-transform duration-300">L</span>
          <span className="text-[#00ff9d] inline-block hover:scale-110 transition-transform duration-300">A</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting scalable web experiences with modern technologies.
          <br />
          <span className="text-[#00ff9d]">React • Next.js • Laravel • Spring Boot • DevOps</span>
        </p>

        <div className="flex gap-6 justify-center mb-16">
          <a
            href="https://github.com/KaizerX01"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-[#00ff9d] transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 group-hover:text-[#00ff9d] transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/zakariae-azila"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-[#00ff9d] transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 group-hover:text-[#00ff9d] transition-colors" />
          </a>
          <a
            href="mailto:tshensowazila2004@gmail.com"
            className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-[#00ff9d] transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 group-hover:text-[#00ff9d] transition-colors" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="group animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-[#00ff9d] group-hover:scale-125 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-5" />
    </section>
  );
}
