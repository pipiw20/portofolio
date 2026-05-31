"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  github,
}: ProjectCardProps) {
  return (
    <div className="card">
      <h3 className="text-xl font-bold text-deep-pink mb-2">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={github}
        className="inline-flex items-center gap-2 text-deep-pink hover:text-neon-pink transition-colors"
      >
        View on GitHub
        <span>→</span>
      </a>
    </div>
  );
}
