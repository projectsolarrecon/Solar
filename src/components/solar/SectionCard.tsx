import React from "react";

export default function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
      {children}
    </section>
  );
}
