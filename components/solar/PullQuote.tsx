import React from "react";

export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 pl-4 md:pl-6 border-l-4 border-red-300 italic text-slate-800 text-lg">
      {children}
    </blockquote>
  );
}
