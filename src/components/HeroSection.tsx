import { Hero } from '@/components/ui/hero';

const HeroSection = () => {
  return (
    <Hero
      id="hero"
      title={
        <>
          Crafting Impactful stories with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Motion
          </span>{' '}
          &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            Strategy
          </span>
        </>
      }
      subtitle="Portfolio of Motion designer, Short form editor"
      actions={[
        {
          label: "View Projects",
          href: "#saas-projects",
          variant: "outline"
        },
        {
          label: "Get in Touch",
          href: "#get-in-touch",
          variant: "default"
        }
      ]}
      titleClassName="text-5xl md:text-6xl lg:text-7xl font-serif font-bold"
      subtitleClassName="text-xl md:text-2xl max-w-[600px] text-gray-300"
      actionsClassName="mt-12"
    />
  );
};

export default HeroSection;