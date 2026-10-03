'use client';

import { useRef } from 'react';

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  dark?: boolean;
  numbered?: boolean;
}

export default function ProcessSteps({ steps, dark = false, numbered = true }: ProcessStepsProps) {
  const gridId = `process-steps-${steps.length}`;

  return (
    <div className="relative">
      <style>{`
        @media (min-width: 1024px) {
          .${gridId} {
            grid-template-columns: repeat(${steps.length}, minmax(0, 1fr));
          }
        }
      `}</style>
      {/* Connecting line */}
      <div
        className="absolute top-5 left-0 right-0 h-px hidden md:block"
        style={{
          background: dark
            ? 'linear-gradient(to right, #CAA549, #CAA549)'
            : 'linear-gradient(to right, #CAA549, #CAA549)',
          marginLeft: '2rem',
          marginRight: '2rem',
          opacity: 0.5,
        }}
      />
      <div className={`${gridId} grid grid-cols-1 sm:grid-cols-2 gap-8 relative`}>
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-4 relative z-10"
              style={{ backgroundColor: dark ? '#CAA549' : '#0B5828' }}
            >
              {numbered && (
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: dark ? '#062F17' : '#FBFAF5' }}
                >
                  {i + 1}
                </span>
              )}
            </div>
            <h3
              className="font-body font-semibold text-base mb-2"
              style={{ color: dark ? '#FBFAF5' : '#16211A' }}
            >
              {step.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: dark ? 'rgba(251,250,245,0.7)' : '#4B584F' }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
