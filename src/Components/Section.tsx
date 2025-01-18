import { useEffect, useRef } from "react";
import { SectionProps } from "../Type";

export const Section = ({ id, children, animationClass, className }:SectionProps) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationClass]);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={className} // Default hidden state
    >
      {children}
    </div>
  );
};
