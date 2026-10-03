'use client';

import Button from '../components/Button';

export default function NotFoundPage() {
  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center px-5 text-center"
        style={{ backgroundColor: '#FBFAF5' }}
      >
        <div
          className="font-mono text-[10rem] font-medium leading-none mb-4 opacity-10"
          style={{ color: '#16211A' }}
          aria-hidden="true"
        >
          404
        </div>
        <h1
          className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-4"
          style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#16211A' }}
        >
          This page has gone to seed.
        </h1>
        <p className="text-base text-stone mb-10 max-w-md">
          We could not find the page you were looking for. Try one of these instead.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button to="/" variant="primary">Go Home</Button>
          <Button to="/crops" variant="secondary">Our Crops</Button>
        </div>
      </div>
    </>
  );
}
