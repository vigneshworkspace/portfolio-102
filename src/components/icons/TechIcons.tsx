import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiMongodb,
  SiDocker,
  SiAmazonaws,
  SiGooglecloud,
  SiFirebase,
  SiGit,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiFigma,
  SiTailwindcss,
} from '@icons-pack/react-simple-icons';

type TechIconProps = {
  tech: string;
  className?: string;
};

const iconMap: { [key: string]: React.ElementType } = {
  'Next.js': SiNextdotjs,
  React: SiReact,
  'Node.js': SiNodedotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  AWS: SiAmazonaws,
  'Google Cloud': SiGooglecloud,
  Firebase: SiFirebase,
  Git: SiGit,
  GraphQL: SiGraphql,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Figma: SiFigma,
  TailwindCSS: SiTailwindcss,
};

export default function TechIcon({ tech, className }: TechIconProps) {
  const IconComponent = iconMap[tech];

  if (IconComponent) {
    return <IconComponent className={className} />;
  }

  // Fallback for icons not in the map
  return <div title={tech} className="h-12 w-12 rounded-lg bg-gray-600" />;
}
