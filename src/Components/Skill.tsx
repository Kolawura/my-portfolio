import { useEffect, useRef } from "react";

export const Skill = () => {
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillsSection = skillsSectionRef.current;

    const animateSkillBars = () => {
      const skillBars = document.querySelectorAll(".skill-bar");
      skillBars.forEach((bar) => {
        const skillBarElement = bar as HTMLElement;
        const width = skillBarElement.getAttribute("data-width");
        if (width) {
          skillBarElement.style.width = width; // Animate the width
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateSkillBars();
          if (skillsSection) observer.unobserve(skillsSection); // Stop observing after animation
        }
      },
      { threshold: 0.5 }
    );

    if (skillsSection) observer.observe(skillsSection);

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);
  const skills = [
    { name: "HTML/CSS", percentage: "90%" },
    { name: "Tailwind", percentage: "90%" },
    { name: "JavaScript", percentage: "85%" },
    { name: "React", percentage: "80%" },
    { name: "Typescript", percentage: "75%" },
    { name: "NextJS", percentage: "70%" },    
    { name: "Flutter", percentage: "70%" },
    { name: "MySQL", percentage: "70%" },
  ]


  return (
    <section
      id="skills"
      ref={skillsSectionRef}
      className="pt-20 pb-4 px-4 md:px-12 lg:px-24 md:py-32 relative bg-gray-100 dark:bg-gray-950"
      style={{ animationDelay: "0.4s" }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-50 animate-fadeIn">Skills</h2>
      <div className="animate-slideUp space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1 text-gray-600 dark:text-gray-50">
              <span>{skill.name}</span>
              <span>{skill.percentage}</span>
            </div>
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full skill-bar"
                style={{ width: "0%" }}
                data-width={skill.percentage}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

