import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Organization structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The SOLAR Project",
          "alternateName": "SOLAR Project",
          "description": "Supporting, Organizing, Learning, Advocating, and Reforming. Providing legal advocacy, resources, and support for individuals affected by sex offense laws.",
          "url": "https://solarproject.org",
          "logo": "https://solarproject.org/solar-project-logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "projectsolarrecon@gmail.com",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [],
          "foundingDate": "2024",
          "areaServed": "United States",
          "knowsAbout": [
            "Sex Offender Registry Reform",
            "Legal Advocacy",
            "Constitutional Rights",
            "Criminal Defense",
            "Legal Resources",
            "Policy Reform"
          ]
        })}
      </script>

      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;