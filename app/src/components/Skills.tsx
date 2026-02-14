import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiLinux,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVscodium,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export function Skills() {
  const skills = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "Linux", icon: SiLinux },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Visual Studio Code", icon: VscVscode },
    { name: "Vscodium", icon: SiVscodium },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-900"
          >
            <Icon className="text-3xl text-neutral-200 transition-transform duration-300 group-hover:scale-110" />
            <p className="mt-3 text-sm text-neutral-400">
              {skill.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
