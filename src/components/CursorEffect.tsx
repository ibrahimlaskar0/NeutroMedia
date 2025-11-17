import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

const CursorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Calculate velocity for more dynamic effects
      const dx = mouseRef.current.x - mouseRef.current.prevX;
      const dy = mouseRef.current.y - mouseRef.current.prevY;
      const velocity = Math.sqrt(dx * dx + dy * dy);

      // Create particles based on movement
      if (velocity > 1) {
        createParticles(mouseRef.current.x, mouseRef.current.y, velocity);
      }
    };

    const createParticles = (x: number, y: number, velocity: number) => {
      const numParticles = Math.min(Math.floor(velocity / 2), 8);
      
      for (let i = 0; i < numParticles; i++) {
        const angle = (Math.PI * 2 * i) / numParticles + Math.random() * 0.5;
        const speed = Math.random() * 2 + 1;
        const life = Math.random() * 60 + 40;
        
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 2,
          vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 2,
          life: life,
          maxLife: life,
          size: Math.random() * 8 + 4,
          hue: (Date.now() * 0.01 + Math.random() * 60) % 360
        });
      }

      // Limit particle count for performance
      if (particlesRef.current.length > 300) {
        particlesRef.current = particlesRef.current.slice(-200);
      }
    };

    const updateParticles = () => {
      particlesRef.current = particlesRef.current.filter(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Apply some physics
        particle.vx *= 0.98; // friction
        particle.vy *= 0.98;
        particle.vy += 0.05; // slight gravity
        
        // Update life
        particle.life--;
        
        return particle.life > 0;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create flowing connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        const alpha = particle.life / particle.maxLife;
        const size = particle.size * alpha;
        
        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size * 2
        );
        
        gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${alpha * 0.8})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue + 30}, 80%, 50%, ${alpha * 0.4})`);
        gradient.addColorStop(1, `hsla(${particle.hue + 60}, 90%, 40%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections to nearby particles
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const connectionAlpha = (1 - distance / 100) * alpha * (otherParticle.life / otherParticle.maxLife) * 0.3;
            
            const connectionGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            
            connectionGradient.addColorStop(0, `hsla(${particle.hue}, 60%, 50%, ${connectionAlpha})`);
            connectionGradient.addColorStop(0.5, `hsla(${(particle.hue + otherParticle.hue) / 2}, 70%, 55%, ${connectionAlpha * 0.8})`);
            connectionGradient.addColorStop(1, `hsla(${otherParticle.hue}, 60%, 50%, ${connectionAlpha})`);
            
            ctx.strokeStyle = connectionGradient;
            ctx.lineWidth = connectionAlpha * 4;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      
      // Add a subtle glow effect around the cursor
      if (particlesRef.current.length > 0) {
        const glowGradient = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 50
        );
        
        glowGradient.addColorStop(0, 'hsla(280, 60%, 50%, 0.1)');
        glowGradient.addColorStop(1, 'hsla(280, 60%, 50%, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 50, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        mixBlendMode: 'screen',
        opacity: 0.6
      }}
    />
  );
};

export default CursorEffect;